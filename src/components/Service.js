import React from "react";
import aImage from "../sse/img.png";

const Service = () => {
  const services = [
    {
      title: "Data Analysis",
      description: "Lorem ipsum dolor sit amet, ctetur ooi adipiscing eilter",
      icon: "📊",
    },
    {
      title: "Web Analytics",
      description: "Lorem ipsum dolor sit amet, ctetur ooi adipiscing eilter",
      icon: "🌐",
    },
    {
      title: "Data Reporting",
      description: "Lorem ipsum dolor sit amet, ctetur ooi adipiscing eilter",
      icon: "📋",
    },
    {
      title: "SEO Suggestions",
      description: "Lorem ipsum dolor sit amet, ctetur ooi adipiscing eilter",
      icon: "🔍",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-500 to-pink-600 text-white py-16 px-8 rounded-lg">
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img src={aImage} alt="SEO Agency" className="w-40 h-64 object-cover" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center bg-white bg-opacity-10 p-5 rounded-lg hover:scale-105 transition-transform"
          >
            <div className="text-4xl mr-4">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
