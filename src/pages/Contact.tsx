
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 text-yoga-dark">Kontakt</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Haben Sie Fragen zu meinen Kursen oder möchten Sie einen Termin vereinbaren? 
              Ich freue mich, von Ihnen zu hören.
            </p>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-yoga-secondary rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Telefon</h3>
                <p className="mb-2">Rufen Sie mich direkt an:</p>
                <a 
                  href="tel:+4917647098233" 
                  className="text-yoga-primary font-medium text-lg hover:underline"
                >
                  +49 176 47098233
                </a>
              </div>
              
              <div className="bg-yoga-secondary rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">E-Mail</h3>
                <p className="mb-2">Schreiben Sie mir eine E-Mail:</p>
                <a 
                  href="mailto:YOMOVE@gmx.de" 
                  className="text-yoga-primary font-medium text-lg hover:underline"
                >
                  YOMOVE@gmx.de
                </a>
              </div>
              
              <div className="bg-yoga-secondary rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">Standorte</h3>
                <p className="mb-2">München, Deutschland</p>
                <p>Playa del Ingles-Maspalomas, Gran Canaria</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h2 className="section-title mb-8">Kontaktformular</h2>
              <ContactForm recipientEmail="YOMOVE@gmx.de" />
            </div>
          </div>
        </section>
        
        {/* Classes Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">Kurszeiten</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-yoga-secondary p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <Clock className="text-yoga-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-medium mb-2">TSV München Ost</h3>
                    <p className="mb-1"><strong>Deep Stretching:</strong> Dienstags, 18:30 - 19:30 Uhr</p>
                    <p><strong>Slow Flow Vinyasa:</strong> Dienstags, 19:45 - 20:45 Uhr</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600">
                  Weitere Informationen und Anmeldung direkt beim TSV München Ost.
                </p>
              </div>
              
              <div className="bg-yoga-secondary p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <Clock className="text-yoga-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Playa del Ingles-Maspalomas</h3>
                    <p className="mb-1">Saisonale Kurse und Einzelunterricht</p>
                    <p>Bitte kontaktieren Sie mich für aktuelle Zeiten und Verfügbarkeit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
