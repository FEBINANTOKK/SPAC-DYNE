import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold leading-tight mb-5">
            We Make <span className="text-blue-500">Digital Ideas</span> &{" "}
            <span className="text-red-500">SEO </span>Marketing
          </h1>
          <p className="text-gray-600 mb-8">
            Space Dynamic is a professional looking HTML template using
            Bootstrap 5 (beta 2). This CSS template is free for you provided by{" "}
            <a href="#" className="text-blue-500">
              TemplateMo
            </a>
            .
          </p>
          {/* Input Field */}
          <SearchBar />
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="https://www.workinghomeguide.com/wp-content/uploads/2020/12/b6ee0816a8f6ea32f19d3d11120862f1.jpg"
            alt="Team Collaboration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
