import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SpacesSection } from './components/SpacesSection';
import { EventTypes } from './components/EventTypes';
import { Equipment } from './components/Equipment';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SpacesSection />
      <EventTypes />
      <Equipment />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;