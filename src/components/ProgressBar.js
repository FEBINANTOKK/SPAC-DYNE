import React from "react";

const ProgressBar = () => {
  const progressData = [
    { title: "Website Analysis", percentage: 84 },
    { title: "SEO Reports", percentage: 88 },
    { title: "Page Optimizations", percentage: 94 },
  ];

  return (
    <section className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Left side - Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://www.vhv.rs/dpng/d/15-158630_svg-service-web-design-hd-png-download.png"
          alt="Website Growth"
          className="w-3/4"
        />
      </div>

      {/* Right side - Text and Progress Bars */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold leading-snug">
          Grow Your Website With Our <span className="text-blue-500">SEO</span>{" "}
          Service & <span className="text-red-500">Project</span> Ideas
        </h2>
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
          Space Dynamic HTML5 template is free to use for your website projects.
          However, you are not permitted to redistribute the template ZIP file
          on any CSS template collection websites. Please contact us for more
          information. Thank you for your kind cooperation.
        </p>

        <div className="mt-8 space-y-6">
          {progressData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span className="font-semibold">{item.title}</span>
                <span className="text-blue-500 font-bold">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                  style={{ width: `${item.percentage}%` }} // Correct syntax
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
