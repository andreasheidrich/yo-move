import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import YogaCard from '@/components/YogaCard';
import ContactForm from '@/components/ContactForm';
import { Dumbbell, Scaling, Leaf, Mail, WholeWord, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Aktiviere Deine Kraft und werde beweglich, flexibel und fit!"
          subtitle="Zertifizierter Stretching Coach, Yoga Lehrer (RYT500) und Breath Coach. Deep Stretching und Yoga Vinyasa Slow Flow (Basic Yoga) für alle Niveaus."
          imageUrl="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
          primaryButtonText="Kurse entdecken"
          primaryButtonLink="#courses"
          secondaryButtonText="Kontakt"
          secondaryButtonLink="#contact"
        />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mx-auto text-center mb-6">Über YO! MOVE</h2>
              <p className="text-lg text-gray-600 mb-8">
                YO! MOVE basiert auf wissenschaftlichen Erkenntnissen - ohne religiöse Elemente. 
                Kein Singen, keine Chakren, keine Gurus und keine Oms. Vergessen Sie alle Stereotypen, 
                ich unterrichte Yoga für Gesundheit und Wohlbefinden ohne Verbindung zu irgendeiner 
                Religion oder irgendeinem Dogma. Ich heiße Menschen aller Glaubensrichtungen, 
                Sexualität und Geschlechter willkommen.
              </p>
              <p className="text-lg text-yoga-primary font-medium">
                ~ NamastE ~
              </p>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section id="courses" className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">Meine Kurse</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <YogaCard
                title="Deep Stretching"
                description="Beweglich und flexibel bleiben oder wieder werden. Eine Art Yin Yoga nach wissenschaftlichen Erkenntnissen. Wir üben Yoga Posen, die einfach, effektiv und wirksam sind und uns durch Dehnung wieder mobil, beweglich und flexibel machen. Für alle Menschen jeden Alters und Sportler:innen."
                link="/contact"
                icon={<Scaling size={32} />}
              />
              
              <YogaCard
                title="Slow Flow Vinyasa Yoga (Basic Yoga)"
                description="Du willst Yoga ausprobieren oder wieder aktiv üben? Trainiere mit mir! Einfach, effektiv und wirksam! Wir üben und praktizieren Sonnengrüsse und Haltungen, die durch Modifikationen wirklich jeder trainieren kann."
                link="/contact"
                icon={<Leaf size={32} />}
              />
              
              <YogaCard
                title="Einzelunterricht"
                description="Yoga ist Selbstfürsorge. Einzelunterricht ermöglicht es dir, tiefer in die Yoga-Praxis einzutauchen. Der Fokus liegt auf der Atmung, und die richtige Technik hilft dir, deinen Körper wieder mit der Seele in Einklang zu bringen."
                link="/contact"
                icon={<WholeWord size={32} />}
              />
              
              <YogaCard
                title="Gruppentermin"
                description="Meine Gruppentermine sind eine willkommene und dringend benötigte Pause vom Stress des Alltags. Schnappe dir eine Matte und entspanne dich bei einer beruhigenden Sequenz, die du mit einem sanften Gefühl verlassen wirst."
                link="/contact"
                icon={<Dumbbell size={32} />}
              />
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">Vorteile des regelmäßigen Yoga-Übens</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-yoga-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Verbesserte Flexibilität</h3>
                <p className="text-gray-600">Erhöht die Beweglichkeit und Geschmeidigkeit von Gelenken und Muskeln.</p>
              </div>
              
              <div className="bg-yoga-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Stressreduktion</h3>
                <p className="text-gray-600">Fördert Entspannung und hilft bei der Bewältigung von Stress und Angstzuständen.</p>
              </div>
              
              <div className="bg-yoga-secondary p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yoga-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Erhöhte Energie</h3>
                <p className="text-gray-600">Steigert die Vitalität und verbessert das allgemeine Energieniveau.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12 text-center mx-auto">Kontakt</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-medium mb-4">Direkte Kontaktmöglichkeiten</h3>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <Phone size={20} className="text-yoga-primary" />
                      <a href="tel:+4917647098233" className="hover:text-yoga-primary transition-colors">
                        +49 176 47098233
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-yoga-primary" />
                      <a href="mailto:YOMOVE@gmx.de" className="hover:text-yoga-primary transition-colors">
                        YOMOVE@gmx.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-medium mb-4">Standorte</h3>
                    <p className="mb-2"><strong>München, Deutschland</strong></p>
                    <p className="mb-4">TSV München Ost und weitere Locations</p>
                    
                    <p className="mb-2"><strong>Playa del Ingles-Maspalomas, Gran Canaria</strong></p>
                    <p>Saisonale Kurse und Einzelunterricht</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-6">Schreiben Sie mir</h3>
                  <ContactForm recipientEmail="YOMOVE@gmx.de" />
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

export default Index;
