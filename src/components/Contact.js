import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-pink-500 to-red-500 p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start  from-pink-500 to-red-500 p-8 ">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 bg-gradient-to-br from-pink-500 to-red-500 p-8">
          <h2 className="text-4xl font-extrabold leading-tight">
            Feel Free To Send Us A{" "}
            <span className="text-yellow-300">Message</span> <br />
            About Your <span className="text-yellow-300">Website Needs</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            We are here to help you. Get in touch and let's discuss how we can
            improve your online presence.
          </p>
          <div className="flex items-center gap-6 text-xl font-semibold">
            <span className="bg-white p-3 rounded-full text-red-500 shadow-md">
              📞
            </span>
            <span>010-020-0340</span>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-5xl shadow-2xl transform transition duration-300 hover:scale-105">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-4  bg-gray-100 rounded-xl outline-none border border-gray-300 focus:border-blue-400"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-1/2 p-4 bg-gray-100 rounded-xl outline-none border border-gray-300 focus:border-blue-400"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none border border-gray-300 focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none border border-gray-300 focus:border-blue-400"
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-md hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
