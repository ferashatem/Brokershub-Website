import React from "react";

import people from "../assets/imgs/people.png";
function CTASection() {
  return (
    <div className="flex flex-col items-center gap-6 mb-10">
      <button className="bg-primary text-black hover:text-white  duration-300 font-semibold py-2 px-6 rounded-md hover:bg-yellow-400 transition">
        Get Started Now
      </button>
      <div className="flex justify-center items-center gap-3">
        <img src={people} alt="Users" className="h-8" />
        <p className="text-white text-sm md:text-base text-center">
          Over 50,000 Brokers are already utilizing our app.
        </p>
      </div>
    </div>
  );
}

export default CTASection;
