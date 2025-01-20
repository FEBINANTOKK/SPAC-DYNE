import React, { useState } from "react";

const SearchBar = () => {
  const [url, setUrl] = useState("");

  const handleAnalyze = () => {
    if (url.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    console.log("Analyzing website:", url);
    // Add further logic here (e.g., API call)
  };

  return (
    <div className="relative flex w-full max-w-md">
      <input
        type="text"
        placeholder="Your website URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full py-3 pl-4 pr-32 text-gray-700 bg-blue-500 rounded-full outline-none placeholder-white focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={handleAnalyze}
        className="absolute right-1 top-1 bottom-1 px-6 bg-white text-red-500 font-semibold rounded-full shadow-md hover:bg-red-100 transition-all"
      >
        Analyze Site
      </button>
    </div>
  );
};

export default SearchBar;
