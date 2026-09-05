import { useState } from "react";
import "./ServiceFAQ.css";

const ServiceFAQ = ({ service }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!service?.faqs || service.faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="service-faq" aria-labelledby="service-faq-title">
      <div className="container">
        <h2 id="service-faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {service.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question || index} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
