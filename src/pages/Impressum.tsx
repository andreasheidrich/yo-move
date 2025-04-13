
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-yoga-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-yoga-dark">Impressum</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mt-4 mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Andreas Heidrich<br />
                YO! MOVE<br />
                München<br />
                Deutschland
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
              <p>
                Telefon: +49 176 47098233<br />
                E-Mail: YOMOVE@gmx.de
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt</h2>
              <p>
                Andreas Heidrich<br />
                München<br />
                Deutschland
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen 
                Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, 
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf 
                eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen 
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer 
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese 
                Inhalte umgehend entfernen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
              <p>
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
