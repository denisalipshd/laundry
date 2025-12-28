import { useState } from "react";
import { dataFaq } from "../data";

const FaqItem = ({ pertanyaan, jawaban }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className="font-semibold text-gray-800">{pertanyaan}</span>
        <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">{jawaban}</div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Pertanyaan Umum</h3>
          <p className="text-gray-600">Jawaban dari pertanyaan yang sering ditanyakan pelanggan</p>
        </div>

        <div className="space-y-6">
          {dataFaq.map((faq) => (
            <FaqItem key={faq.id} pertanyaan={faq.pertanyaan} jawaban={faq.jawaban} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
