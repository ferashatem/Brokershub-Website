import React from 'react'

function HeroContent() {
  return (
    <div className="text-white flex-grow flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Take Charge of Your Career and <br className="hidden sm:block" />
        Begin Earning Now
      </h1>
      <p className="pt-4 text-sm md:text-lg max-w-3xl">
        No company, no limits! Sign up now, work your own way, and get paid
        fast. Everything you need to succeed all in one app. What are you
        waiting for?
      </p>
    </div>
  );
}

export default HeroContent