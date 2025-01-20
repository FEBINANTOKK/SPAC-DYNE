import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Website Reporting",
      description: "Lorem ipsum dolor sit amet ctetur ooi adipiscing eto.",
      highlighted: true,
    },
    {
      title: "SEO Optimization",
      description: "Lorem ipsum dolor sit amet ctetur ooi adipiscing eto.",
      highlighted: false,
    },
    {
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet ctetur ooi adipiscing eto.",
      highlighted: false,
    },
    {
      title: "Content Strategy",
      description: "Lorem ipsum dolor sit amet ctetur ooi adipiscing eto.",
      highlighted: false,
    },
  ];

  return (
    <section className="container mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold ">
        See What Our Agency{" "}
        <span className="text-blue-500 font-bold">Offers</span> & What We{" "}
        <span className="text-red-500 font-bold">Provide</span>
      </h2>

      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-60 h-60 flex flex-col items-center justify-center rounded-lg shadow-lg group"
          >
            {/* Text hidden by default and only shown on hover */}
            <div className="absolute bottom-full mb-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-pink-500 text-white p-4 rounded-lg">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>

            {/* Image always visible */}
            <img
              src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1627828/13827-18_1__large_square.jpg"
              alt={service.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
