import React from "react";

const studentLifeImages = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    title: "Vibrant Campus",
    desc: "A lush green campus buzzing with creativity, collaboration, and energy.",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    title: "Cultural Fests",
    desc: "From cultural fests to tech events — students celebrate art, music, and innovation in style.",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    title: "Placements & Internships",
    desc: "Top recruiters visit every year offering dream jobs and internships across industries.",
  },
  {
    src: "https://images.unsplash.com/photo-1584697964154-ef58ef6c71f0?auto=format&fit=crop&w=800&q=80",
    title: "Hostel Life",
    desc: "Comfortable hostels with modern facilities, fostering a home-away-from-home experience.",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Library & Study Spaces",
    desc: "A serene, well-equipped library where ideas and inspiration flow freely.",
  },
  {
    src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    title: "Sports & Fitness",
    desc: "State-of-the-art sports and fitness facilities promoting a healthy lifestyle.",
  },
];

export default function StudentLife() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          Life at Graphic Era University
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience a vibrant campus life where academics meet creativity,
          friendships, and growth — all in the beautiful hills of Dehradun.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {studentLifeImages.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

