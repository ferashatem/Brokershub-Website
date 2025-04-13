import React from 'react'
import Header from './Header';
import HeroContent from './HeroContent';
import CTASection from './CTASection';

function FirstPage() {
  return (
    <div className="first-page h-screen w-screen flex flex-col bg-cover bg-center bg-no-repeat">
      <Header />
      <HeroContent />
      <CTASection />
    </div>
  );
}

export default FirstPage