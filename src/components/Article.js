import React from "react";
import aImage from "../sse/a.png";

const Article = () => {
  const articles = [
    {
      date: "18 Mar 2021",
      title: "New Websites & Backlinks",
      description:
        "Lorem ipsum dolor sit amsecteturii and sed doer ket eiusmod...",
      image:
        "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1627828/13827-18_1__large_square.jpg",
    },
    {
      date: "14 Mar 2021",
      title: "SEO Analysis & Content Ideas",
      description:
        "Lorem ipsum dolor sit amsecteturii and sed doer ket eiusmod...",
      image: "https://www.svgrepo.com/show/220473/seo.svg",
    },
    {
      date: "06 Mar 2021",
      title: "SEO Tips & Digital Marketing",
      description:
        "Lorem ipsum dolor sit amsecteturii and sed doer ket eiusmod...",
      image: "https://www.svgrepo.com/show/220473/seo.svg",
    },
  ];
  return (
    <section className="container mx-auto py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold">
        Check Out What Is <span className="text-blue-500">Trending</span> In Our
        Latest <span className="text-red-500">News</span>
      </h2>

      <div className="flex flex-col md:flex-row mt-10 gap-8">
        {/* Left side - Featured Article */}
        <div className="md:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={aImage}
            alt="SEO Agency"
            className="w-50 h-64 object-cover"
          />

          <div className="p-6">
            <div className="flex items-center text-sm text-gray-400 space-x-4">
              <span>📅 24 Mar 2021</span>
              <span>📄 TemplateMo</span>
              <span>🏷 Branding</span>
            </div>
            <h3 className="text-xl font-semibold mt-4">
              SEO Agency & Digital Marketing
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur and sed doer ket eiusmod
              tempor incididunt ut labore et dolore magna...
            </p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Discover More
            </button>
          </div>
        </div>

        {/* Right side - List of articles */}
        <div className="md:w-1/3 space-y-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-center bg-red-100 p-4 rounded-lg shadow-md hover:bg-red-200 transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-400">{article.date}</p>
                <h4 className="text-lg font-semibold">{article.title}</h4>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
