
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-yoga-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-yoga-dark">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung informiert Sie darüber, 
                wie ich mit Ihren personenbezogenen Daten umgehe.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortliche Stelle</h2>
              <p>
                Andreas Heidrich<br />
                München, Deutschland<br />
                E-Mail: YOMOVE@gmx.de
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Welche Daten werden erfasst?</h2>
              <p>
                Beim Besuch dieser Website werden keine persönlichen Daten automatisch erfasst und gespeichert. 
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, 
                Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Verwendung von Formspree</h2>
              <p>
                Für die Verarbeitung der Kontaktformulare nutze ich den Service von Formspree. 
                Wenn Sie ein Formular absenden, werden die eingegebenen Daten an Formspree übermittelt 
                und an meine E-Mail-Adresse weitergeleitet. Formspree verarbeitet Ihre Daten gemäß deren 
                Datenschutzrichtlinien, die Sie unter 
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-yoga-primary hover:underline">
                  https://formspree.io/legal/privacy-policy/
                </a> 
                einsehen können.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Zweck der Datenverarbeitung</h2>
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt ausschließlich zu dem Zweck, 
                Ihre Anfrage zu bearbeiten und mit Ihnen in Kontakt zu treten.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Speicherdauer</h2>
              <p>
                Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung des jeweiligen Zwecks 
                notwendig ist oder gesetzliche Aufbewahrungsfristen dies erfordern.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten. 
                Sie können zudem jederzeit die Berichtigung, Löschung oder Sperrung einzelner personenbezogener Daten verlangen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt bei Datenschutzfragen</h2>
              <p>
                Bei Fragen zum Datenschutz können Sie sich jederzeit per E-Mail an mich wenden: YOMOVE@gmx.de
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
