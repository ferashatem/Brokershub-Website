import React from 'react'

function HowWorksBlock({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start">
      <div className="w-[60px] h-[60px] bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        <img src={icon} alt="" />
      </div>
      <h2 className="text-3xl font-semibold text-darkblue mb-2">{title}</h2>
      <p className="text-m text-gray-500">{description}</p>
    </div>
  );
}

export default HowWorksBlock