// src/data/services/ServiceData.js
// Complete file with all 27 services - Nairobi Forensics LLP

const servicesData = {
  // ============================================================
  // FORENSIC ACCOUNTING & FINANCIAL INVESTIGATIONS (6 Services)
  // ============================================================

  "forensic-accounting": {
    slug: "forensic-accounting",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Forensic Accounting Services in Kenya",
    shortTitle: "Forensic Accounting",
    eyebrow: "Forensic Accounting Services",
    hero: {
      heading: "Forensic Accounting Services in Kenya",
      subheading: "Independent Financial Investigation, Analysis and Evidence-Led Reporting",
      description: "Nairobi Forensics LLP provides forensic accounting services in Kenya for businesses, legal professionals, financial institutions, regulators and other organisations dealing with suspected fraud, financial irregularities, disputes and complex financial matters."
    },
    overview: {
      heading: "What Is Forensic Accounting?",
      paragraphs: [
        "Forensic accounting combines accounting, financial analysis, investigation and evidence-based reporting to examine financial information, establish facts, identify irregularities, trace transactions and quantify financial exposure.",
        "Our work is structured to help clients understand complex financial matters and, where required, support disciplinary, regulatory, dispute-resolution and litigation processes."
      ]
    },
    services: [
      { title: "Financial Investigations", description: "We investigate complex financial transactions, unexplained movements of funds, suspected irregularities and other matters requiring detailed financial analysis." },
      { title: "Fraud and Misconduct Reviews", description: "We review financial records and supporting evidence where fraud, embezzlement, corruption, misuse of assets or other financial misconduct is suspected." },
      { title: "Transaction Tracing", description: "We analyse the movement of funds through bank accounts, financial records and other available documentation to reconstruct transactions." },
      { title: "Asset Tracing", description: "Our financial investigation work may assist in identifying and analysing assets, sources and uses of funds and relevant ownership or transaction records." },
      { title: "Loss Quantification", description: "We assess financial losses and economic impact arising from fraud, disputes, breaches of contract and other events." },
      { title: "Litigation and Dispute Support", description: "We provide financial analysis, schedules, reports and professional support for matters involving commercial disputes, financial claims and litigation." },
      { title: "Financial Record Reconstruction", description: "Where records are incomplete, fragmented or unreliable, we analyse available information to reconstruct relevant financial activity." }
    ],
    situations: [
      "Suspected employee fraud", "Embezzlement or asset misappropriation", "Unexplained financial losses",
      "Financial statement irregularities", "Shareholder or partnership disputes", "Commercial disputes and claims",
      "Financial misconduct allegations", "Asset tracing requirements", "Tax-related financial disputes",
      "Financial loss claims and quantification", "Complex financial investigations", "Regulatory investigations"
    ],
    process: [
      { number: "01", title: "Understanding the Matter", description: "We begin by understanding the nature of the issue, the available records and the questions that need to be answered." },
      { number: "02", title: "Defining the Scope", description: "We establish an appropriate scope of work based on the circumstances and objectives of the engagement." },
      { number: "03", title: "Collecting and Reviewing Financial Information", description: "Relevant financial records, transaction data and supporting documentation are reviewed and analysed." },
      { number: "04", title: "Investigation and Analysis", description: "We apply forensic accounting procedures to identify relevant transactions, inconsistencies, relationships, patterns and financial impact." },
      { number: "05", title: "Quantifying the Findings", description: "Where appropriate, we calculate financial exposure, losses, damages or other relevant amounts." },
      { number: "06", title: "Reporting", description: "Our findings are communicated in a clear and structured manner based on the procedures performed and information available." }
    ],
    industries: ["Financial Services", "Manufacturing", "Construction", "Real Estate", "Insurance", "Non-Profit Organisations", "Professional Services", "Government and Public Sector", "Healthcare", "Education", "Family Businesses", "Corporate Organisations"],
    audiences: ["Businesses", "Boards and Management", "Legal Professionals", "Financial Institutions", "Insurers", "Investors", "Regulators", "Public Sector Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP brings together forensic accounting, financial investigation, tax advisory, litigation support, business recovery, insolvency and restructuring capabilities.",
        "This integrated approach allows us to examine a financial problem from multiple perspectives. A suspected fraud matter, for example, may involve financial investigation, asset tracing, tax implications, loss quantification and potential litigation support."
      ]
    },
    faqs: [
      { question: "What does a forensic accountant do?", answer: "A forensic accountant investigates and analyses financial information to establish facts, identify irregularities, trace transactions, quantify financial impact and support investigations or disputes." },
      { question: "What is the difference between forensic accounting and auditing?", answer: "An audit generally focuses on financial reporting and assurance objectives. Forensic accounting focuses on investigating specific financial questions, irregularities, transactions, losses or disputes." },
      { question: "Can forensic accounting help in a fraud investigation?", answer: "Yes. Forensic accounting can help analyse financial records, trace transactions, identify irregularities and quantify potential financial exposure." },
      { question: "Can forensic accounting support court cases?", answer: "Depending on the engagement and requirements of the matter, forensic accounting analysis may support litigation, dispute resolution and other legal processes." }
    ],
    relatedServices: [
      { title: "Fraud Investigations", slug: "fraud-investigations" },
      { title: "Financial Forensic Investigations", slug: "financial-forensic-investigations" },
      { title: "Financial Forensic Audits", slug: "financial-forensic-audits" },
      { title: "Asset Tracing", slug: "asset-tracing" },
      { title: "Litigation Support", slug: "litigation-support" }
    ],
    cta: {
      heading: "Speak to a Forensic Accounting Specialist",
      text: "If you require independent forensic accounting services in Kenya or support for a complex financial matter, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Discuss Your Matter",
      buttonLink: "/contact"
    }
  },

  "fraud-investigations": {
    slug: "fraud-investigations",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Fraud Investigation Services in Kenya",
    shortTitle: "Fraud Investigations",
    eyebrow: "Fraud Investigation Services",
    hero: {
      heading: "Fraud Investigation Services in Kenya",
      subheading: "Independent Investigation of Suspected Fraud and Financial Misconduct",
      description: "Nairobi Forensics LLP provides independent fraud investigation services in Kenya for businesses, organisations, institutions and professional advisers dealing with suspected financial misconduct. Fraud allegations can involve complex transactions, multiple individuals, incomplete records and significant financial or reputational risk."
    },
    overview: {
      heading: "What Is a Fraud Investigation?",
      paragraphs: [
        "A fraud investigation involves the systematic examination of financial records, transactions, documentation and evidence to establish facts surrounding suspected fraud, misconduct or financial irregularities.",
        "Our fraud investigations help organisations understand what occurred, identify those responsible, assess financial impact and take appropriate action."
      ]
    },
    services: [
      { title: "Employee Fraud", description: "We investigate fraud committed by employees, including theft, embezzlement and misuse of assets." },
      { title: "Embezzlement", description: "We investigate embezzlement, misappropriation and theft of funds or assets." },
      { title: "Asset Misappropriation", description: "We investigate the theft, misuse or misappropriation of company assets." },
      { title: "Procurement Fraud", description: "We investigate fraud in procurement processes, including supplier collusion, kickbacks and inflated invoices." },
      { title: "Payroll Fraud", description: "We investigate payroll fraud, including ghost employees, timesheet fraud and unauthorized payments." },
      { title: "Financial Statement Manipulation", description: "We investigate financial statement manipulation and accounting irregularities." },
      { title: "Corruption and Bribery", description: "We investigate corruption, bribery and associated financial activity." }
    ],
    situations: [
      "Suspected employee fraud", "Embezzlement", "Asset misappropriation", "Procurement fraud",
      "Payroll fraud", "Ghost employees", "Conflicts of interest", "Related-party transactions",
      "Diversion of funds", "False claims", "Financial statement manipulation", "Corruption and bribery allegations"
    ],
    process: [
      { number: "01", title: "Initial Assessment", description: "We assess the available information and understand the concerns that have led to the investigation." },
      { number: "02", title: "Investigation Planning", description: "The scope and objectives of the investigation are defined based on the nature of the allegations and available evidence." },
      { number: "03", title: "Document and Data Review", description: "We analyse relevant records, including financial statements, bank records, accounting data, invoices, contracts and supporting documentation." },
      { number: "04", title: "Transaction Analysis", description: "Relevant transactions are traced and analysed to identify unusual activity, inconsistencies and potential financial exposure." },
      { number: "05", title: "Interviews and Corroboration", description: "Where within scope, relevant information may be corroborated against documentation and other available evidence." },
      { number: "06", title: "Quantification", description: "Where appropriate, we quantify identified financial losses or exposure." },
      { number: "07", title: "Reporting", description: "We provide structured findings explaining the work performed, information considered and conclusions reached." }
    ],
    industries: ["Financial Services", "Manufacturing", "Construction", "Real Estate", "Insurance", "Professional Services", "Healthcare", "Education", "Government", "Non-Profit", "Family Businesses", "Corporate Organisations"],
    audiences: ["Boards and Directors", "Management", "Legal Professionals", "Audit Committees", "Investors", "Organisations", "Regulators"],
    whyUs: {
      heading: "Why an Independent Fraud Investigation Matters",
      paragraphs: [
        "When fraud is suspected, an organisation may need an independent assessment of the facts. A properly structured investigation can help management, boards and advisers understand what happened, assess financial exposure, identify affected transactions, determine potential control weaknesses, support internal decision-making, prepare for disciplinary or regulatory processes, and obtain financial evidence for disputes where required.",
        "Identifying fraud is only one part of managing financial risk. Following an investigation, organisations may also require fraud risk assessment, internal control review, asset tracing, loss quantification, litigation support, expert witness services, tax analysis and governance improvements."
      ]
    },
    faqs: [
      { question: "What should a company do when fraud is suspected?", answer: "The appropriate response depends on the circumstances. Organisations should preserve relevant information, manage confidentiality and obtain appropriate professional and legal advice before taking actions that could affect an investigation." },
      { question: "How long does a fraud investigation take?", answer: "The timeframe depends on the complexity of the allegations, the volume of records and the scope of work required." },
      { question: "Can a forensic accountant investigate fraud?", answer: "Yes. Forensic accountants analyse financial records, transactions and supporting evidence to investigate suspected financial misconduct." },
      { question: "What happens after a fraud investigation?", answer: "Findings are reported to the organisation, enabling informed decisions about corrective action, legal proceedings, disciplinary measures and control improvements." }
    ],
    relatedServices: [
      { title: "Forensic Accounting", slug: "forensic-accounting" },
      { title: "Financial Forensic Investigations", slug: "financial-forensic-investigations" },
      { title: "Financial Forensic Audits", slug: "financial-forensic-audits" },
      { title: "Fraud Risk Assessment", slug: "fraud-risk-assessment" },
      { title: "Asset Tracing", slug: "asset-tracing" }
    ],
    cta: {
      heading: "Contact Nairobi Forensics LLP",
      text: "If your organisation requires an independent fraud investigation in Kenya, contact Nairobi Forensics LLP to discuss the matter confidentially.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "financial-forensic-investigations": {
    slug: "financial-forensic-investigations",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Financial Forensic Investigation Services in Kenya",
    shortTitle: "Financial Forensic Investigations",
    eyebrow: "Financial Forensic Investigations",
    hero: {
      heading: "Financial Forensic Investigation Services in Kenya",
      subheading: "Evidence-Based Investigation of Complex Financial Matters",
      description: "Nairobi Forensics LLP provides financial forensic investigation services for organisations and advisers dealing with suspected fraud, financial misconduct, irregular transactions and complex financial disputes."
    },
    overview: {
      heading: "What Is a Financial Forensic Investigation?",
      paragraphs: [
        "Financial forensic investigations involve detailed examination of financial information, transactions and supporting evidence to establish facts surrounding suspected irregularities, misconduct, fraud or financial disputes.",
        "Our investigations help organisations understand what happened, how it happened and the financial impact, enabling informed decision-making and appropriate action."
      ]
    },
    services: [
      { title: "Financial Investigations", description: "Investigation of financial irregularities, unexplained transactions and suspected misconduct." },
      { title: "Transaction Analysis", description: "Detailed analysis of financial transactions to identify patterns, anomalies and concerning activity." },
      { title: "Funds Tracing", description: "Analysis of financial records to trace the movement of funds through accounts and transactions." },
      { title: "Financial Record Reconstruction", description: "Reconstruction of financial activity using available records, transactions and documentation." },
      { title: "Fraud Analysis", description: "Financial analysis to support fraud investigations and identify fraudulent activity." },
      { title: "Asset Analysis", description: "Analysis of financial information relating to assets, ownership and transactions." },
      { title: "Loss Quantification", description: "Assessment and quantification of financial losses arising from investigated matters." }
    ],
    situations: [
      "Suspected financial irregularities", "Employee fraud", "Financial misconduct allegations",
      "Unexplained financial losses", "Shareholder disputes", "Commercial disputes",
      "Regulatory investigations", "Whistleblower allegations", "Asset misappropriation", "Financial statement concerns"
    ],
    process: [
      { number: "01", title: "Identify the Issue", description: "We establish the nature of the financial concern, allegations or investigation question." },
      { number: "02", title: "Define Investigation Scope", description: "We establish an appropriate scope based on the specific concerns and available information." },
      { number: "03", title: "Gather Information", description: "Relevant financial records, transaction data and supporting documentation are collected." },
      { number: "04", title: "Analyse Transactions", description: "We examine transactions, patterns, relationships and relevant financial evidence." },
      { number: "05", title: "Corroborate Findings", description: "Findings are corroborated using available evidence and documentation." },
      { number: "06", title: "Quantify Impact", description: "Where appropriate, we assess financial losses, exposure and other impacts." },
      { number: "07", title: "Report Findings", description: "Our findings are communicated clearly based on the investigation performed." }
    ],
    industries: ["Financial Services", "Manufacturing", "Construction", "Real Estate", "Insurance", "Professional Services", "Healthcare", "Education", "Government", "Non-Profit", "Family Businesses", "Corporate Organisations"],
    audiences: ["Businesses", "Boards and Directors", "Management", "Legal Professionals", "Financial Institutions", "Investors", "Regulators", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent financial forensic investigation services using a structured approach that combines accounting analysis, transaction examination and investigative techniques.",
        "Our multidisciplinary expertise allows us to examine complex financial matters from multiple perspectives."
      ]
    },
    faqs: [
      { question: "What is a financial forensic investigation?", answer: "A financial forensic investigation involves detailed examination of financial information, transactions and supporting evidence to establish facts surrounding suspected irregularities, misconduct, fraud or financial disputes." },
      { question: "When is a financial forensic investigation needed?", answer: "A financial forensic investigation may be needed when there are suspected fraud, financial irregularities, unexplained transactions, misconduct allegations or financial disputes." },
      { question: "What does a financial forensic investigation involve?", answer: "A financial forensic investigation involves identifying the issue, gathering information, analysing transactions, tracing funds, reconstructing financial activity and reporting findings." },
      { question: "Can financial forensic investigations support legal proceedings?", answer: "Depending on the engagement and requirements, financial forensic investigations may support legal proceedings, dispute resolution and other processes." }
    ],
    relatedServices: [
      { title: "Forensic Accounting", slug: "forensic-accounting" },
      { title: "Fraud Investigations", slug: "fraud-investigations" },
      { title: "Financial Forensic Audits", slug: "financial-forensic-audits" },
      { title: "Asset Tracing", slug: "asset-tracing" }
    ],
    cta: {
      heading: "Discuss Your Financial Investigation Requirements",
      text: "Contact Nairobi Forensics LLP to discuss your financial forensic investigation requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "financial-forensic-audits": {
    slug: "financial-forensic-audits",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Forensic Audit Services in Kenya",
    shortTitle: "Financial Forensic Audits",
    eyebrow: "Forensic Audit Services",
    hero: {
      heading: "Forensic Audit Services in Kenya",
      subheading: "Detailed Examination of Financial Records for Specific Concerns",
      description: "Nairobi Forensics LLP provides independent forensic audit services in Kenya for organisations dealing with suspected fraud, financial irregularities, financial misconduct, control weaknesses and complex transactions."
    },
    overview: {
      heading: "What Is a Forensic Audit?",
      paragraphs: [
        "A forensic audit is a detailed examination of financial records and transactions undertaken to investigate specific concerns or allegations. Depending on the engagement, a forensic audit may seek to establish whether financial irregularities occurred, how transactions were processed, whether internal controls were bypassed, whether funds or assets were misused, the financial impact of identified issues, which records support the findings, and what weaknesses may require management attention.",
        "Our forensic audit services help organisations identify irregularities, assess control weaknesses, investigate allegations and understand financial exposure."
      ]
    },
    services: [
      { title: "Fraud and Financial Misconduct Reviews", description: "We examine financial records where fraud, embezzlement, misuse of funds or other financial misconduct is suspected." },
      { title: "Transaction Testing", description: "Relevant transactions are reviewed to identify unusual patterns, inconsistencies and unexplained activity." },
      { title: "Internal Control Reviews", description: "We assess relevant financial processes and controls to identify weaknesses that may have contributed to the matter under review." },
      { title: "Procurement and Payment Reviews", description: "We analyse procurement, supplier and payment transactions where irregularities or financial concerns have been identified." },
      { title: "Financial Record Analysis", description: "We examine accounting records, bank information, invoices, contracts and other relevant documentation." },
      { title: "Loss and Exposure Assessment", description: "Where appropriate, we quantify identified losses or potential financial exposure." }
    ],
    situations: [
      "Suspected employee fraud", "Unexplained financial losses", "Suspected procurement irregularities",
      "Misuse of organisational funds", "Concerns about financial controls", "Unusual payments or transactions",
      "Financial misconduct allegations", "Shareholder or management disputes", "Concerns raised through whistleblowing"
    ],
    process: [
      { number: "01", title: "Initial Assessment", description: "We identify the concerns, allegations and financial questions requiring investigation." },
      { number: "02", title: "Scope Definition", description: "The objectives and procedures are agreed based on the circumstances of the matter." },
      { number: "03", title: "Information Review", description: "Relevant records and documentation are identified and examined." },
      { number: "04", title: "Detailed Analysis", description: "Transactions, financial patterns and supporting evidence are analysed." },
      { number: "05", title: "Findings and Quantification", description: "Relevant findings are assessed, and financial impact may be quantified where appropriate." },
      { number: "06", title: "Reporting", description: "We prepare a structured report explaining the work performed, evidence considered and findings reached." }
    ],
    industries: ["Financial Services", "Manufacturing", "Construction", "Real Estate", "Healthcare", "Education", "Non-Profit Organisations", "Government", "Corporate Organisations", "Family Businesses"],
    audiences: ["Boards and Directors", "Management", "Legal Professionals", "Regulators", "Audit Committees", "Investors", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent forensic audit services using a structured approach focused on financial records, transactions and controls. Our team combines forensic accounting, financial investigations, fraud analysis, tax expertise, litigation support and business advisory capabilities.",
        "This enables us to examine financial matters from an integrated perspective and provide specialist support where issues extend beyond a single financial question."
      ]
    },
    faqs: [
      { question: "What is the difference between an audit and a forensic audit?", answer: "A routine audit generally focuses on assurance and financial reporting objectives. A forensic audit investigates specific concerns, transactions or allegations in greater detail." },
      { question: "Can a forensic audit identify fraud?", answer: "A forensic audit can examine financial records and evidence for indicators of fraud or irregularities within the agreed scope." },
      { question: "How long does a forensic audit take?", answer: "The timeframe depends on the complexity of the matter, volume of records and scope of the engagement." },
      { question: "What does a forensic audit examine?", answer: "A forensic audit may examine financial records, transactions, payments, procurement records, contracts, internal controls and supporting documentation." }
    ],
    relatedServices: [
      { title: "Forensic Accounting", slug: "forensic-accounting" },
      { title: "Fraud Investigations", slug: "fraud-investigations" },
      { title: "Financial Forensic Investigations", slug: "financial-forensic-investigations" },
      { title: "Fraud Risk Assessment", slug: "fraud-risk-assessment" }
    ],
    cta: {
      heading: "Contact Nairobi Forensics LLP",
      text: "Contact Nairobi Forensics LLP to discuss forensic audit requirements and complex financial concerns.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "anti-money-laundering-experts": {
    slug: "anti-money-laundering-experts",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Anti-Money Laundering Advisory and Investigation Support in Kenya",
    shortTitle: "Anti-Money Laundering Experts",
    eyebrow: "AML Advisory & Investigation Support",
    hero: {
      heading: "Anti-Money Laundering Advisory and Investigation Support in Kenya",
      subheading: "Independent Financial Analysis for AML Concerns",
      description: "Nairobi Forensics LLP provides specialist financial analysis and investigation support relating to anti-money laundering concerns, suspicious transactions and financial crime risks for organisations operating in Kenya."
    },
    overview: {
      heading: "What We Support",
      paragraphs: [
        "Nairobi Forensics LLP provides independent forensic and financial analysis support for organisations dealing with anti-money laundering concerns, suspicious transactions and financial crime risks.",
        "Our work involves analysing financial records, transactions and supporting information to help organisations understand financial activity, identify concerning patterns and address AML-related questions."
      ]
    },
    services: [
      { title: "AML Risk Assessment", description: "Review of financial activity, transactions and relationships to identify potential AML risks and concerns." },
      { title: "Suspicious Transaction Analysis", description: "Detailed examination of potentially suspicious transactions, including source of funds, destination and financial relationships." },
      { title: "Transaction Monitoring Review", description: "Review of financial records and transaction patterns to identify unusual or concerning activity." },
      { title: "Customer and Transaction Risk Analysis", description: "Analysis of customer transactions, relationships and financial activity to assess risk levels." },
      { title: "Source-of-Funds Analysis", description: "Financial analysis to understand the source and movement of funds through available records." },
      { title: "Financial Record Review", description: "Examination of accounting records, ledgers and supporting documentation for AML-related financial questions." },
      { title: "AML Control Assessment", description: "Review of AML controls, processes and procedures to identify potential gaps or weaknesses." },
      { title: "Investigative Support", description: "Financial analysis and investigative support for AML-related investigations and inquiries." }
    ],
    situations: [
      "Suspicious financial transactions", "Unexplained movement of funds", "High-risk transaction patterns",
      "AML control concerns", "Regulatory investigations", "Financial crime investigations",
      "Source-of-funds questions", "Customer due diligence concerns"
    ],
    process: [
      { number: "01", title: "Understand the Concern", description: "We establish the nature of the AML concern, available information and questions requiring analysis." },
      { number: "02", title: "Define the Scope", description: "We establish an appropriate scope of work based on the circumstances and objectives." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records, transaction data and supporting documentation are identified and analysed." },
      { number: "04", title: "Analyse Transactions", description: "We examine transactions, patterns, relationships and other relevant financial evidence." },
      { number: "05", title: "Assess Risk", description: "We assess potential AML risks, concerns and areas requiring further investigation." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly based on the procedures performed and information available." }
    ],
    industries: ["Financial Services", "Banking", "Insurance", "Real Estate", "Legal Services", "Accounting Firms", "Gaming and Betting", "Money Services", "Investment Firms", "Corporate Organisations"],
    audiences: ["Financial Institutions", "Banks", "Money Services Businesses", "Insurance Companies", "Investment Firms", "Legal Professionals", "Corporate Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent financial analysis and investigative support for AML-related concerns. Our forensic approach combines accounting analysis, transaction examination and financial investigation.",
        "We work with organisations to help understand financial activity, identify potential risks and address AML-related questions."
      ]
    },
    faqs: [
      { question: "What does an anti-money laundering expert do?", answer: "An AML expert analyses financial records, transactions and activity to identify potential money laundering risks, suspicious transactions and financial crime concerns." },
      { question: "When should an organisation engage AML experts?", answer: "Organisations may engage AML experts when they identify suspicious transactions, have AML control concerns, face regulatory inquiries or need independent financial analysis for AML-related matters." },
      { question: "Can AML experts help with regulatory investigations?", answer: "Yes. AML experts can provide independent financial analysis, transaction review and investigative support for regulatory investigations and inquiries." },
      { question: "What is suspicious transaction analysis?", answer: "Suspicious transaction analysis involves detailed examination of financial transactions to identify unusual patterns, unexplained movements of funds, high-risk relationships and potential money laundering concerns." }
    ],
    relatedServices: [
      { title: "Financial Crime Investigations", slug: "financial-crime-investigations" },
      { title: "Financial Forensic Investigations", slug: "financial-forensic-investigations" },
      { title: "Transaction Analysis", slug: "transaction-analysis" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your AML Concerns",
      text: "If you have AML concerns or require independent financial analysis support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "fraud-audits": {
    slug: "fraud-audits",
    categorySlug: "forensic-accounting-financial-investigations",
    category: "Forensic Accounting & Financial Investigations",
    title: "Fraud Audit Services in Kenya",
    shortTitle: "Fraud Audits",
    eyebrow: "Fraud Audit Services",
    hero: {
      heading: "Fraud Audit Services in Kenya",
      subheading: "Systematic Examination of Financial Records for Fraud Indicators",
      description: "Nairobi Forensics LLP provides fraud audit services in Kenya for organisations requiring systematic examination of financial records, transactions and controls to identify fraud indicators and irregularities."
    },
    overview: {
      heading: "What Is a Fraud Audit?",
      paragraphs: [
        "A fraud audit is a systematic examination of financial records, transactions and internal controls to identify fraud indicators, irregularities and potential exposure to fraud.",
        "Our fraud audit services help organisations assess fraud risk, identify control weaknesses and detect potential fraudulent activity."
      ]
    },
    services: [
      { title: "Fraud Risk Assessment", description: "Assessment of fraud risks, control weaknesses and exposure to potential fraud." },
      { title: "Transaction Testing", description: "Systematic testing of transactions to identify irregularities and fraud indicators." },
      { title: "Internal Control Review", description: "Review of internal controls to identify weaknesses that may be exploited for fraud." },
      { title: "Financial Record Examination", description: "Detailed examination of financial records for fraud indicators." },
      { title: "Irregularity Identification", description: "Identification of irregularities, unusual patterns and potential fraud indicators." },
      { title: "Fraud Detection", description: "Detection of potential fraud through analysis of financial records and transactions." }
    ],
    situations: [
      "Suspected fraud", "Control weaknesses", "Unusual transactions", "Whistleblower allegations",
      "Financial irregularities", "Regulatory concerns", "Internal audit findings"
    ],
    process: [
      { number: "01", title: "Understand the Risk Context", description: "We establish the fraud risk context, concerns and available information." },
      { number: "02", title: "Define Audit Scope", description: "We establish an appropriate audit scope based on the risk context." },
      { number: "03", title: "Review Controls", description: "We review internal controls to identify weaknesses and vulnerabilities." },
      { number: "04", title: "Test Transactions", description: "We test transactions to identify irregularities and fraud indicators." },
      { number: "05", title: "Analyse Findings", description: "We analyse findings to identify potential fraud and control weaknesses." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly with recommendations." }
    ],
    industries: ["Financial Services", "Manufacturing", "Construction", "Real Estate", "Insurance", "Professional Services", "Healthcare", "Government", "Non-Profit", "Corporate"],
    audiences: ["Audit Committees", "Boards", "Management", "Internal Audit", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent fraud audit services using a systematic approach to identify fraud risks, control weaknesses and potential fraudulent activity.",
        "Our fraud audit methodology helps organisations assess exposure to fraud and implement appropriate controls."
      ]
    },
    faqs: [
      { question: "What is a fraud audit?", answer: "A fraud audit is a systematic examination of financial records, transactions and internal controls to identify fraud indicators, irregularities and potential exposure to fraud." },
      { question: "How does a fraud audit differ from a regular audit?", answer: "A regular audit focuses on financial reporting accuracy, while a fraud audit focuses specifically on identifying fraud risks, indicators and irregularities." },
      { question: "When should an organisation conduct a fraud audit?", answer: "An organisation may conduct a fraud audit when there are fraud concerns, control weaknesses, whistleblower allegations or regulatory requirements." },
      { question: "What does a fraud audit examine?", answer: "A fraud audit may examine financial records, transactions, internal controls, procurement records, payments and supporting documentation." }
    ],
    relatedServices: [
      { title: "Fraud Investigations", slug: "fraud-investigations" },
      { title: "Fraud Risk Assessment", slug: "fraud-risk-assessment" },
      { title: "Financial Forensic Audits", slug: "financial-forensic-audits" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Fraud Audit Requirements",
      text: "Contact Nairobi Forensics LLP to discuss your fraud audit requirements or concerns.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  // ============================================================
  // TAX INVESTIGATIONS & FORENSIC TAX SERVICES (5 Services)
  // ============================================================

  "tax-dispute-support": {
    slug: "tax-dispute-support",
    categorySlug: "tax-investigations-forensic-tax-services",
    category: "Tax Investigations & Forensic Tax Services",
    title: "Tax Dispute Support Services in Kenya",
    shortTitle: "Tax Dispute Support",
    eyebrow: "Tax Dispute Support",
    hero: {
      heading: "Tax Dispute Support Services in Kenya",
      subheading: "Independent Financial Analysis for Tax Disputes",
      description: "Nairobi Forensics LLP provides independent tax dispute support services in Kenya for organisations dealing with tax disputes, financial record reviews, transaction analysis and tax-related financial questions."
    },
    overview: {
      heading: "What Is Tax Dispute Support?",
      paragraphs: [
        "Tax dispute support involves independent financial analysis, record review and transaction examination to help organisations understand and address tax-related disputes, concerns and questions.",
        "Our support helps organisations navigate complex tax matters by providing clear financial analysis and evidence-based findings."
      ]
    },
    services: [
      { title: "Understanding the Dispute", description: "Analysis of the dispute context, concerns and financial questions." },
      { title: "Financial Record Review", description: "Detailed review of financial records, ledgers and supporting documentation." },
      { title: "Transaction Analysis", description: "Analysis of transactions to identify issues, discrepancies and concerning activity." },
      { title: "Review of Calculations", description: "Review of tax calculations, methodologies and supporting information." },
      { title: "Historical Financial Analysis", description: "Analysis of historical financial information for dispute-related questions." },
      { title: "Supporting Documentation", description: "Review of supporting documentation and evidence related to tax positions." },
      { title: "Financial Exposure Analysis", description: "Analysis of financial exposure, liabilities and other relevant impacts." }
    ],
    situations: [
      "Tax disputes", "Complex tax queries", "Historical transaction reviews", "Record inconsistencies",
      "Tax calculation questions", "Financial record concerns", "Regulatory inquiries", "Tax authority inquiries"
    ],
    process: [
      { number: "01", title: "Understand the Dispute", description: "We establish the nature of the tax dispute and financial questions." },
      { number: "02", title: "Define Support Scope", description: "We establish an appropriate support scope based on the dispute context." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records, transactions and documentation are reviewed." },
      { number: "04", title: "Analyse Transactions", description: "We analyse transactions and financial activity for dispute-related questions." },
      { number: "05", title: "Assess Exposure", description: "We assess financial exposure and other relevant impacts." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly to support dispute resolution." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Professional Services", "Financial Services", "Construction", "Real Estate"],
    audiences: ["Businesses", "Taxpayers", "Legal Professionals", "Tax Advisers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent tax dispute support using a structured approach that combines forensic accounting, financial analysis and record review.",
        "Our support helps organisations understand tax-related financial matters and navigate disputes effectively."
      ]
    },
    faqs: [
      { question: "What is tax dispute support?", answer: "Tax dispute support involves independent financial analysis, record review and transaction examination to help organisations understand and address tax-related disputes and concerns." },
      { question: "What does tax dispute support involve?", answer: "Tax dispute support may involve financial record review, transaction analysis, tax calculation review, historical financial analysis and financial exposure analysis." },
      { question: "When is tax dispute support needed?", answer: "Tax dispute support may be needed during tax disputes, regulatory inquiries, tax authority investigations and complex tax-related questions." },
      { question: "Can tax dispute support help with tax authority inquiries?", answer: "Yes. Independent financial analysis and record review can help organisations understand and address tax authority inquiries and concerns." }
    ],
    relatedServices: [
      { title: "Tax Fraud Investigations", slug: "tax-fraud-investigations" },
      { title: "Forensic Tax Reviews", slug: "forensic-tax-reviews" },
      { title: "Tax Risk Assessment", slug: "tax-risk-assessments" },
      { title: "Tax Audit Support", slug: "tax-audit-support" }
    ],
    cta: {
      heading: "Discuss Your Tax Dispute Support Requirements",
      text: "If you require independent tax dispute support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "forensic-tax-reviews": {
    slug: "forensic-tax-reviews",
    categorySlug: "tax-investigations-forensic-tax-services",
    category: "Tax Investigations & Forensic Tax Services",
    title: "Forensic Tax Review Services in Kenya",
    shortTitle: "Forensic Tax Reviews",
    eyebrow: "Forensic Tax Reviews",
    hero: {
      heading: "Forensic Tax Review Services in Kenya",
      subheading: "Detailed Examination of Financial Information for Tax-Related Questions",
      description: "Nairobi Forensics LLP provides forensic tax review services for organisations requiring detailed examination of financial information, transactions and supporting records for complex tax-related questions."
    },
    overview: {
      heading: "What Is a Forensic Tax Review?",
      paragraphs: [
        "A forensic tax review involves detailed examination of financial information, transactions and supporting records where complex tax-related financial questions or potential irregularities require deeper analysis.",
        "Our reviews help organisations understand tax-related financial matters, identify concerns and address questions appropriately."
      ]
    },
    services: [
      { title: "Historical Financial Analysis", description: "Analysis of historical financial information for tax-related questions." },
      { title: "Transaction Review", description: "Detailed review of transactions for tax-related concerns." },
      { title: "Financial Reconstruction", description: "Reconstruction of financial activity using available records and information." },
      { title: "Documentation Review", description: "Review of supporting documentation for tax positions and claims." },
      { title: "Tax Risk Identification", description: "Identification of tax risks and concerns through financial analysis." },
      { title: "Reporting", description: "Clear reporting of findings based on the review performed." }
    ],
    situations: [
      "Tax-related financial questions", "Financial record concerns", "Tax risk identification",
      "Regulatory inquiries", "Historical tax position review", "Financial irregularity concerns", "Tax compliance questions"
    ],
    process: [
      { number: "01", title: "Understand the Question", description: "We establish the tax-related financial question and available information." },
      { number: "02", title: "Define Review Scope", description: "We establish an appropriate review scope based on the questions." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records, transactions and documentation are reviewed." },
      { number: "04", title: "Analyse Activity", description: "We analyse financial activity for tax-related concerns." },
      { number: "05", title: "Identify Risks", description: "We identify tax risks and concerns through financial analysis." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly based on the review performed." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Professional Services", "Real Estate", "Construction", "Financial Services"],
    audiences: ["Businesses", "Taxpayers", "Legal Professionals", "Tax Advisers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent forensic tax review services using a structured approach that combines financial analysis, transaction review and investigative techniques.",
        "Our reviews help organisations understand tax-related financial matters and address concerns appropriately."
      ]
    },
    faqs: [
      { question: "What is a forensic tax review?", answer: "A forensic tax review involves detailed examination of financial information, transactions and supporting records where complex tax-related financial questions or potential irregularities require deeper analysis." },
      { question: "What does a forensic tax review examine?", answer: "A forensic tax review may examine financial records, transactions, accounting records, supporting documentation and historical financial activity." },
      { question: "When is a forensic tax review needed?", answer: "A forensic tax review may be needed for tax-related financial questions, financial record concerns, regulatory inquiries and tax risk identification." },
      { question: "How does a forensic tax review differ from a regular tax review?", answer: "A regular tax review focuses on tax compliance and reporting, while a forensic tax review focuses on investigating specific tax-related financial questions, irregularities and concerns." }
    ],
    relatedServices: [
      { title: "Tax Fraud Investigations", slug: "tax-fraud-investigations" },
      { title: "Tax Dispute Support", slug: "tax-dispute-support" },
      { title: "Tax Risk Assessment", slug: "tax-risk-assessments" },
      { title: "Tax Audit Support", slug: "tax-audit-support" }
    ],
    cta: {
      heading: "Discuss Your Forensic Tax Review Requirements",
      text: "If you require a forensic tax review, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "tax-risk-assessments": {
    slug: "tax-risk-assessments",
    categorySlug: "tax-investigations-forensic-tax-services",
    category: "Tax Investigations & Forensic Tax Services",
    title: "Tax Risk Assessment Services in Kenya",
    shortTitle: "Tax Risk Assessments",
    eyebrow: "Tax Risk Assessments",
    hero: {
      heading: "Tax Risk Assessment Services in Kenya",
      subheading: "Identification and Analysis of Tax-Related Financial Risks",
      description: "Nairobi Forensics LLP provides tax risk assessment services in Kenya for organisations seeking to identify, analyse and address tax-related financial risks and concerns."
    },
    overview: {
      heading: "What Is a Tax Risk Assessment?",
      paragraphs: [
        "A tax risk assessment involves systematic analysis of financial information, transactions, processes and controls to identify tax-related risks, concerns and exposure.",
        "Our assessments help organisations understand tax risks, identify control weaknesses and address concerns proactively."
      ]
    },
    services: [
      { title: "Financial Record Inconsistencies", description: "Identification of inconsistencies in financial records for tax-related concerns." },
      { title: "Complex Transactions", description: "Analysis of complex transactions for tax risk identification." },
      { title: "Tax Processes", description: "Review of tax processes and controls for risk identification." },
      { title: "Historical Accounting Information", description: "Analysis of historical accounting information for tax risk." },
      { title: "Documentation Review", description: "Review of supporting documentation for tax positions." },
      { title: "Transaction Classifications", description: "Review of transaction classifications for tax-related concerns." },
      { title: "Financial Exposure Analysis", description: "Assessment of financial exposure and tax risk." },
      { title: "Internal Process Review", description: "Review of internal processes and controls for tax risk." }
    ],
    situations: [
      "Tax risk identification", "Financial record concerns", "Process and control weaknesses",
      "Regulatory compliance", "Tax exposure assessment", "Pre-audit preparation", "Tax governance"
    ],
    process: [
      { number: "01", title: "Understand the Business", description: "We understand the business, operations and tax context." },
      { number: "02", title: "Identify Risk Areas", description: "We identify potential tax risk areas through information review." },
      { number: "03", title: "Review Information", description: "Relevant financial records, transactions and processes are reviewed." },
      { number: "04", title: "Assess Exposure", description: "We assess financial exposure and tax risk levels." },
      { number: "05", title: "Prioritise Risks", description: "We prioritise tax risks based on impact and likelihood." },
      { number: "06", title: "Report", description: "Our findings and recommendations are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Financial Services", "Real Estate", "Construction", "Professional Services"],
    audiences: ["Businesses", "Taxpayers", "Legal Professionals", "Tax Advisers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent tax risk assessment services using a structured approach that combines financial analysis, process review and risk identification.",
        "Our assessments help organisations understand tax risks and take appropriate action."
      ]
    },
    faqs: [
      { question: "What is a tax risk assessment?", answer: "A tax risk assessment involves systematic analysis of financial information, transactions, processes and controls to identify tax-related risks, concerns and exposure." },
      { question: "What does a tax risk assessment examine?", answer: "A tax risk assessment may examine financial records, transactions, tax processes, documentation, classifications and internal controls." },
      { question: "When should an organisation conduct a tax risk assessment?", answer: "An organisation may conduct a tax risk assessment for proactive risk management, regulatory compliance, pre-audit preparation or tax governance." },
      { question: "What are common tax risks?", answer: "Common tax risks include financial record inconsistencies, transaction classification concerns, documentation weaknesses, process failures and regulatory compliance issues." }
    ],
    relatedServices: [
      { title: "Tax Fraud Investigations", slug: "tax-fraud-investigations" },
      { title: "Forensic Tax Reviews", slug: "forensic-tax-reviews" },
      { title: "Tax Dispute Support", slug: "tax-dispute-support" },
      { title: "Tax Audit Support", slug: "tax-audit-support" }
    ],
    cta: {
      heading: "Discuss Your Tax Risk Assessment Requirements",
      text: "Contact Nairobi Forensics LLP to discuss your tax risk assessment requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "tax-audit-support": {
    slug: "tax-audit-support",
    categorySlug: "tax-investigations-forensic-tax-services",
    category: "Tax Investigations & Forensic Tax Services",
    title: "Tax Audit Support Services in Kenya",
    shortTitle: "Tax Audit Support",
    eyebrow: "Tax Audit Support",
    hero: {
      heading: "Tax Audit Support Services in Kenya",
      subheading: "Independent Financial Analysis and Record Review for Tax Audits",
      description: "Nairobi Forensics LLP provides independent financial and forensic analysis support in Kenya for organisations dealing with complex tax audit matters, historical financial records and tax-related financial questions."
    },
    overview: {
      heading: "What Is Tax Audit Support?",
      paragraphs: [
        "Tax audit support involves independent financial analysis, record review and transaction examination to help organisations navigate tax audits, address financial questions and prepare supporting documentation.",
        "Our support helps organisations understand tax audit matters and respond to inquiries effectively."
      ]
    },
    services: [
      { title: "Financial Record Review", description: "Detailed review of financial records, ledgers and supporting documentation." },
      { title: "Transaction Analysis", description: "Analysis of transactions for tax audit-related questions." },
      { title: "Historical Accounting Review", description: "Review of historical accounting information for tax audit concerns." },
      { title: "Supporting Document Analysis", description: "Analysis of supporting documentation for tax positions." },
      { title: "Reconciliation Analysis", description: "Reconciliation of financial records and tax positions." },
      { title: "Tax Calculation Review", description: "Review of tax calculations, methodologies and supporting information." },
      { title: "Financial Data Reconstruction", description: "Reconstruction of financial data where records are incomplete." },
      { title: "Financial Schedule Preparation", description: "Preparation of supporting financial schedules and information." },
      { title: "Financial Exposure Analysis", description: "Analysis of financial exposure and potential liabilities." }
    ],
    situations: [
      "Tax audits", "Complex tax queries", "Historical transaction reviews", "Record inconsistencies",
      "Large-volume financial records", "Tax disputes", "Suspected financial irregularities", "Regulatory inquiries"
    ],
    process: [
      { number: "01", title: "Understand the Audit Context", description: "We establish the nature of the tax audit and financial questions." },
      { number: "02", title: "Define Support Scope", description: "We establish an appropriate support scope based on the audit context." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records, transactions and documentation are reviewed." },
      { number: "04", title: "Analyse Transactions", description: "We analyse transactions and financial activity for audit-related questions." },
      { number: "05", title: "Reconstruct Data", description: "Where necessary, financial data is reconstructed from available records." },
      { number: "06", title: "Prepare Schedules", description: "Supporting schedules and information are prepared as needed." },
      { number: "07", title: "Report", description: "Our findings and analysis are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Professional Services", "Real Estate", "Construction", "Financial Services"],
    audiences: ["Businesses", "Taxpayers", "Legal Professionals", "Tax Advisers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent tax audit support using a structured approach that combines financial analysis, record review and transaction examination.",
        "Our support helps organisations navigate tax audits and address financial questions effectively."
      ]
    },
    faqs: [
      { question: "What is tax audit support?", answer: "Tax audit support involves independent financial analysis, record review and transaction examination to help organisations navigate tax audits and address financial questions." },
      { question: "What does tax audit support involve?", answer: "Tax audit support may involve financial record review, transaction analysis, historical accounting review, reconciliation analysis and supporting schedule preparation." },
      { question: "When is tax audit support needed?", answer: "Tax audit support may be needed during tax audits, complex tax inquiries, historical transaction reviews and record inconsistency concerns." },
      { question: "How does tax audit support help organisations?", answer: "Tax audit support helps organisations understand tax audit matters, prepare supporting information and respond to inquiries effectively." }
    ],
    relatedServices: [
      { title: "Tax Dispute Support", slug: "tax-dispute-support" },
      { title: "Forensic Tax Reviews", slug: "forensic-tax-reviews" },
      { title: "Tax Fraud Investigations", slug: "tax-fraud-investigations" },
      { title: "Tax Risk Assessment", slug: "tax-risk-assessments" }
    ],
    cta: {
      heading: "Discuss Your Tax Audit Support Requirements",
      text: "If you require tax audit support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "tax-fraud-investigations": {
    slug: "tax-fraud-investigations",
    categorySlug: "tax-investigations-forensic-tax-services",
    category: "Tax Investigations & Forensic Tax Services",
    title: "Tax Fraud Investigation Services in Kenya",
    shortTitle: "Tax Fraud Investigations",
    eyebrow: "Tax Fraud Investigations",
    hero: {
      heading: "Tax Fraud Investigation Services in Kenya",
      subheading: "Forensic Analysis of Tax-Related Financial Irregularities",
      description: "Nairobi Forensics LLP provides tax fraud investigation and forensic tax analysis services for businesses and other organisations dealing with suspected tax-related financial irregularities."
    },
    overview: {
      heading: "What Is a Tax Fraud Investigation?",
      paragraphs: [
        "A tax fraud investigation involves the detailed examination of financial records, transactions and supporting documentation to investigate suspected tax fraud, unreported transactions, financial record inconsistencies and tax-related financial irregularities.",
        "Our investigations help organisations understand financial activity, identify irregularities and address tax-related concerns."
      ]
    },
    services: [
      { title: "Suspected Tax Fraud", description: "Investigation of suspected tax fraud and associated financial activity." },
      { title: "Unreported Transactions", description: "Examination of financial records to identify unreported or underreported transactions." },
      { title: "Financial Record Inconsistencies", description: "Analysis of financial records to identify inconsistencies and irregularities." },
      { title: "Tax-Related Fraud Allegations", description: "Investigation of tax-related fraud allegations and concerns." },
      { title: "Irregular Accounting Records", description: "Examination of accounting records to identify irregularities and manipulation." },
      { title: "Transaction Reconstruction", description: "Reconstruction of financial transactions using available records and information." },
      { title: "Historical Financial Activity", description: "Analysis of historical financial activity for tax-related concerns." },
      { title: "Tax-Related Financial Disputes", description: "Financial investigation and analysis for tax-related disputes." }
    ],
    situations: [
      "Suspected tax fraud", "Unreported transactions", "Financial record inconsistencies",
      "Tax-related fraud allegations", "Irregular accounting records", "Tax-related disputes",
      "Regulatory investigations", "Historical financial irregularities"
    ],
    process: [
      { number: "01", title: "Understand the Concern", description: "We establish the nature of the tax fraud concern and available information." },
      { number: "02", title: "Define Investigation Scope", description: "We establish an appropriate investigation scope based on the concerns." },
      { number: "03", title: "Review Financial Records", description: "Relevant financial records, transactions and documentation are reviewed." },
      { number: "04", title: "Analyse Transactions", description: "We analyse transactions to identify irregularities and concerning activity." },
      { number: "05", title: "Reconstruct Activity", description: "Where necessary, financial activity is reconstructed from available records." },
      { number: "06", title: "Assess Impact", description: "We assess financial exposure and other relevant impacts." },
      { number: "07", title: "Report", description: "Our findings are communicated clearly based on the investigation performed." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Professional Services", "Financial Services", "Real Estate", "Construction"],
    audiences: ["Businesses", "Taxpayers", "Legal Professionals", "Tax Advisers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent tax fraud investigation services using a structured approach that combines forensic accounting, financial analysis and investigation.",
        "Our methodology helps organisations understand tax-related financial matters and address concerns appropriately."
      ]
    },
    faqs: [
      { question: "What is a tax fraud investigation?", answer: "A tax fraud investigation involves the detailed examination of financial records, transactions and supporting documentation to investigate suspected tax fraud, unreported transactions and tax-related irregularities." },
      { question: "What does a tax fraud investigation examine?", answer: "A tax fraud investigation may examine financial records, transactions, accounting records, supporting documentation and historical financial activity." },
      { question: "When is a tax fraud investigation needed?", answer: "A tax fraud investigation may be needed when there is suspected tax fraud, unreported transactions, financial record inconsistencies or tax-related disputes." },
      { question: "Can tax fraud investigations support legal proceedings?", answer: "Depending on the engagement and requirements, tax fraud investigations may support legal proceedings, regulatory matters and dispute resolution." }
    ],
    relatedServices: [
      { title: "Forensic Tax Reviews", slug: "forensic-tax-reviews" },
      { title: "Tax Dispute Support", slug: "tax-dispute-support" },
      { title: "Tax Risk Assessment", slug: "tax-risk-assessments" },
      { title: "Tax Audit Support", slug: "tax-audit-support" }
    ],
    cta: {
      heading: "Discuss Your Tax Fraud Investigation Requirements",
      text: "If you have tax fraud concerns or require investigation support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  // ============================================================
  // FINANCIAL CRIME & COMPLEX INVESTIGATIONS (4 Services)
  // ============================================================

  "financial-crime-investigations": {
    slug: "financial-crime-investigations",
    categorySlug: "financial-crime-complex-investigations",
    category: "Financial Crime & Complex Investigations",
    title: "Financial Crime Investigation Services in Kenya",
    shortTitle: "Financial Crime Investigations",
    eyebrow: "Financial Crime Investigations",
    hero: {
      heading: "Financial Crime Investigation Services in Kenya",
      subheading: "Independent Investigation of Financial Crimes and Complex Transactions",
      description: "Nairobi Forensics LLP provides financial crime investigation services in Kenya for organisations dealing with fraud, money laundering-related financial activity, corruption, financial misconduct and complex financial transactions."
    },
    overview: {
      heading: "What Is a Financial Crime Investigation?",
      paragraphs: [
        "A financial crime investigation involves the systematic examination of financial records, transactions and evidence to investigate financial crimes including fraud, money laundering, corruption and financial misconduct.",
        "Our investigations help organisations understand financial crimes, identify perpetrators, assess impact and take appropriate action."
      ]
    },
    services: [
      { title: "Fraud", description: "Investigation of fraud and fraudulent financial activity." },
      { title: "Money Laundering-Related Financial Activity", description: "Analysis of financial activity related to money laundering concerns." },
      { title: "Misappropriation", description: "Investigation of asset and fund misappropriation." },
      { title: "Financial Misconduct", description: "Investigation of financial misconduct and irregularities." },
      { title: "Suspicious Transactions", description: "Analysis of suspicious transactions and financial activity." },
      { title: "Corruption-Related Financial Activity", description: "Investigation of corruption-related financial activity." },
      { title: "Unexplained Wealth", description: "Analysis of unexplained wealth and financial activity." },
      { title: "Diversion of Funds", description: "Investigation of fund diversion and misappropriation." },
      { title: "Complex Financial Transactions", description: "Analysis of complex financial transactions." }
    ],
    situations: [
      "Financial fraud", "Money laundering-related concerns", "Corruption-related financial activity",
      "Financial misconduct", "Suspicious transactions", "Unexplained wealth", "Diversion of funds", "Complex financial transactions"
    ],
    process: [
      { number: "01", title: "Intelligence & Information", description: "We gather and review available information and intelligence." },
      { number: "02", title: "Scope", description: "We establish an appropriate investigation scope." },
      { number: "03", title: "Financial Records", description: "Relevant financial records and transactions are reviewed." },
      { number: "04", title: "Transaction Analysis", description: "We analyse transactions, patterns and relationships." },
      { number: "05", title: "Relationship Analysis", description: "We analyse financial relationships and connections." },
      { number: "06", title: "Evidence Assessment", description: "We assess available evidence and corroborate findings." },
      { number: "07", title: "Findings", description: "Our findings are communicated clearly based on the investigation." }
    ],
    industries: ["Financial Services", "Banking", "Insurance", "Real Estate", "Professional Services", "Government", "Non-Profit", "Corporate Organisations", "SMEs"],
    audiences: ["Boards and Directors", "Management", "Legal Professionals", "Financial Institutions", "Regulators", "Investors", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent financial crime investigation services using a structured approach that combines financial analysis, transaction examination and investigative techniques.",
        "Our multidisciplinary expertise helps organisations understand financial crimes and take appropriate action."
      ]
    },
    faqs: [
      { question: "What is a financial crime investigation?", answer: "A financial crime investigation involves the systematic examination of financial records, transactions and evidence to investigate financial crimes including fraud, money laundering, corruption and financial misconduct." },
      { question: "What types of financial crimes do you investigate?", answer: "We investigate fraud, money laundering-related financial activity, corruption, financial misconduct, misappropriation and complex financial transactions." },
      { question: "How does a financial crime investigation work?", answer: "A financial crime investigation involves gathering information, reviewing financial records, analysing transactions, assessing evidence and reporting findings." },
      { question: "Can financial crime investigations support legal proceedings?", answer: "Depending on the engagement and requirements, financial crime investigations may support legal proceedings, regulatory matters and other processes." }
    ],
    relatedServices: [
      { title: "Anti-Money Laundering Experts", slug: "anti-money-laundering-experts" },
      { title: "Cross-Border Forensic Investigations", slug: "cross-border-forensic-investigations" },
      { title: "Transaction Analysis", slug: "transaction-analysis" },
      { title: "Forensic Data Analytics", slug: "forensic-data-analytics" }
    ],
    cta: {
      heading: "Discuss Your Financial Crime Investigation Requirements",
      text: "If you have financial crime concerns or require investigation support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "cross-border-forensic-investigations": {
    slug: "cross-border-forensic-investigations",
    categorySlug: "financial-crime-complex-investigations",
    category: "Financial Crime & Complex Investigations",
    title: "Cross-Border Forensic Investigation Services",
    shortTitle: "Cross-Border Forensic Investigations",
    eyebrow: "Cross-Border Forensic Investigations",
    hero: {
      heading: "Cross-Border Forensic Investigation Services",
      subheading: "Complex Financial Investigations Across Multiple Jurisdictions",
      description: "Nairobi Forensics LLP supports complex financial investigations involving transactions, businesses, assets or financial relationships spanning multiple jurisdictions, with particular focus on East Africa and internationally connected matters."
    },
    overview: {
      heading: "What Is a Cross-Border Forensic Investigation?",
      paragraphs: [
        "Cross-border forensic investigations involve the examination of financial records, transactions and evidence where financial activity spans multiple jurisdictions, involving international transactions, entities, assets and financial relationships.",
        "We analyse available financial information and coordinate with relevant professional advisers and specialists where matters involve multiple jurisdictions."
      ]
    },
    services: [
      { title: "Cross-Border Transactions", description: "Analysis of cross-border transactions and financial movements." },
      { title: "International Fund Movements", description: "Analysis of international fund movements through available records." },
      { title: "Multi-Jurisdiction Entities", description: "Examination of entities operating across multiple jurisdictions." },
      { title: "Offshore-Related Financial Information", description: "Analysis of offshore-related financial information and relationships." },
      { title: "International Business Relationships", description: "Analysis of international business relationships and transactions." },
      { title: "Asset Tracing", description: "Tracing of assets across jurisdictions through available information." }
    ],
    situations: [
      "Cross-border financial disputes", "International fraud investigations", "Multi-jurisdiction asset tracing",
      "International money laundering concerns", "Cross-border business disputes", "Offshore financial activity concerns"
    ],
    process: [
      { number: "01", title: "Understand the Matter", description: "We establish the nature of the cross-border financial matter." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate investigation scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records and transaction data are reviewed." },
      { number: "04", title: "Analyse Cross-Border Activity", description: "We analyse cross-border transactions and relationships." },
      { number: "05", title: "Coordinate with Specialists", description: "We coordinate with relevant professional advisers and specialists." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Banking", "Professional Services", "International Business", "Corporate Organisations", "Legal Profession", "Government"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Investigators", "Regulators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides cross-border forensic investigation support using a structured approach that combines financial analysis, transaction examination and coordination with international specialists.",
        "Our expertise in East African financial matters combined with international connections supports complex cross-border investigations."
      ]
    },
    faqs: [
      { question: "What is a cross-border forensic investigation?", answer: "A cross-border forensic investigation involves the examination of financial records, transactions and evidence where financial activity spans multiple jurisdictions." },
      { question: "What does a cross-border investigation examine?", answer: "A cross-border investigation may examine cross-border transactions, international fund movements, multi-jurisdiction entities and international business relationships." },
      { question: "How do you handle matters involving multiple jurisdictions?", answer: "We analyse available financial information and coordinate with relevant professional advisers and specialists where matters involve multiple jurisdictions." },
      { question: "What types of matters require cross-border investigations?", answer: "Cross-border investigations may be required for international fraud, multi-jurisdiction asset tracing, cross-border disputes and international money laundering concerns." }
    ],
    relatedServices: [
      { title: "Asset Tracing", slug: "asset-tracing" },
      { title: "Cross-Border Asset Tracing", slug: "cross-border-asset-tracing" },
      { title: "Financial Crime Investigations", slug: "financial-crime-investigations" },
      { title: "Transaction Analysis", slug: "transaction-analysis" }
    ],
    cta: {
      heading: "Discuss Your Cross-Border Investigation Requirements",
      text: "If you require cross-border forensic investigation support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "transaction-analysis": {
    slug: "transaction-analysis",
    categorySlug: "financial-crime-complex-investigations",
    category: "Financial Crime & Complex Investigations",
    title: "Financial Transaction Analysis Services in Kenya",
    shortTitle: "Transaction Analysis",
    eyebrow: "Financial Transaction Analysis",
    hero: {
      heading: "Financial Transaction Analysis Services in Kenya",
      subheading: "Detailed Examination of Financial Transactions and Patterns",
      description: "Nairobi Forensics LLP provides financial transaction analysis services in Kenya for organisations requiring detailed examination of transactions, patterns, relationships and financial activity."
    },
    overview: {
      heading: "What Is Transaction Analysis?",
      paragraphs: [
        "Transaction analysis involves the detailed examination of financial transactions to identify patterns, anomalies, relationships and activity requiring further investigation.",
        "Our transaction analysis helps organisations understand financial activity, identify concerns and investigate irregularities."
      ]
    },
    services: [
      { title: "Bank Transactions", description: "Analysis of bank transactions, movements and relationships." },
      { title: "Payments", description: "Detailed review of payments and payment patterns." },
      { title: "Transfers", description: "Analysis of fund transfers and movements." },
      { title: "Supplier Transactions", description: "Review of supplier transactions and relationships." },
      { title: "Customer Transactions", description: "Analysis of customer transactions and patterns." },
      { title: "Related-Party Transactions", description: "Identification and analysis of related-party transactions." },
      { title: "Unusual Transactions", description: "Identification and analysis of unusual transactions." },
      { title: "Duplicate Transactions", description: "Identification of duplicate transactions." },
      { title: "Cash Movements", description: "Analysis of cash movements and patterns." }
    ],
    situations: [
      "Unexplained transactions", "Transaction irregularities", "Unusual patterns",
      "Related-party concerns", "Duplicate payments", "Cash flow questions", "Transaction reconstruction"
    ],
    process: [
      { number: "01", title: "Understand the Question", description: "We establish the transaction analysis question and objectives." },
      { number: "02", title: "Gather Data", description: "Relevant transaction data and records are gathered." },
      { number: "03", title: "Analyse Transactions", description: "We analyse transactions, patterns and relationships." },
      { number: "04", title: "Identify Anomalies", description: "We identify anomalies, irregularities and concerning patterns." },
      { number: "05", title: "Corroborate Findings", description: "Findings are corroborated using available evidence." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Banking", "Professional Services", "Corporate Organisations", "Insurance", "Real Estate", "Government", "Non-Profit"],
    audiences: ["Businesses", "Financial Institutions", "Legal Professionals", "Investigators", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent transaction analysis services using a structured approach to identify patterns, anomalies and concerning activity.",
        "Our analysis helps organisations understand financial activity and address concerns appropriately."
      ]
    },
    faqs: [
      { question: "What is transaction analysis?", answer: "Transaction analysis involves the detailed examination of financial transactions to identify patterns, anomalies, relationships and activity requiring further investigation." },
      { question: "What does transaction analysis examine?", answer: "Transaction analysis may examine bank transactions, payments, transfers, supplier transactions, customer transactions and related-party transactions." },
      { question: "When is transaction analysis needed?", answer: "Transaction analysis may be needed for unexplained transactions, irregularities, unusual patterns and transaction reconstruction." },
      { question: "How does transaction analysis support investigations?", answer: "Transaction analysis helps identify concerning activity, patterns and relationships that may warrant further investigation." }
    ],
    relatedServices: [
      { title: "Forensic Data Analytics", slug: "forensic-data-analytics" },
      { title: "Financial Crime Investigations", slug: "financial-crime-investigations" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Transaction Analysis Requirements",
      text: "If you require transaction analysis services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "forensic-data-analytics": {
    slug: "forensic-data-analytics",
    categorySlug: "financial-crime-complex-investigations",
    category: "Financial Crime & Complex Investigations",
    title: "Forensic Data Analytics Services in Kenya",
    shortTitle: "Forensic Data Analytics",
    eyebrow: "Forensic Data Analytics",
    hero: {
      heading: "Forensic Data Analytics Services in Kenya",
      subheading: "Data-Driven Financial Investigations and Analysis",
      description: "Nairobi Forensics LLP provides forensic data analytics services in Kenya for organisations requiring data-driven financial analysis, fraud detection, anomaly identification and investigative support."
    },
    overview: {
      heading: "What Is Forensic Data Analytics?",
      paragraphs: [
        "Forensic data analytics involves the use of data analysis techniques to examine financial information, identify patterns, detect anomalies, investigate fraud and support financial investigations.",
        "Our data analytics help organisations analyse large volumes of financial data efficiently and identify concerning patterns."
      ]
    },
    services: [
      { title: "Financial Data Analysis", description: "Analysis of financial data to identify patterns and concerns." },
      { title: "Fraud Detection", description: "Data-driven fraud detection and analysis." },
      { title: "Anomaly Identification", description: "Identification of anomalies in financial data." },
      { title: "Data-Driven Investigations", description: "Investigative support using data analytics techniques." },
      { title: "Transaction Pattern Analysis", description: "Analysis of transaction patterns and relationships." },
      { title: "Data Reconstruction", description: "Reconstruction of financial data from available information." },
      { title: "Electronic Evidence Review", description: "Review of electronic financial evidence and data." }
    ],
    situations: [
      "Large-volume financial data analysis", "Fraud detection", "Anomaly identification",
      "Data-driven investigations", "Transaction pattern analysis", "Electronic evidence review"
    ],
    process: [
      { number: "01", title: "Understand the Question", description: "We establish the data analytics question and objectives." },
      { number: "02", title: "Gather Data", description: "Relevant financial data is gathered and prepared." },
      { number: "03", title: "Analyse Data", description: "We analyse data to identify patterns, anomalies and concerns." },
      { number: "04", title: "Interpret Findings", description: "Findings are interpreted in the context of the investigation." },
      { number: "05", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Banking", "Insurance", "Professional Services", "Corporate Organisations", "Government", "Non-Profit"],
    audiences: ["Businesses", "Financial Institutions", "Legal Professionals", "Investigators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent forensic data analytics services combining financial investigation expertise with data analysis capabilities.",
        "Our approach helps organisations analyse financial data efficiently and identify concerning patterns."
      ]
    },
    faqs: [
      { question: "What is forensic data analytics?", answer: "Forensic data analytics involves the use of data analysis techniques to examine financial information, identify patterns, detect anomalies and support financial investigations." },
      { question: "What does forensic data analytics examine?", answer: "Forensic data analytics may examine financial data, transaction data, electronic records and supporting information." },
      { question: "When is forensic data analytics needed?", answer: "Forensic data analytics may be needed for large-volume data analysis, fraud detection, anomaly identification and data-driven investigations." },
      { question: "How does forensic data analytics support investigations?", answer: "Forensic data analytics helps identify concerning patterns, anomalies and evidence that may support financial investigations." }
    ],
    relatedServices: [
      { title: "Transaction Analysis", slug: "transaction-analysis" },
      { title: "Financial Crime Investigations", slug: "financial-crime-investigations" },
      { title: "Forensic Accounting", slug: "forensic-accounting" },
      { title: "Fraud Investigations", slug: "fraud-investigations" }
    ],
    cta: {
      heading: "Discuss Your Forensic Data Analytics Requirements",
      text: "If you require forensic data analytics services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  // ============================================================
  // ASSET TRACING & RECOVERY SUPPORT (4 Services)
  // ============================================================

  "asset-tracing": {
    slug: "asset-tracing",
    categorySlug: "asset-tracing-recovery-support",
    category: "Asset Tracing & Recovery Support",
    title: "Asset Tracing Services in Kenya",
    shortTitle: "Asset Tracing",
    eyebrow: "Asset Tracing Services",
    hero: {
      heading: "Asset Tracing Services in Kenya",
      subheading: "Financial Investigation and Analysis to Trace Relevant Assets and Funds",
      description: "Nairobi Forensics LLP provides asset tracing and financial investigation services for matters involving suspected hidden assets, unexplained transactions, disputed ownership and the movement of funds."
    },
    overview: {
      heading: "What Is Asset Tracing?",
      paragraphs: [
        "Asset tracing involves financial analysis to identify assets, sources and uses of funds, financial relationships and transaction activity. It is a specialised form of financial investigation focused on understanding the movement and ownership of assets.",
        "Our asset tracing services help organisations identify assets, trace funds and understand financial relationships."
      ]
    },
    services: [
      { title: "Asset Identification", description: "Identification of assets through financial analysis and record review." },
      { title: "Source of Funds Analysis", description: "Analysis of sources of funds and financial activity." },
      { title: "Financial Relationship Analysis", description: "Analysis of financial relationships and connections." },
      { title: "Transaction Analysis", description: "Analysis of transactions related to asset movements." },
      { title: "International Asset Tracing", description: "Tracing of assets across jurisdictions through available information." },
      { title: "Fund Movement Analysis", description: "Analysis of fund movements through financial records." },
      { title: "Ownership Analysis", description: "Analysis of asset ownership and beneficial interests." },
      { title: "Asset Verification", description: "Verification of asset information through financial records." }
    ],
    situations: [
      "Fraud investigations", "Asset concealment", "Dispute resolution",
      "Insolvency matters", "Recovery proceedings", "Commercial disputes", "Matrimonial financial matters"
    ],
    process: [
      { number: "01", title: "Understand the Matter", description: "We establish the nature of the asset tracing question and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate tracing scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records, transactions and documentation are reviewed." },
      { number: "04", title: "Trace Funds", description: "We trace fund movements through available financial records." },
      { number: "05", title: "Identify Assets", description: "We identify assets and financial relationships." },
      { number: "06", title: "Analyse Ownership", description: "We analyse asset ownership and beneficial interests." },
      { number: "07", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Legal Profession", "Insurance", "Corporate Organisations", "Government", "Non-Profit", "Family Businesses"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Insurers", "Investigators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent asset tracing services using a structured approach that combines financial analysis, transaction examination and investigative techniques.",
        "Our expertise helps organisations identify assets and understand financial relationships."
      ]
    },
    faqs: [
      { question: "What is asset tracing?", answer: "Asset tracing involves financial analysis to identify assets, sources and uses of funds, financial relationships and transaction activity." },
      { question: "What does asset tracing examine?", answer: "Asset tracing may examine financial records, transactions, fund movements, ownership information and financial relationships." },
      { question: "When is asset tracing needed?", answer: "Asset tracing may be needed for fraud investigations, dispute resolution, insolvency matters, recovery proceedings and commercial disputes." },
      { question: "How does asset tracing work?", answer: "Asset tracing involves reviewing financial records, tracing fund movements, identifying assets, analysing ownership and reporting findings." }
    ],
    relatedServices: [
      { title: "Cross-Border Asset Tracing", slug: "cross-border-asset-tracing" },
      { title: "Asset Recovery Support", slug: "asset-recovery-support" },
      { title: "Asset Verification", slug: "asset-verification" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Asset Tracing Requirements",
      text: "If you require asset tracing services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "cross-border-asset-tracing": {
    slug: "cross-border-asset-tracing",
    categorySlug: "asset-tracing-recovery-support",
    category: "Asset Tracing & Recovery Support",
    title: "Cross-Border Asset Tracing Services",
    shortTitle: "Cross-Border Asset Tracing",
    eyebrow: "Cross-Border Asset Tracing",
    hero: {
      heading: "Cross-Border Asset Tracing Services",
      subheading: "International Financial Analysis and Asset Identification",
      description: "Nairobi Forensics LLP provides cross-border asset tracing services for financial analysis across multiple jurisdictions, international fund movements and global asset identification."
    },
    overview: {
      heading: "What Is Cross-Border Asset Tracing?",
      paragraphs: [
        "Cross-border asset tracing involves financial analysis to identify assets, fund movements and financial relationships across multiple jurisdictions.",
        "We analyse available financial information and coordinate with relevant professional advisers and specialists where matters involve multiple jurisdictions."
      ]
    },
    services: [
      { title: "Cross-Border Transaction Analysis", description: "Analysis of cross-border transactions and fund movements." },
      { title: "Financial Relationship Analysis", description: "Analysis of cross-border financial relationships." },
      { title: "International Fund Movement Analysis", description: "Analysis of international fund movements through available records." },
      { title: "Entity and Ownership Analysis", description: "Analysis of entities and ownership across jurisdictions." },
      { title: "Asset-Related Financial Research", description: "Financial research for asset identification." },
      { title: "Source and Use of Funds Analysis", description: "Analysis of sources and uses of funds internationally." },
      { title: "Financial Record Reconstruction", description: "Reconstruction of financial records for international matters." }
    ],
    situations: [
      "International fraud investigations", "Cross-border asset concealment", "International disputes",
      "Global insolvency matters", "International recovery proceedings", "Cross-border commercial disputes"
    ],
    process: [
      { number: "01", title: "Understand the Matter", description: "We establish the nature of the cross-border asset tracing matter." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate tracing scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records and transaction data are reviewed." },
      { number: "04", title: "Trace Funds", description: "We trace fund movements across jurisdictions." },
      { number: "05", title: "Identify Assets", description: "We identify assets and financial relationships." },
      { number: "06", title: "Coordinate with Specialists", description: "We coordinate with relevant professional advisers and specialists." },
      { number: "07", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Legal Profession", "International Business", "Insurance", "Corporate Organisations", "Government"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Investigators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent cross-border asset tracing services using a structured approach that combines financial analysis, international research and coordination with specialists.",
        "Our expertise in East African financial matters combined with international connections supports cross-border asset tracing."
      ]
    },
    faqs: [
      { question: "What is cross-border asset tracing?", answer: "Cross-border asset tracing involves financial analysis to identify assets, fund movements and financial relationships across multiple jurisdictions." },
      { question: "What does cross-border asset tracing examine?", answer: "Cross-border asset tracing may examine cross-border transactions, international fund movements, entities, ownership and financial relationships." },
      { question: "How do you handle cross-border matters?", answer: "We analyse available financial information and coordinate with relevant professional advisers and specialists where matters involve multiple jurisdictions." },
      { question: "What types of matters require cross-border asset tracing?", answer: "Cross-border asset tracing may be required for international fraud, asset concealment, disputes and recovery proceedings." }
    ],
    relatedServices: [
      { title: "Asset Tracing", slug: "asset-tracing" },
      { title: "Asset Recovery Support", slug: "asset-recovery-support" },
      { title: "Cross-Border Forensic Investigations", slug: "cross-border-forensic-investigations" },
      { title: "Asset Verification", slug: "asset-verification" }
    ],
    cta: {
      heading: "Discuss Your Cross-Border Asset Tracing Requirements",
      text: "If you require cross-border asset tracing services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "asset-recovery-support": {
    slug: "asset-recovery-support",
    categorySlug: "asset-tracing-recovery-support",
    category: "Asset Tracing & Recovery Support",
    title: "Asset Recovery Support Services in Kenya",
    shortTitle: "Asset Recovery Support",
    eyebrow: "Asset Recovery Support",
    hero: {
      heading: "Asset Recovery Support Services in Kenya",
      subheading: "Financial Investigation and Analytical Support for Asset Recovery",
      description: "Nairobi Forensics LLP provides financial investigation and analytical support that may assist asset recovery and enforcement efforts in Kenya and internationally."
    },
    overview: {
      heading: "What Is Asset Recovery Support?",
      paragraphs: [
        "Asset recovery support involves financial investigation, transaction tracing and analytical services that may assist asset recovery and enforcement efforts.",
        "We provide financial investigation and analytical support that may assist asset recovery and enforcement efforts."
      ]
    },
    services: [
      { title: "Asset Tracing", description: "Financial analysis to identify assets and financial relationships." },
      { title: "Transaction Tracing", description: "Analysis of transactions and fund movements." },
      { title: "Financial Analysis", description: "Analysis of financial information for recovery support." },
      { title: "Ownership Analysis", description: "Analysis of asset ownership and beneficial interests." },
      { title: "Funds-Flow Analysis", description: "Analysis of fund flows and movements." },
      { title: "Asset Verification", description: "Verification of asset information through financial records." },
      { title: "Financial Evidence Preparation", description: "Preparation of financial evidence and supporting information." },
      { title: "Recovery-Support Reporting", description: "Reporting to support recovery and enforcement efforts." }
    ],
    situations: [
      "Fraud recovery", "Asset recovery proceedings", "Enforcement support",
      "Litigation support", "Insolvency recoveries", "Dispute resolution"
    ],
    process: [
      { number: "01", title: "Understand the Matter", description: "We establish the nature of the recovery matter and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate support scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records and transactions are reviewed." },
      { number: "04", title: "Trace Funds", description: "We trace fund movements through available records." },
      { number: "05", title: "Identify Assets", description: "We identify assets and financial relationships." },
      { number: "06", title: "Prepare Evidence", description: "Financial evidence and supporting information are prepared." },
      { number: "07", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Legal Profession", "Insurance", "Corporate Organisations", "Government", "Non-Profit"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Insurers", "Investigators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent asset recovery support services using a structured approach that combines financial investigation, transaction tracing and analytical capabilities.",
        "Our support helps organisations identify assets and pursue recovery efforts."
      ]
    },
    faqs: [
      { question: "What is asset recovery support?", answer: "Asset recovery support involves financial investigation, transaction tracing and analytical services that may assist asset recovery and enforcement efforts." },
      { question: "What does asset recovery support involve?", answer: "Asset recovery support may involve asset tracing, transaction tracing, financial analysis, ownership analysis and reporting." },
      { question: "When is asset recovery support needed?", answer: "Asset recovery support may be needed for fraud recovery, asset recovery proceedings, enforcement support and litigation support." },
      { question: "How does asset recovery support help?", answer: "Asset recovery support helps identify assets, trace funds and prepare evidence that may assist recovery and enforcement efforts." }
    ],
    relatedServices: [
      { title: "Asset Tracing", slug: "asset-tracing" },
      { title: "Cross-Border Asset Tracing", slug: "cross-border-asset-tracing" },
      { title: "Asset Verification", slug: "asset-verification" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Asset Recovery Support Requirements",
      text: "If you require asset recovery support, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "asset-verification": {
    slug: "asset-verification",
    categorySlug: "asset-tracing-recovery-support",
    category: "Asset Tracing & Recovery Support",
    title: "Asset Verification Services in Kenya",
    shortTitle: "Asset Verification",
    eyebrow: "Asset Verification Services",
    hero: {
      heading: "Asset Verification Services in Kenya",
      subheading: "Financial Analysis and Verification of Asset Information",
      description: "Nairobi Forensics LLP provides asset verification services in Kenya for organisations requiring financial analysis, ownership review, transaction history analysis and due diligence."
    },
    overview: {
      heading: "What Is Asset Verification?",
      paragraphs: [
        "Asset verification involves the analysis and verification of asset information through financial records, transaction history, ownership information and supporting documentation.",
        "Our asset verification services help organisations confirm asset information and identify concerns."
      ]
    },
    services: [
      { title: "Financial Asset Analysis", description: "Analysis of financial information relating to assets." },
      { title: "Ownership Information Review", description: "Review of asset ownership and beneficial interests." },
      { title: "Asset Documentation Review", description: "Review of documentation supporting asset information." },
      { title: "Transaction History Analysis", description: "Analysis of transaction history relating to assets." },
      { title: "Business Asset Analysis", description: "Analysis of business assets and financial information." },
      { title: "Financial Record Verification", description: "Verification of asset information in financial records." },
      { title: "Asset-Related Due Diligence", description: "Due diligence review of asset information." }
    ],
    situations: [
      "Litigation support", "Due diligence", "Insolvency matters",
      "Investment review", "Fraud investigations", "Commercial disputes"
    ],
    process: [
      { number: "01", title: "Understand the Question", description: "We establish the asset verification question and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate verification scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records and documentation are reviewed." },
      { number: "04", title: "Analyse Asset Information", description: "We analyse asset information and supporting records." },
      { number: "05", title: "Verify Findings", description: "We verify asset information through available records." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Legal Profession", "Insurance", "Real Estate", "Corporate Organisations", "Investment Firms"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Investors", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent asset verification services using a structured approach that combines financial analysis, record review and verification techniques.",
        "Our services help organisations confirm asset information and identify concerns."
      ]
    },
    faqs: [
      { question: "What is asset verification?", answer: "Asset verification involves the analysis and verification of asset information through financial records, transaction history, ownership information and supporting documentation." },
      { question: "What does asset verification examine?", answer: "Asset verification may examine financial asset information, ownership information, transaction history, documentation and financial records." },
      { question: "When is asset verification needed?", answer: "Asset verification may be needed for litigation support, due diligence, insolvency matters, investment review and fraud investigations." },
      { question: "How does asset verification help?", answer: "Asset verification helps confirm asset information, identify concerns and support decision-making." }
    ],
    relatedServices: [
      { title: "Asset Tracing", slug: "asset-tracing" },
      { title: "Asset Recovery Support", slug: "asset-recovery-support" },
      { title: "Cross-Border Asset Tracing", slug: "cross-border-asset-tracing" },
      { title: "Financial Due Diligence", slug: "financial-due-diligence" }
    ],
    cta: {
      heading: "Discuss Your Asset Verification Requirements",
      text: "If you require asset verification services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  // ============================================================
  // LITIGATION, DISPUTES & EXPERT SERVICES (4 Services)
  // ============================================================

  "litigation-support": {
    slug: "litigation-support",
    categorySlug: "litigation-disputes-expert-services",
    category: "Litigation, Disputes & Expert Services",
    title: "Litigation Support Services in Kenya",
    shortTitle: "Litigation Support",
    eyebrow: "Litigation Support Services",
    hero: {
      heading: "Litigation Support Services in Kenya",
      subheading: "Independent Financial Analysis and Expert Support for Disputes",
      description: "Nairobi Forensics LLP provides litigation support services in Kenya for legal professionals, businesses and organisations requiring independent financial analysis, expert reporting and dispute resolution support."
    },
    overview: {
      heading: "What Is Litigation Support?",
      paragraphs: [
        "Litigation support involves independent financial analysis, expert reporting, loss quantification and dispute resolution support for commercial disputes, claims and legal proceedings.",
        "Our litigation support services help parties understand financial evidence, evaluate claims and prepare for dispute resolution."
      ]
    },
    services: [
      { title: "Financial Analysis", description: "Independent financial analysis for litigation and disputes." },
      { title: "Expert Reporting", description: "Preparation of expert reports for legal proceedings." },
      { title: "Loss Quantification", description: "Assessment and quantification of financial losses and damages." },
      { title: "Financial Evidence", description: "Analysis and presentation of financial evidence." },
      { title: "Dispute Resolution Support", description: "Support for dispute resolution processes." },
      { title: "Financial Calculations", description: "Independent financial calculations and analysis." },
      { title: "Business Valuation", description: "Valuation of businesses for litigation purposes." },
      { title: "Asset Tracing", description: "Asset tracing for dispute resolution." }
    ],
    situations: [
      "Commercial disputes", "Breach of contract claims", "Shareholder disputes",
      "Partnership disputes", "Financial claims", "Insurance claims",
      "Professional negligence", "Construction disputes"
    ],
    process: [
      { number: "01", title: "Understand the Dispute", description: "We establish the nature of the dispute and financial questions." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate support scope." },
      { number: "03", title: "Review Financial Information", description: "Relevant financial records and documentation are reviewed." },
      { number: "04", title: "Analyse Claims", description: "We analyse financial claims, evidence and supporting information." },
      { number: "05", title: "Quantify Losses", description: "We assess and quantify financial losses or damages." },
      { number: "06", title: "Prepare Reports", description: "Expert reports and financial analysis are prepared." },
      { number: "07", title: "Support Resolution", description: "We support dispute resolution and legal proceedings." }
    ],
    industries: ["Legal Profession", "Financial Services", "Insurance", "Construction", "Real Estate", "Corporate Organisations", "Family Businesses"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Insurers", "Dispute Resolution Practitioners"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent litigation support services using a structured approach that combines financial analysis, expert reporting and dispute resolution support.",
        "Our expertise helps parties understand financial evidence and resolve disputes effectively."
      ]
    },
    faqs: [
      { question: "What is litigation support?", answer: "Litigation support involves independent financial analysis, expert reporting, loss quantification and dispute resolution support for commercial disputes, claims and legal proceedings." },
      { question: "What does litigation support involve?", answer: "Litigation support may involve financial analysis, expert reporting, loss quantification, financial evidence preparation and dispute resolution support." },
      { question: "When is litigation support needed?", answer: "Litigation support may be needed for commercial disputes, breach of contract claims, shareholder disputes, financial claims and insurance claims." },
      { question: "How does litigation support help?", answer: "Litigation support helps parties understand financial evidence, evaluate claims and prepare for dispute resolution." }
    ],
    relatedServices: [
      { title: "Expert Witness Services", slug: "expert-witness-services" },
      { title: "Financial Loss Quantification", slug: "financial-loss-quantification" },
      { title: "Economic Damages Quantification", slug: "economic-damages-quantification" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Litigation Support Requirements",
      text: "If you require litigation support services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "expert-witness-services": {
    slug: "expert-witness-services",
    categorySlug: "litigation-disputes-expert-services",
    category: "Litigation, Disputes & Expert Services",
    title: "Expert Witness Services in Kenya",
    shortTitle: "Expert Witness Services",
    eyebrow: "Expert Witness Services",
    hero: {
      heading: "Expert Witness Services in Kenya",
      subheading: "Independent Financial Expert Evidence for Legal Proceedings",
      description: "Nairobi Forensics LLP provides expert witness services in Kenya for legal professionals requiring independent financial analysis, expert opinions, loss quantification and forensic accounting evidence."
    },
    overview: {
      heading: "What Are Expert Witness Services?",
      paragraphs: [
        "Expert witness services involve the provision of independent financial analysis, expert opinions and evidence for legal proceedings, dispute resolution and regulatory matters.",
        "Our expert witness services help legal professionals understand complex financial evidence and present it effectively."
      ]
    },
    services: [
      { title: "Independent Financial Analysis", description: "Independent analysis for expert witness purposes." },
      { title: "Expert Financial Opinions", description: "Provision of expert financial opinions." },
      { title: "Financial Calculations", description: "Independent financial calculations and analysis." },
      { title: "Loss Quantification", description: "Assessment and quantification of financial losses." },
      { title: "Business Valuation", description: "Valuation of businesses for legal proceedings." },
      { title: "Financial Damages", description: "Assessment and quantification of financial damages." },
      { title: "Asset Tracing", description: "Asset tracing for expert witness purposes." },
      { title: "Accounting Analysis", description: "Analysis of accounting matters for legal proceedings." }
    ],
    situations: [
      "Litigation requiring expert evidence", "Dispute resolution", "Regulatory proceedings",
      "Arbitration", "Commercial disputes", "Financial claims"
    ],
    process: [
      { number: "01", title: "Understand the Matter", description: "We establish the nature of the matter and expert requirements." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate expert scope." },
      { number: "03", title: "Review Information", description: "Relevant financial information and evidence are reviewed." },
      { number: "04", title: "Analyse Evidence", description: "We analyse financial evidence and supporting information." },
      { number: "05", title: "Form Opinions", description: "We form independent expert opinions based on analysis." },
      { number: "06", title: "Prepare Reports", description: "Expert reports are prepared for legal proceedings." },
      { number: "07", title: "Provide Evidence", description: "We provide expert evidence where required." }
    ],
    industries: ["Legal Profession", "Financial Services", "Insurance", "Construction", "Real Estate", "Corporate Organisations", "Family Businesses"],
    audiences: ["Legal Professionals", "Dispute Resolution Practitioners", "Corporations", "Financial Institutions", "Regulators"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent expert witness services using a structured approach that combines financial analysis, expert opinions and clear reporting.",
        "Our expertise supports legal professionals in understanding complex financial evidence."
      ]
    },
    faqs: [
      { question: "What are expert witness services?", answer: "Expert witness services involve the provision of independent financial analysis, expert opinions and evidence for legal proceedings, dispute resolution and regulatory matters." },
      { question: "What does an expert witness do?", answer: "An expert witness provides independent expert opinions, financial analysis and evidence for legal proceedings." },
      { question: "When are expert witness services needed?", answer: "Expert witness services may be needed for litigation, dispute resolution, arbitration and regulatory proceedings." },
      { question: "How does an expert witness help?", answer: "An expert witness helps legal professionals understand complex financial evidence and present it effectively." }
    ],
    relatedServices: [
      { title: "Litigation Support", slug: "litigation-support" },
      { title: "Financial Loss Quantification", slug: "financial-loss-quantification" },
      { title: "Economic Damages Quantification", slug: "economic-damages-quantification" },
      { title: "Business Valuation", slug: "business-valuation" }
    ],
    cta: {
      heading: "Discuss Your Expert Witness Requirements",
      text: "If you require expert witness services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "financial-loss-quantification": {
    slug: "financial-loss-quantification",
    categorySlug: "litigation-disputes-expert-services",
    category: "Litigation, Disputes & Expert Services",
    title: "Financial Loss Quantification Services in Kenya",
    shortTitle: "Financial Loss Quantification",
    eyebrow: "Loss Quantification Services",
    hero: {
      heading: "Financial Loss Quantification Services in Kenya",
      subheading: "Independent Assessment and Quantification of Financial Losses",
      description: "Nairobi Forensics LLP provides financial loss quantification services in Kenya for organisations requiring independent assessment and quantification of financial losses arising from fraud, disputes, breaches and other events."
    },
    overview: {
      heading: "What Is Financial Loss Quantification?",
      paragraphs: [
        "Financial loss quantification involves the systematic assessment and calculation of financial losses, damages or economic impact arising from fraud, disputes, breaches, business interruption or other events.",
        "Our loss quantification services help organisations understand financial impact and support claims or disputes."
      ]
    },
    services: [
      { title: "Define Financial Question", description: "We establish the loss quantification question and methodology." },
      { title: "Review Records", description: "Relevant financial records and documentation are reviewed." },
      { title: "Establish Methodology", description: "An appropriate quantification methodology is established." },
      { title: "Analyse Financial Impact", description: "We analyse financial impact and calculate losses." },
      { title: "Test Assumptions", description: "Assumptions are tested for reasonableness." },
      { title: "Calculate Loss", description: "Financial losses are calculated and documented." },
      { title: "Prepare Schedules", description: "Supporting financial schedules are prepared." },
      { title: "Report Findings", description: "Findings are communicated clearly." }
    ],
    situations: [
      "Fraud-related losses", "Commercial disputes", "Breach of contract",
      "Business interruption", "Shareholder disputes", "Partnership disputes",
      "Asset misappropriation", "Insolvency matters", "Matrimonial financial disputes"
    ],
    process: [
      { number: "01", title: "Define the Question", description: "We establish the financial loss question and objectives." },
      { number: "02", title: "Review Information", description: "Relevant financial records and documentation are reviewed." },
      { number: "03", title: "Establish Methodology", description: "We establish an appropriate quantification methodology." },
      { number: "04", title: "Analyse Impact", description: "We analyse financial impact and calculate losses." },
      { number: "05", title: "Test Assumptions", description: "Assumptions are tested for reasonableness." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["Financial Services", "Insurance", "Legal Profession", "Construction", "Real Estate", "Manufacturing", "Corporate Organisations"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Insurers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent financial loss quantification services using a structured approach that combines financial analysis, methodology development and clear reporting.",
        "Our expertise helps organisations understand financial impact and support claims or disputes."
      ]
    },
    faqs: [
      { question: "What is financial loss quantification?", answer: "Financial loss quantification involves the systematic assessment and calculation of financial losses, damages or economic impact arising from fraud, disputes, breaches or other events." },
      { question: "What does loss quantification involve?", answer: "Loss quantification involves defining the question, reviewing records, establishing methodology, analysing impact, calculating losses and reporting findings." },
      { question: "When is loss quantification needed?", answer: "Loss quantification may be needed for fraud-related losses, commercial disputes, breach of contract, business interruption and insolvency matters." },
      { question: "How does loss quantification support claims?", answer: "Loss quantification provides independent assessment of financial impact that may support claims, disputes and legal proceedings." }
    ],
    relatedServices: [
      { title: "Economic Damages Quantification", slug: "economic-damages-quantification" },
      { title: "Litigation Support", slug: "litigation-support" },
      { title: "Expert Witness Services", slug: "expert-witness-services" },
      { title: "Business Valuation", slug: "business-valuation" }
    ],
    cta: {
      heading: "Discuss Your Loss Quantification Requirements",
      text: "If you require financial loss quantification services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "economic-damages-quantification": {
    slug: "economic-damages-quantification",
    categorySlug: "litigation-disputes-expert-services",
    category: "Litigation, Disputes & Expert Services",
    title: "Economic Damages Quantification Services in Kenya",
    shortTitle: "Economic Damages Quantification",
    eyebrow: "Economic Damages Quantification",
    hero: {
      heading: "Economic Damages Quantification Services in Kenya",
      subheading: "Independent Assessment of Economic Impact and Damages",
      description: "Nairobi Forensics LLP provides economic damages quantification services in Kenya for organisations requiring independent assessment of economic impact arising from events, disputes and breaches."
    },
    overview: {
      heading: "What Is Economic Damages Quantification?",
      paragraphs: [
        "Economic damages quantification involves analysing financial information to estimate the economic impact arising from an event, dispute, breach or other circumstance.",
        "Our services help organisations understand economic impact and support claims or disputes."
      ]
    },
    services: [
      { title: "Lost Profits", description: "Analysis and quantification of lost profits." },
      { title: "Lost Revenue", description: "Analysis and quantification of lost revenue." },
      { title: "Additional Costs", description: "Analysis of additional costs arising from events." },
      { title: "Business Interruption", description: "Quantification of business interruption impact." },
      { title: "Reduced Business Value", description: "Analysis of reduced business value." },
      { title: "Future Financial Impact", description: "Analysis of future financial impact." },
      { title: "Historical Financial Performance", description: "Analysis of historical performance for damages." },
      { title: "Alternative Scenarios", description: "Analysis of alternative scenario impacts." }
    ],
    situations: [
      "Breach of contract", "Commercial disputes", "Business interruption",
      "Insurance claims", "Professional negligence", "Economic loss claims"
    ],
    process: [
      { number: "01", title: "Define Damages Question", description: "We establish the damages question and objectives." },
      { number: "02", title: "Establish Relevant Period", description: "We establish the relevant damages period." },
      { number: "03", title: "Review Historical Performance", description: "Historical financial performance is reviewed." },
      { number: "04", title: "Develop Methodology", description: "An appropriate damages methodology is developed." },
      { number: "05", title: "Analyse Causation", description: "Causation-related financial information is analysed." },
      { number: "06", title: "Calculate Damages", description: "We calculate economic damages." },
      { number: "07", title: "Test Assumptions", description: "Assumptions are tested for reasonableness." },
      { number: "08", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "Insurance", "Legal Profession", "Financial Services", "Construction", "Manufacturing"],
    audiences: ["Legal Professionals", "Businesses", "Financial Institutions", "Insurers", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent economic damages quantification services using a structured approach that combines financial analysis, methodology development and clear reporting.",
        "Our expertise helps organisations understand economic impact and support claims or disputes."
      ]
    },
    faqs: [
      { question: "What is economic damages quantification?", answer: "Economic damages quantification involves analysing financial information to estimate the economic impact arising from an event, dispute, breach or other circumstance." },
      { question: "What does economic damages quantification involve?", answer: "It involves defining the question, reviewing historical performance, developing methodology, analysing causation, calculating damages and reporting findings." },
      { question: "When is economic damages quantification needed?", answer: "It may be needed for breach of contract, commercial disputes, business interruption, insurance claims and professional negligence." },
      { question: "How does economic damages quantification support claims?", answer: "It provides independent assessment of economic impact that may support claims, disputes and legal proceedings." }
    ],
    relatedServices: [
      { title: "Financial Loss Quantification", slug: "financial-loss-quantification" },
      { title: "Litigation Support", slug: "litigation-support" },
      { title: "Expert Witness Services", slug: "expert-witness-services" },
      { title: "Business Valuation", slug: "business-valuation" }
    ],
    cta: {
      heading: "Discuss Your Economic Damages Requirements",
      text: "If you require economic damages quantification services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  // ============================================================
  // CORPORATE INVESTIGATIONS, VALUATION & DUE DILIGENCE (5 Services)
  // ============================================================

  "corporate-investigations": {
    slug: "corporate-investigations",
    categorySlug: "corporate-investigations-valuation-due-diligence",
    category: "Corporate Investigations, Valuation & Due Diligence",
    title: "Corporate Investigation Services in Kenya",
    shortTitle: "Corporate Investigations",
    eyebrow: "Corporate Investigations",
    hero: {
      heading: "Corporate Investigation Services in Kenya",
      subheading: "Independent Investigation of Corporate Concerns and Irregularities",
      description: "Nairobi Forensics LLP provides corporate investigation services in Kenya for organisations dealing with employee misconduct, financial irregularities, conflicts of interest, procurement issues and whistleblower allegations."
    },
    overview: {
      heading: "What Is a Corporate Investigation?",
      paragraphs: [
        "A corporate investigation involves the systematic examination of concerns, allegations or irregularities within an organisation, including employee misconduct, financial irregularities, conflicts of interest and compliance matters.",
        "Our investigations help organisations understand concerns, address risks and take appropriate action."
      ]
    },
    services: [
      { title: "Employee Misconduct", description: "Investigation of employee misconduct and policy violations." },
      { title: "Management Concerns", description: "Investigation of management-related concerns." },
      { title: "Financial Irregularities", description: "Investigation of financial irregularities and concerns." },
      { title: "Conflicts of Interest", description: "Investigation of conflicts of interest." },
      { title: "Related-Party Transactions", description: "Investigation of related-party transactions." },
      { title: "Procurement Issues", description: "Investigation of procurement irregularities and concerns." },
      { title: "Asset Misuse", description: "Investigation of asset misuse and misappropriation." },
      { title: "Financial Statement Concerns", description: "Investigation of financial statement concerns." },
      { title: "Whistleblower Allegations", description: "Investigation of whistleblower allegations." }
    ],
    situations: [
      "Employee misconduct", "Financial irregularities", "Conflict of interest concerns",
      "Procurement issues", "Asset misuse", "Whistleblower allegations",
      "Compliance concerns", "Management issues"
    ],
    process: [
      { number: "01", title: "Understand the Concern", description: "We establish the nature of the corporate concern." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate investigation scope." },
      { number: "03", title: "Gather Information", description: "Relevant information and evidence are gathered." },
      { number: "04", title: "Investigate", description: "We investigate concerns and allegations." },
      { number: "05", title: "Corroborate Findings", description: "Findings are corroborated with evidence." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "Financial Services", "Manufacturing", "Professional Services", "Healthcare", "Government", "Non-Profit"],
    audiences: ["Boards and Directors", "Management", "Audit Committees", "Legal Professionals", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent corporate investigation services using a structured approach that combines investigative techniques, financial analysis and evidence review.",
        "Our independence and objectivity help organisations address corporate concerns effectively."
      ]
    },
    faqs: [
      { question: "What is a corporate investigation?", answer: "A corporate investigation involves the systematic examination of concerns, allegations or irregularities within an organisation." },
      { question: "What does a corporate investigation examine?", answer: "A corporate investigation may examine employee misconduct, financial irregularities, conflicts of interest, procurement issues and whistleblower allegations." },
      { question: "When is a corporate investigation needed?", answer: "A corporate investigation may be needed when there are allegations of misconduct, financial irregularities, compliance concerns or whistleblower reports." },
      { question: "Who engages corporate investigators?", answer: "Corporate investigators may be engaged by boards, directors, management, audit committees and legal professionals." }
    ],
    relatedServices: [
      { title: "Fraud Investigations", slug: "fraud-investigations" },
      { title: "Financial Forensic Investigations", slug: "financial-forensic-investigations" },
      { title: "Investigative Due Diligence", slug: "investigative-due-diligence" },
      { title: "Forensic Accounting", slug: "forensic-accounting" }
    ],
    cta: {
      heading: "Discuss Your Corporate Investigation Requirements",
      text: "If you require corporate investigation services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "business-valuation": {
    slug: "business-valuation",
    categorySlug: "corporate-investigations-valuation-due-diligence",
    category: "Corporate Investigations, Valuation & Due Diligence",
    title: "Business Valuation Services in Kenya",
    shortTitle: "Business Valuation",
    eyebrow: "Business Valuation Services",
    hero: {
      heading: "Business Valuation Services in Kenya",
      subheading: "Independent Valuation for Transactions, Disputes and Decision-Making",
      description: "Nairobi Forensics LLP provides business valuation services in Kenya for organisations requiring independent valuation for business transactions, shareholder disputes, litigation, mergers and acquisitions and investment decisions."
    },
    overview: {
      heading: "What Is Business Valuation?",
      paragraphs: [
        "Business valuation involves the systematic analysis and assessment of a business's financial worth based on its financial performance, assets, market position and future prospects.",
        "Our valuation services help organisations make informed decisions about transactions, disputes and strategic matters."
      ]
    },
    services: [
      { title: "Business Transactions", description: "Valuation for business transactions and acquisitions." },
      { title: "Shareholder Disputes", description: "Valuation for shareholder and partnership disputes." },
      { title: "Litigation", description: "Valuation for litigation and legal proceedings." },
      { title: "Mergers and Acquisitions", description: "Valuation for mergers and acquisitions." },
      { title: "Investment Decisions", description: "Valuation for investment decisions." },
      { title: "Restructuring", description: "Valuation for restructuring matters." },
      { title: "Succession", description: "Valuation for succession planning." },
      { title: "Matrimonial Matters", description: "Valuation for matrimonial financial matters." }
    ],
    situations: [
      "Business sales and purchases", "Shareholder disputes", "Litigation requiring valuation",
      "Mergers and acquisitions", "Investment decisions", "Restructuring",
      "Succession planning", "Matrimonial matters"
    ],
    process: [
      { number: "01", title: "Understand the Purpose", description: "We establish the valuation purpose and objectives." },
      { number: "02", title: "Define Approach", description: "We define an appropriate valuation approach." },
      { number: "03", title: "Review Financial Information", description: "Financial information and performance are reviewed." },
      { number: "04", title: "Analyse Performance", description: "Revenue, profitability, cash flow and assets are analysed." },
      { number: "05", title: "Assess Risks", description: "Business risks and future prospects are assessed." },
      { number: "06", title: "Value Business", description: "We value the business using appropriate methodology." },
      { number: "07", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Family Businesses", "Professional Services", "Financial Services", "Real Estate", "Construction"],
    audiences: ["Businesses", "Investors", "Legal Professionals", "Financial Institutions", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent business valuation services using a structured approach that combines financial analysis, industry knowledge and valuation methodology.",
        "Our valuations help organisations make informed decisions about transactions, disputes and strategic matters."
      ]
    },
    faqs: [
      { question: "What is business valuation?", answer: "Business valuation involves the systematic analysis and assessment of a business's financial worth based on its financial performance, assets, market position and future prospects." },
      { question: "What does business valuation examine?", answer: "Business valuation examines historical performance, revenue, profitability, cash flow, assets, liabilities, market conditions and future prospects." },
      { question: "When is business valuation needed?", answer: "Business valuation may be needed for transactions, shareholder disputes, litigation, mergers and acquisitions, investment decisions and succession planning." },
      { question: "How is business value determined?", answer: "Business value is determined through analysis of financial performance, assets, market position, risks and future prospects using appropriate valuation methodology." }
    ],
    relatedServices: [
      { title: "Financial Due Diligence", slug: "financial-due-diligence" },
      { title: "Investigative Due Diligence", slug: "investigative-due-diligence" },
      { title: "Litigation Support", slug: "litigation-support" },
      { title: "Expert Witness Services", slug: "expert-witness-services" }
    ],
    cta: {
      heading: "Discuss Your Business Valuation Requirements",
      text: "If you require business valuation services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "financial-due-diligence": {
    slug: "financial-due-diligence",
    categorySlug: "corporate-investigations-valuation-due-diligence",
    category: "Corporate Investigations, Valuation & Due Diligence",
    title: "Financial Due Diligence Services in Kenya",
    shortTitle: "Financial Due Diligence",
    eyebrow: "Financial Due Diligence",
    hero: {
      heading: "Financial Due Diligence Services in Kenya",
      subheading: "Independent Financial Analysis for Transactions and Investments",
      description: "Nairobi Forensics LLP provides financial due diligence services in Kenya for organisations requiring independent financial analysis for acquisitions, investments, partnerships, M&A and strategic transactions."
    },
    overview: {
      heading: "What Is Financial Due Diligence?",
      paragraphs: [
        "Financial due diligence involves the systematic review and analysis of financial information, performance and risks to support investment, acquisition and transaction decisions.",
        "Our due diligence services help organisations understand financial risks and opportunities."
      ]
    },
    services: [
      { title: "Revenue Quality", description: "Analysis of revenue quality and sustainability." },
      { title: "Profitability", description: "Analysis of profitability and margins." },
      { title: "Cash Flow", description: "Analysis of cash flow and liquidity." },
      { title: "Working Capital", description: "Analysis of working capital requirements." },
      { title: "Debt", description: "Analysis of debt and financial obligations." },
      { title: "Liabilities", description: "Identification and analysis of liabilities." },
      { title: "Financial Statements", description: "Review of financial statements." },
      { title: "Accounting Policies", description: "Review of accounting policies and practices." },
      { title: "Customer Concentration", description: "Analysis of customer concentration and risks." },
      { title: "Supplier Concentration", description: "Analysis of supplier concentration and risks." },
      { title: "Unusual Transactions", description: "Identification of unusual transactions." }
    ],
    situations: [
      "Acquisitions", "Investments", "Partnerships",
      "Mergers and acquisitions", "Financing", "Strategic transactions"
    ],
    process: [
      { number: "01", title: "Understand the Transaction", description: "We establish the transaction context and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate due diligence scope." },
      { number: "03", title: "Review Financial Information", description: "Financial information and documentation are reviewed." },
      { number: "04", title: "Analyse Performance", description: "Performance, risks and concerns are analysed." },
      { number: "05", title: "Identify Risks", description: "Risks and concerns are identified and assessed." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "Financial Services", "Manufacturing", "Real Estate", "Technology", "Healthcare", "Professional Services"],
    audiences: ["Investors", "Acquirers", "Financial Institutions", "Legal Professionals", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent financial due diligence services using a structured approach that combines financial analysis, risk identification and clear reporting.",
        "Our due diligence helps organisations make informed transaction decisions."
      ]
    },
    faqs: [
      { question: "What is financial due diligence?", answer: "Financial due diligence involves the systematic review and analysis of financial information, performance and risks to support investment, acquisition and transaction decisions." },
      { question: "What does financial due diligence examine?", answer: "Financial due diligence may examine revenue, profitability, cash flow, working capital, debt, liabilities, financial statements and unusual transactions." },
      { question: "When is financial due diligence needed?", answer: "Financial due diligence may be needed for acquisitions, investments, partnerships, M&A and strategic transactions." },
      { question: "How does financial due diligence help?", answer: "Financial due diligence helps organisations understand financial risks, identify concerns and make informed transaction decisions." }
    ],
    relatedServices: [
      { title: "Investigative Due Diligence", slug: "investigative-due-diligence" },
      { title: "Business Valuation", slug: "business-valuation" },
      { title: "Independent Business Review", slug: "independent-business-review" },
      { title: "Financial Forensic Audits", slug: "financial-forensic-audits" }
    ],
    cta: {
      heading: "Discuss Your Financial Due Diligence Requirements",
      text: "If you require financial due diligence services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "investigative-due-diligence": {
    slug: "investigative-due-diligence",
    categorySlug: "corporate-investigations-valuation-due-diligence",
    category: "Corporate Investigations, Valuation & Due Diligence",
    title: "Investigative Due Diligence Services in Kenya",
    shortTitle: "Investigative Due Diligence",
    eyebrow: "Investigative Due Diligence",
    hero: {
      heading: "Investigative Due Diligence Services in Kenya",
      subheading: "Examination of Business Relationships and Potential Risks",
      description: "Nairobi Forensics LLP provides investigative due diligence services for examining individuals, companies, business relationships, ownership structures and potential risks."
    },
    overview: {
      heading: "What Is Investigative Due Diligence?",
      paragraphs: [
        "Investigative due diligence goes beyond conventional financial review by examining relevant information concerning individuals, companies, business relationships, ownership structures and potential risks.",
        "Our due diligence helps organisations identify risks and make informed decisions."
      ]
    },
    services: [
      { title: "Ownership", description: "Examination of ownership structures and beneficial interests." },
      { title: "Business Relationships", description: "Examination of business relationships and connections." },
      { title: "Corporate Information", description: "Review of corporate information and records." },
      { title: "Financial Concerns", description: "Identification of financial concerns and risks." },
      { title: "Litigation-Related Information", description: "Review of litigation-related information." },
      { title: "Reputation-Related Risks", description: "Identification of reputation-related risks." },
      { title: "Conflicts of Interest", description: "Identification of conflicts of interest." },
      { title: "Transaction Risks", description: "Identification of transaction risks." },
      { title: "Public Information", description: "Review of relevant public information." }
    ],
    situations: [
      "Business acquisitions", "Partnerships", "Investments",
      "Supplier relationships", "Customer relationships", "Strategic transactions"
    ],
    process: [
      { number: "01", title: "Understand the Context", description: "We establish the due diligence context and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate due diligence scope." },
      { number: "03", title: "Gather Information", description: "Relevant information is gathered and reviewed." },
      { number: "04", title: "Analyse Findings", description: "Findings are analysed for risks and concerns." },
      { number: "05", title: "Identify Risks", description: "Risks and concerns are identified and assessed." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "Financial Services", "Investment Firms", "Legal Profession", "Professional Services"],
    audiences: ["Investors", "Acquirers", "Financial Institutions", "Legal Professionals", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent investigative due diligence services using a structured approach that combines research, analysis and risk identification.",
        "Our due diligence helps organisations identify risks and make informed decisions."
      ]
    },
    faqs: [
      { question: "What is investigative due diligence?", answer: "Investigative due diligence goes beyond conventional financial review by examining relevant information concerning individuals, companies, business relationships, ownership structures and potential risks." },
      { question: "What does investigative due diligence examine?", answer: "Investigative due diligence may examine ownership, business relationships, corporate information, financial concerns, litigation, reputation and conflicts of interest." },
      { question: "When is investigative due diligence needed?", answer: "Investigative due diligence may be needed for acquisitions, partnerships, investments and strategic transactions." },
      { question: "What types of risks does investigative due diligence identify?", answer: "Investigative due diligence may identify financial risks, relationship risks, reputation risks, conflicts of interest and transaction risks." }
    ],
    relatedServices: [
      { title: "Financial Due Diligence", slug: "financial-due-diligence" },
      { title: "Corporate Investigations", slug: "corporate-investigations" },
      { title: "Business Valuation", slug: "business-valuation" },
      { title: "Independent Business Review", slug: "independent-business-review" }
    ],
    cta: {
      heading: "Discuss Your Investigative Due Diligence Requirements",
      text: "If you require investigative due diligence services, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  },

  "independent-business-review": {
    slug: "independent-business-review",
    categorySlug: "corporate-investigations-valuation-due-diligence",
    category: "Corporate Investigations, Valuation & Due Diligence",
    title: "Independent Business Review Services in Kenya",
    shortTitle: "Independent Business Review",
    eyebrow: "Independent Business Review",
    hero: {
      heading: "Independent Business Review Services in Kenya",
      subheading: "Objective Assessment of Business Performance and Viability",
      description: "Nairobi Forensics LLP provides independent business review services in Kenya for organisations requiring objective assessment of financial performance, cash flow, debt, working capital, profitability and business viability."
    },
    overview: {
      heading: "What Is an Independent Business Review?",
      paragraphs: [
        "An independent business review involves the objective assessment of a business's financial performance, cash flow, debt, working capital, profitability and viability.",
        "Our reviews help organisations, lenders, investors and directors understand business performance and prospects."
      ]
    },
    services: [
      { title: "Financial Performance", description: "Analysis of financial performance and trends." },
      { title: "Cash Flow", description: "Analysis of cash flow and liquidity." },
      { title: "Debt", description: "Analysis of debt and financial obligations." },
      { title: "Working Capital", description: "Analysis of working capital requirements." },
      { title: "Profitability", description: "Analysis of profitability and margins." },
      { title: "Business Model", description: "Assessment of business model and strategy." },
      { title: "Operational Performance", description: "Analysis of operational performance." },
      { title: "Viability", description: "Assessment of business viability and prospects." },
      { title: "Management Information", description: "Review of management information systems." },
      { title: "Recovery Options", description: "Assessment of recovery and restructuring options." }
    ],
    situations: [
      "Lender requirements", "Investor requirements", "Director obligations",
      "Creditor concerns", "Distressed businesses", "Restructuring", "Turnaround situations"
    ],
    process: [
      { number: "01", title: "Understand the Context", description: "We establish the review context and objectives." },
      { number: "02", title: "Define Scope", description: "We establish an appropriate review scope." },
      { number: "03", title: "Review Financial Information", description: "Financial information and performance are reviewed." },
      { number: "04", title: "Analyse Performance", description: "We analyse financial and operational performance." },
      { number: "05", title: "Assess Viability", description: "We assess business viability and prospects." },
      { number: "06", title: "Report", description: "Our findings are communicated clearly." }
    ],
    industries: ["All Industries", "Corporate Organisations", "SMEs", "Manufacturing", "Retail", "Real Estate", "Financial Services", "Professional Services"],
    audiences: ["Lenders", "Investors", "Directors", "Creditors", "Organisations"],
    whyUs: {
      heading: "Why Nairobi Forensics LLP?",
      paragraphs: [
        "Nairobi Forensics LLP provides independent business review services using a structured approach that combines financial analysis, operational assessment and viability evaluation.",
        "Our reviews help organisations, lenders and investors understand business performance and prospects."
      ]
    },
    faqs: [
      { question: "What is an independent business review?", answer: "An independent business review involves the objective assessment of a business's financial performance, cash flow, debt, working capital, profitability and viability." },
      { question: "What does an independent business review examine?", answer: "An independent business review may examine financial performance, cash flow, debt, working capital, profitability, business model and viability." },
      { question: "When is an independent business review needed?", answer: "An independent business review may be needed for lender requirements, investor requirements, director obligations and distressed business situations." },
      { question: "Who commissions independent business reviews?", answer: "Independent business reviews may be commissioned by lenders, investors, directors, creditors and organisations." }
    ],
    relatedServices: [
      { title: "Financial Due Diligence", slug: "financial-due-diligence" },
      { title: "Business Valuation", slug: "business-valuation" },
      { title: "Corporate Investigations", slug: "corporate-investigations" },
      { title: "Business Recovery", slug: "business-recovery" }
    ],
    cta: {
      heading: "Discuss Your Independent Business Review Requirements",
      text: "If you require an independent business review, contact Nairobi Forensics LLP to discuss your requirements.",
      buttonText: "Speak to Our Experts",
      buttonLink: "/contact"
    }
  }
};

export default servicesData;
