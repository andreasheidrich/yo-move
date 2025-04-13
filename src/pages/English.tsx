
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import YogaCard from '@/components/YogaCard';
import { Dumbbell, Stretch, Leaf, BookOpen } from 'lucide-react';

const English = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Activate Your Strength and Become Flexible and Fit!"
          subtitle="Certified Stretching Coach, Yoga Teacher (RYT500), and Breath Coach. Deep Stretching and Yoga Vinyasa Slow Flow (Basic Yoga) for all levels."
          imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80"
          primaryButtonText="Discover Classes"
          primaryButtonLink="#courses"
          secondaryButtonText="Contact"
          secondaryButtonLink="/contact"
          isEnglish={true}
        />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mx-auto text-center mb-6">About Andreas</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hello, my name is Andreas, I was born in 1973, I come from Munich/Bavaria, I have a degree in communications and have worked at Munich Airport for almost 15 years. I offer freelance yoga classes in Munich and Gran Canaria.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                <strong>Important:</strong> YoMo is science based (not religious). No singing, no chakras, no gurus and no oms. Forget all stereotypes, I teach yoga for health and well-being and have no affiliation with any religion or dogma. I welcome people of all faiths, sexuality and gender. I respect individuals as unique and embrace diversity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section id="courses" className="py-16 bg-yoga-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">My Classes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <YogaCard
                title="Slow Flow Vinyasa"
                description="If you want to discover yoga for yourself, you need a foundation! Our SLOW FLOW VINYASA (Vinyasa=movement and breathing) class is expressly for beginners, for all age groups. The class is structured so that everyone can participate with modifications available for all postures."
                link="/contact"
                icon={<Leaf size={32} />}
              />
              
              <YogaCard
                title="Science of Stretching™ / Deep Stretching"
                description="Deep Stretching: Staying, or Becoming, Agile and Flexible. A kind of Yin Yoga based on scientific knowledge. We practice yoga poses that are simple and effective for all people of all ages and athletes. Best results with 15 min daily homework!"
                link="/contact"
                icon={<Stretch size={32} />}
              />
              
              <YogaCard
                title="Mobility Course"
                description="I offer individual mobility courses. Train with me using a fitball or pilates ring combined with deep stretching and yoga poses. In particular, we focus on abdominal workout, back workout, improved flexibility, and enhanced mobility."
                link="/contact"
                icon={<Dumbbell size={32} />}
              />
              
              <YogaCard
                title="Zoom Classes"
                description="Zoom classes coming soon! I teach basics for yoga, Slow Flow Vinyasa classes, Deep stretching classes, and mobility classes. Contact me to make an appointment!"
                link="/contact"
                icon={<BookOpen size={32} />}
              />
            </div>
          </div>
        </section>
        
        {/* Safety Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12 text-center mx-auto">Is Yoga Safe?</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-yoga-secondary p-8 rounded-lg">
                <p className="mb-4 text-lg">Yoga is a safe sport. Here are some facts you might not know:</p>
                
                <ul className="space-y-4 list-disc pl-6">
                  <li>Injuries that occur are often re-injuries - old problems reappear.</li>
                  <li>Muscle pain experienced during training is often not severe. Muscles are well supplied with blood and heal relatively quickly.</li>
                  <li>Pressure pain is mostly harmless and can be relieved with a pillow, yoga blocks, or modifications.</li>
                  <li>Many doctors recommend yoga as part of therapy. Movement can heal!</li>
                  <li>Sudden, stabbing joint pain is problematic. If you experience this pain, stop exercising and consult a doctor.</li>
                </ul>
                
                <p className="mt-6 font-semibold text-yoga-primary">In general: before you start training, get advice from a doctor!</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Teaser */}
        <section className="py-16 bg-yoga-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Yoga Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact me for class schedules, private sessions, or any questions you might have about my yoga classes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+4917647098233" className="bg-white text-yoga-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Call +49 176 47098233
              </a>
              <a href="https://wa.me/4917647098233" className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-yoga-primary transition-all">
                WhatsApp Message
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default English;
