import React from "react";

const faqs = [
  {
    question: "What programs does the university offer?",
    answer:
      "The university offers more than 85 Undergraduate, Post Graduate and Doctoral Programmes across Engineering, Computer Applications, Management, Commerce, Life Sciences, Food Technology, Hospitality, Paramedical, Humanities and Social Sciences.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Candidates can apply online and may be required to appear for an entrance exam depending on the programme. Shortlisted candidates may be called for an interview.",
  },
  {
    question: "Is there an application deadline for undergraduate courses?",
    answer:
      "Depends on the programme. Some seats fill fast; please refer to the university website for latest deadlines.",
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to the most common questions about admissions, courses,
          and life at Graphic Era University.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-white shadow-md hover:shadow-lg border border-blue-100 rounded-2xl p-6 transition-all duration-300"
          >
            <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-blue-800">
              {faq.question}
              <span className="ml-3 text-blue-600 transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      {/* Decorative bottom highlight */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t-full" />
    </section>
  );
}

