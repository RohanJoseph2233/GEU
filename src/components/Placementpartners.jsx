import React from "react";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
 
 
];

export default function PlacementPartners() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
          Top Recruiters
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Over 200+ leading companies visit our campus every year for placements — here are some of our top recruiting partners.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {companies.map((company, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center w-40 h-24 group border border-gray-100 hover:border-blue-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-10 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-12 italic">
          *and many more industry leaders hiring our talented graduates.
        </p>
      </div>
    </section>
  );
}

