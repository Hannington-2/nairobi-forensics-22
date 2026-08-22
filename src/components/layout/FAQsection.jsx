import { useState } from 'react';
import { getFaqsForPath } from '../../data/faqData';
import './FAQsection.css';

const faqHeadings = {
  about: {
    eyebrow: 'ABOUT OUR FIRM',
    title: 'Get to know the team behind the evidence.',
    description: 'Learn more about our approach, expertise, and the principles that guide how we support important decisions.'
  },
  services: {
    eyebrow: 'OUR SERVICES',
    title: 'Questions about finding the right support.',
    description: 'Explore common questions about our forensic, tax, recovery, restructuring, and advisory services.'
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SUPPORT',
    title: 'Context matters when the stakes are high.',
    description: 'Here are answers to common questions about our sector experience and the risks we help organisations navigate.'
  },
  insights: {
    eyebrow: 'FORENSIC INSIGHTS',
    title: 'Practical answers to complex questions.',
    description: 'Browse answers connected to the investigations, disputes, tax, governance, and recovery issues we explore.'
  },
  contact: {
    eyebrow: 'START A CONVERSATION',
    title: 'Answers before you reach out.',
    description: 'A few practical answers to help you share your enquiry with the right context and confidence.'
  },
  default: {
    eyebrow: 'COMMON QUESTIONS',
    title: 'Answers before the conversation begins.',
    description: 'Explore the questions we hear most often. These answers are a starting point, and every engagement is shaped around its circumstances.'
  }
};

const FAQsection = ({ pathname }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = getFaqsForPath(pathname);
  const section = pathname.split('/')[1] || 'default';
  const heading = faqHeadings[section] || faqHeadings.default;

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-heading">
        <p className="section-landing-eyebrow">{heading.eyebrow}</p>
        <h2 id="faq-title">{heading.title}</h2>
        <p>{heading.description}</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="faq-answer" id={`faq-answer-${index}`}>{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQsection;
