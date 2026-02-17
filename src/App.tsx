import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SpacesSection } from './components/SpacesSection';
import { Events } from './components/Events';
import { Equipment } from './components/Equipment';
import { FoodDrinks } from './components/FoodDrinks';
import { Pricing } from './components/Pricing';
import { QuoteForm } from './components/QuoteForm';
import { InfoCards } from './components/InfoCards';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SpacesSection />
      <Events />
      <Equipment />
      <FoodDrinks />
      <Pricing />
      <QuoteForm />
      <InfoCards />
      <Footer />
    </div>
  );
}

export default App;