import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqcar from '../../assets/faqcar.png'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Which documents are needed to pick up a rental car?",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ofhoail vulputate libero et velit interdum, ac aliquet odio mattis. Jorem ipsum dolor sit.",
    },
    {
      question: "Which documents are needed to pick up a rental car?",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ofhoail vulputate libero et velit interdum, ac aliquet odio mattis. Jorem ipsum dolor sit.",
    },
    {
      question: "Which documents are needed to pick up a rental car?",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ofhoail vulputate libero et velit interdum, ac aliquet odio mattis. Jorem ipsum dolor sit.",
    },
    {
      question: "Which documents are needed to pick up a rental car?",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ofhoail vulputate libero et velit interdum, ac aliquet odio mattis. Jorem ipsum dolor sit.",
    },
    {
      question: "Which documents are needed to pick up a rental car?",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ofhoail vulputate libero et velit interdum, ac aliquet odio mattis. Jorem ipsum dolor sit.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] mb-8">
            Frequently Asked <br /> Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className=" pb-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start gap-3 w-full text-left"
                >

                  <span className="mt-1">
                    {openIndex === index ? (
                      <Minus className="text-[#EA3C3C] w-5 h-5" />
                    ) : (
                      <Plus className="text-[#EA3C3C] w-5 h-5" />
                    )}
                  </span>

                  <span
                    className={`font-semibold transition-colors ${
                      openIndex === index
                        ? "text-[#1A202C]"
                        : "text-[#737373] hover:text-[#EA3C3C]"
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`mt-2 ml-8 text-sm text-gray-500 transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-last md:order-none  md:absolute md:right-0">
          <img
            src={faqcar}
            alt="Red car"
            className="w-full ml-6 max-w-md md:max-w-lg object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
