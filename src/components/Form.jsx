import React, { useState } from "react";

const indianStatesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar"],
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Gurgaon", "Faridabad", "Panipat"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Churachandpur"],
  Meghalaya: ["Shillong", "Tura"],
  Mizoram: ["Aizawl", "Lunglei"],
  Nagaland: ["Kohima", "Dimapur"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
  Sikkim: ["Gangtok", "Namchi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Tripura: ["Agartala", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Varanasi"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh"],
  "West Bengal": ["Kolkata", "Siliguri", "Durgapur"],
};

const departmentsAndCourses = {
  "Computer Science": [
    "B.Tech CSE",
    "B.Tech CSE (AI & ML)",
    "B.Tech CSE (Data Science)",
    "M.Tech CSE",
    "Ph.D. CSE",
  ],
  "Electronics and Communication": [
    "B.Tech ECE",
    "B.Tech ECE (IoT)",
    "M.Tech ECE",
    "Ph.D. ECE",
  ],
  "Mechanical Engineering": [
    "B.Tech ME",
    "M.Tech ME",
    "Ph.D. ME",
  ],
  "Civil Engineering": [
    "B.Tech CE",
    "M.Tech CE",
    "Ph.D. CE",
  ],
  "Electrical Engineering": [
    "B.Tech EE",
    "M.Tech EE",
    "Ph.D. EE",
  ],
  "Management": [
    "BBA",
    "MBA (Finance)",
    "MBA (Marketing)",
    "MBA (HR)",
  ],
  "Sciences": [
    "B.Sc Physics",
    "B.Sc Chemistry",
    "B.Sc Mathematics",
    "M.Sc Physics",
    "M.Sc Chemistry",
  ],
  "Humanities": [
    "BA English",
    "BA Psychology",
    "MA English",
    "MA Psychology",
  ],
};

export default function Form() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    department: "",
    course: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "state" ? { city: "" } : {}),
      ...(name === "department" ? { course: "" } : {}),
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.state.trim()) newErrors.state = "State is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.department.trim()) newErrors.department = "Department is required.";
    if (!form.course.trim()) newErrors.course = "Course is required.";
    if (!form.consent) newErrors.consent = "Please provide your consent.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validateForm()) return;
    try {
      setMessage("✅ Application submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        department: "",
        course: "",
        consent: false,
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setMessage("❌ Submission failed. Please try again.");
    }
  };

  const states = Object.keys(indianStatesAndCities);
  const cities = form.state ? indianStatesAndCities[form.state] : [];
  const departments = Object.keys(departmentsAndCourses);
  const courses = form.department ? departmentsAndCourses[form.department] : [];

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-end bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/c/c3/Aerial_view_of_graphic_era_university.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <img
        src="https://www.timeshighereducation.com/cms-academic/sites/default/files/migrated_institution_logos/geu_logo_-_india.png"
        alt="Graphic Era University Logo"
        className="absolute top-6 left-8 w-48 md:w-56 h-auto drop-shadow-xl z-20"
      />

      <div className="absolute bottom-10 left-10 max-w-lg text-white z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Admissions Open 2025
        </h1>
        <p className="text-lg md:text-xl font-medium mb-4 leading-relaxed">
          Begin your career at the university ranked{" "}
          <span className="font-bold text-yellow-300">48</span> amongst top
          universities of India by{" "}
          <span className="font-semibold text-yellow-300">
            NIRF 2025 Ranking
          </span>{" "}
          — with consistently high placement records and the{" "}
          <span className="text-yellow-300 font-semibold">
            Highest package of ₹61.99 Lacs at Atlassian.
          </span>
        </p>
      </div>

      <div className="relative z-20 bg-white rounded-2xl shadow-2xl p-8 my-10 max-w-sm w-full mr-20 border border-blue-100 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-5 text-center text-blue-800">
          Apply for Admission
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Join one of India’s leading universities today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name, Email, Phone */}
          {["fullName", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-semibold text-gray-700 text-sm capitalize">
                {field === "fullName"
                  ? "Full Name"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm"
                placeholder={`Enter your ${field}`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* State */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700 text-sm">
              State
            </label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700 text-sm">
              City
            </label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              disabled={!form.state}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">
                {form.state ? "Select City" : "Select State first"}
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700 text-sm">
              Department
            </label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500 text-xs mt-1">{errors.department}</p>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700 text-sm">
              Course
            </label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              disabled={!form.department}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">
                {form.department ? "Select Course" : "Select Department first"}
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-red-500 text-xs mt-1">{errors.course}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 text-xs">
              I authorize the university to contact me via Email/SMS/Call.
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2.5 rounded-lg font-semibold shadow-md hover:bg-blue-800 text-sm"
          >
            Submit Application
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-blue-700 font-medium text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}























