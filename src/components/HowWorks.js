import React from "react";
import HowWorksBlock from "./HowWorksBlock";
import profile from "../assets/imgs/profile.png";
import wallet from "../assets/imgs/wallet.png";
import search from "../assets/imgs/search.png";
import deal from "../assets/imgs/deal.png";
import closeDeal from "../assets/imgs/closeDeal.png";

function HowWorks() {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12">
      {/* Section Title */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-darkblue">
          How it Works
        </h1>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 flex-1">
          <HowWorksBlock
            icon={profile}
            title="Sign up and build your profile"
            description="Download the app, register and showcase your expertise and working area."
          />
          <HowWorksBlock
            icon={search}
            title="Find hot deals around you"
            description="Find clients or properties near you. Filter by type, location, or price range."
          />
          <HowWorksBlock
            icon={deal}
            title="Close the deal and log it"
            description="Confirm the deal in the app and get reviewed by the client. It builds your reputation."
          />
          <HowWorksBlock
            icon={wallet}
            title="Get your commission instantly"
            description="Once the deal is confirmed, your commission is added to your wallet and ready to withdraw."
          />
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-[500px]">
          <img
            src={closeDeal} // change to your image path
            alt="How it works"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HowWorks;
