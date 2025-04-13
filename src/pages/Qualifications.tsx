
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// This is a placeholder component for the Qualifications page.
// In a real implementation, you would include actual images of Andreas's certificates
const Qualifications = () => {
  // Sample certifications data
  const certifications = [
    {
      id: 1,
      title: "Certified Yoga Teacher (RYT500)",
      organization: "Yoga Alliance",
      year: "2020",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Certified Stretching Coach",
      organization: "YogaBody",
      year: "2019",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Certified Breath Coach",
      organization: "Yogalap",
      year: "2021",
      image: "https://images.unsplash.com/photo-1516526995003-435ccce2be97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 text-yoga-dark">Meine Qualifikationen</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auf dieser Seite finden Sie meine Zertifizierungen und Ausbildungen im Bereich Yoga und Beweglichkeit. 
              Jede meiner Zertifizierungen stellt sicher, dass ich Ihnen qualitativ hochwertige und sichere Anleitungen geben kann.
            </p>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">Zertifizierungen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-yoga-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{cert.title}</h3>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Organization:</span> {cert.organization}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Year:</span> {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dies ist nur eine Auswahl meiner Zertifizierungen. Ich bilde mich kontinuierlich weiter, 
                um Ihnen die bestmögliche Yogaerfahrung zu bieten. Für eine vollständige Liste meiner 
                Qualifikationen oder spezifische Fragen können Sie mich gerne kontaktieren.
              </p>
            </div>
          </div>
        </section>
        
        {/* Commitment to Education Section */}
        <section className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title mb-8 text-center mx-auto">Mein Engagement für kontinuierliche Bildung</h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Yoga und die Wissenschaft der Beweglichkeit entwickeln sich ständig weiter. 
              Ich verpflichte mich, auf dem neuesten Stand der wissenschaftlichen Forschung zu bleiben, 
              um meinen Schülern die effektivsten und sichersten Techniken beibringen zu können.
            </p>
            
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Fragen zu meinen Qualifikationen?
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Qualifications;
