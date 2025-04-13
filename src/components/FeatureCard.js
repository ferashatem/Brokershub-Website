import React from 'react'

function FeatureCard({ icon, description, title }) {
  return (
    <div className="h-[325px] w-full max-w-[298px] bg-darkblue border hover:text-primary hover:border-primary border-gray-400 rounded-lg text-white p-6 text-center hover:shadow-xl transition duration-300 mx-auto">
      <div className="w-[100px] h-[100px] group-hover:text-primary border-2 border-white rounded-full mx-auto flex items-center justify-center mb-4 text-3xl">
        <img className="group-hover:text-primary" src={icon} alt="" />
      </div>
      <h3 className="font-semibold hover:text-primary text-lg mb-2">{title}</h3>
      <p className="text-s text-gray-300">{description}</p>
    </div>
  );
}

export default FeatureCard