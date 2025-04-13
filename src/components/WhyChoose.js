import React from 'react'
import ora from "../assets/imgs/ora.png";
import tmg from "../assets/imgs/TMG.png";
import cityEdge from "../assets/imgs/cityedge.png";
import newgiza from "../assets/imgs/newgiza.png";
import palm from "../assets/imgs/palmhills.png";
import phone from "../assets/imgs/phone.png";

function WhyChoose() {
  return (
    <section className="w-full px-4 md:px-12 py-16 bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32">
        {/* Phone Section */}
        <div className="relative w-[300px] md:w-[350px]">
          <img src={phone} alt="App Preview" className="w-full mx-auto" />
        </div>

        {/* Features Section */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-1200 mb-8">
            Why Choose Brokers Hub?
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start mb-6">
            <div className="w-[50px] h-[50px] aspect-square flex items-center justify-center rounded-full border-2 bg-[#1D2746] border-[#1D2746] text-white font-bold mr-4">
              1
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Effortless Commission Tracking
              </h4>
              <p className="text-gray-600 text-sm">
                Easily track your commissions, requests, and payouts in one
                transparent and user-friendly platform.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start mb-6">
            <div className="w-[50px] h-[50px] aspect-square flex items-center justify-center rounded-full border-2 border-[#1D2746] text-[#1D2746] font-bold mr-4">
              2
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Direct Access to Leading Developers
              </h4>
              <p className="text-gray-600 text-sm">
                Connect and collaborate with over 200 trusted developers like
                ORA and Talat Mostafa—no middlemen, no delays.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="w-[50px] h-[50px] aspect-square flex items-center justify-center rounded-full border-2 border-[#1D2746] text-[#1D2746] font-bold mr-4">
              3
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Mobile-Optimized Experience
              </h4>
              <p className="text-gray-600 text-sm">
                Work from anywhere with a smooth, user-friendly mobile interface
                designed for brokers on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="mt-16 text-center  ">
        <p className="text-gray-800 text-sm md:text-base">
          Trusted By Industry Leaders{" "}
          <span className="text-primary font-semibold">Over 200 Partners</span>{" "}
          Top Developers in the Field
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mt-6">
          <img src={ora} alt="ORA" className="h-16 md:h-20 object-contain" />
          <img src={tmg} alt="TMG" className="h-16 md:h-20 object-contain" />
          <img
            src={cityEdge}
            alt="City Edge"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={newgiza}
            alt="NewGiza"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={palm}
            alt="Palm Hills"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose