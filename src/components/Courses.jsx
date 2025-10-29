export default function Courses() {
  const courses = [
    { title: "B.Tech in Computer Science & Engineering", desc: "Focus on AI, ML, Data Science, and Cloud Technologies.", icon: "💻" },
    { title: "B.Tech in Civil Engineering", desc: "Build infrastructure with modern sustainable technologies.", icon: "🏗️" },
    { title: "B.Tech in Electronics & Communication Engineering", desc: "Master embedded systems, IoT, and communication tech.", icon: "📡" },
    { title: "B.Tech in Electrical Engineering", desc: "Explore power systems, renewable energy, and automation.", icon: "🔌" },
    { title: "BBA (Bachelor of Business Administration)", desc: "Develop management and entrepreneurial leadership skills.", icon: "💼" },
    { title: "BCA (Bachelor of Computer Applications)", desc: "Dive into software development and application design.", icon: "🖥️" },
    { title: "B.Sc in Biotechnology", desc: "Discover breakthroughs in genetic engineering and bioprocessing.", icon: "🧬" },
    { title: "BA (Bachelor of Arts)", desc: "Nurture creative thinking and communication through liberal arts.", icon: "📚" },
    { title: "B.Com (Bachelor of Commerce)", desc: "Understand finance, accounting, and global business strategy.", icon: "💰" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="w-full py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-72 left-1/2 -translate-x-1/2 rounded-full bg-blue-100 blur-[300px] opacity-60 -z-10"></div>

        <h1 className="text-4xl font-bold text-center text-blue-800">Bachelor’s Degree Programs</h1>
        <p className="text-slate-500 text-center mt-3 mb-10 max-w-2xl mx-auto">
          Explore our wide range of undergraduate programs designed to empower innovation, leadership, and career growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
