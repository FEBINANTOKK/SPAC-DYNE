import React from "react";
import ServicesSection from "./components/serviceSection";
import SearchBar from "./components/SearchBar";
import Service from "./components/Service";
import Article from "./components/Article";
import ProgressBar from "./components/ProgressBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactForm from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <div>
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <Hero />
      </div>
      <Service />

      {/* SEO Services Section */}
      <ProgressBar />

      <ServicesSection />

      <div className="bg-gray-100">
        <Article />
      </div>

      <div className="bg-gradient-to-br from-pink-500 to-red-500">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
