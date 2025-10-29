import React from "react";

const highlight = [
  { title: "Up to 70% Merit-Based Scholarships" },
  { title: "Up to 10% Additional Scholarship for Female Candidates" },
  { title: "Up to 5% Tuition Fee Waiver for Wards of Defence Personnel" },
];

function Highlights() {
  return (
    <div className="mb-16 mt-10 px-6 md:px-20">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-800 tracking-wide">
        Scholarship Highlights
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {highlight.map((h, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-1 bg-white/70 rounded-full"></div>
              <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {h.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
