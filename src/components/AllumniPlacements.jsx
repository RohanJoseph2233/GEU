import React from "react";

const alumni = [
  {
    name: "Riya Sharma",
    role: "Software Engineer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Arjun Mehta",
    role: "Data Analyst",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Neha Verma",
    role: "Frontend Developer",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Rohan Gupta",
    role: "Product Designer",
    company: "Adobe",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Adobe_Corporate_logo.svg",
  },
  {
    name: "Priya Nair",
    role: "AI Research Engineer",
    company: "IBM",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Aditya Singh",
    role: "DevOps Engineer",
    company: "Netflix",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
  },
  {
    name: "Sneha Kapoor",
    role: "Data Scientist",
    company: "Meta",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Karan Patel",
    role: "Backend Engineer",
    company: "Apple",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Tanya Das",
    role: "Business Analyst",
    company: "Deloitte",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
  },
  {
    name: "Vikram Rao",
    role: "Cloud Architect",
    company: "Oracle",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

export default function AlumniPlacements() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          Our Proud Alumni
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Graduates from Graphic Era University are shaping the future at
          leading companies around the world.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {alumni.map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <img
                  src={person.logo}
                  alt={person.company}
                  className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full p-1 shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-700">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-sm font-medium text-gray-800">
                  {person.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




