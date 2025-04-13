import React from 'react'
import house from "../assets/imgs/house.png";
import ring from "../assets/imgs/ring.png";
import money from "../assets/imgs/money.png";
import invite from "../assets/imgs/invite.png";
import FeatureCard from './FeatureCard';

function WhatProvide() {
  return (
    <div className="min-h-screen h-[90vh] w-full bg-darkblue flex flex-col">
      {/* Header Section */}
      <div className="h-auto py-10 flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-semibold text-primary">
          What We Provide ?
        </h1>
        <p className="text-center text-white px-4">
          From managing property listings to tracking commissions, Brokers Hub
          provides <br className="hidden sm:block" /> all the tools you need to
          expand your business.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4 mx-auto pb-16">
        <FeatureCard
          icon={house}
          title="Effortless Listing Management"
          description="Easily add, edit, and showcase properties with just a few taps. Keep your listings current anytime, anywhere."
        />
        <FeatureCard
          icon={invite}
          title="Earn When You Invite Others"
          description="Allows users to earn rewards by referring new people to the platform."
        />
        <FeatureCard
          icon={ring}
          title="Instant Notifications"
          description="Get real-time updates on new leads, client feedback, and upcoming meetings to stay informed."
        />
        <FeatureCard
          icon={money}
          title="Track Your Earnings with Ease"
          description="Easily monitor your earnings. Brokers Hub guarantees transparent tracking so you receive the commissions you deserve."
        />
      </div>
    </div>
  );
}

export default WhatProvide