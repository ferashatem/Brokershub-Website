import React from 'react'
import appstore from "../assets/imgs/appstore.png";
import playstore from "../assets/imgs/playstore.png";
function Download() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center px-4 sm:px-6 lg:px-0">
      <div className="relative w-full max-w-6xl rounded-2xl bg-darkblue overflow-hidden py-12 px-4 sm:px-12 text-center">
        {/* Top-left radial circle */}
        <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl opacity-60 z-0"></div>

        {/* Bottom-right radial circle */}
        <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            Get Started Now
          </h1>
          <p className="text-white text-sm sm:text-base mb-8 max-w-xl">
            Ready to get started? Download now and join thousands of brokers.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <img src={playstore} alt="Google Play" className="h-14 sm:h-16" />
            <img src={appstore} alt="App Store" className="h-14 sm:h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download