
import React, { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  emailServiceUrl?: string; // Optional prop for formspree or similar service
  recipientEmail: string;
}

const ContactForm = ({ emailServiceUrl = "https://formspree.io/f/yourformid", recipientEmail }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Fehler",
        description: "Bitte bestätigen Sie, dass Sie kein Roboter sind.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Example with formspree
      const response = await fetch(emailServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          'g-recaptcha-response': recaptchaToken,
          _replyto: email,
          _subject: subject || 'Neue Nachricht von YO! MOVE',
          recipientEmail,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Erfolgreich gesendet!",
          description: "Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden.",
        });
        
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yoga-primary"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yoga-primary"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefonnummer
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yoga-primary"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Betreff
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yoga-primary"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Nachricht
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yoga-primary"
          required
        />
      </div>
      
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleRecaptchaChange}
        />
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary disabled:opacity-70"
        >
          {isLoading ? 'Senden...' : 'Absenden'}
        </button>
      </div>
      
      <p className="text-sm text-gray-500">
        Hinweis: Diese Formular sendet Ihre Nachricht an {recipientEmail}. 
        Durch das Absenden stimmen Sie unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
};

export default ContactForm;
