import companyFaqs from './faqs/companyFaqs';

const generalFaqs = [
  {
    question: 'What does Nairobi Forensics help with?',
    answer: 'We help organisations investigate financial concerns, manage risk, resolve disputes, and make decisions supported by clear evidence.'
  },
  {
    question: 'Who can engage your team?',
    answer: 'Businesses, investors, legal professionals, institutions, and other stakeholders can engage us for independent forensic and advisory support.'
  },
  {
    question: 'How do you protect confidential information?',
    answer: 'We handle engagement information carefully and apply professional standards for confidentiality, independence, and secure communication.'
  },
  {
    question: 'Can your work support a dispute or investigation?',
    answer: 'Yes. We can provide financial analysis, investigative support, litigation support, and professionally defensible reporting.'
  },
  {
    question: 'How do I start a conversation?',
    answer: 'Use the contact page to share a brief outline of your matter, the relevant timeline, and your preferred contact details.'
  }
];

export const faqData = {
  about: [
    ...generalFaqs.slice(0, 3),
    { question: 'What guides your approach?', answer: 'We combine independence, investigative rigour, financial expertise, and practical recommendations tailored to each matter.' },
    { question: 'Where do you provide services?', answer: 'We support domestic and cross-border matters from Kenya, working with organisations and professionals across relevant markets.' }
  ],
  services: [
    { question: 'What services do you provide?', answer: 'Our services include forensic accounting, investigations, tax advisory, recovery, restructuring, governance, risk advisory, and dispute support.' },
    { question: 'Can services be tailored to my matter?', answer: 'Yes. We shape the scope around the questions, evidence, timeline, and decisions involved in your matter.' },
    { question: 'Do you work with legal teams?', answer: 'Yes. We support legal professionals with financial analysis, litigation support, and expert advisory where appropriate.' },
    { question: 'Can you help with suspected fraud?', answer: 'We can examine records, trace transactions, identify anomalies, preserve relevant evidence, and clarify potential financial impact.' },
    { question: 'How do I choose the right service?', answer: 'Start with a short description of the issue. Our team can help identify the most suitable scope and next step.' }
  ],
  industries: [
    { question: 'Which industries do you support?', answer: 'We support organisations across sectors where financial, investigative, regulatory, or governance decisions carry significant consequences.' },
    { question: 'Do you understand sector-specific risks?', answer: 'We combine sector context with forensic and advisory expertise to assess the risks and evidence relevant to each organisation.' },
    ...generalFaqs.slice(2)
  ],
  insights: [
    { question: 'What topics do your insights cover?', answer: 'Our insights cover investigations, disputes, tax decisions, valuation, compliance, risk, and business recovery.' },
    { question: 'Who are the insights for?', answer: 'They are written for leaders, investors, legal professionals, finance teams, and anyone assessing complex financial matters.' },
    { question: 'Are the insights practical?', answer: 'Yes. We connect professional experience with practical questions and decisions organisations face.' },
    { question: 'Can I request a topic?', answer: 'Yes. Contact our team with the question or issue you would like us to explore.' },
    { question: 'How often are new insights added?', answer: 'New articles and guides will be added as they are prepared and published.' }
  ],
  contact: [
    ...companyFaqs
  ],
  default: generalFaqs
};

export const getFaqsForPath = (pathname) => {
  const section = pathname.split('/')[1];
  return faqData[section] || faqData.default;
};
