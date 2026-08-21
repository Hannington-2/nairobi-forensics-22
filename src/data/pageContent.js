import { navigation } from "./Navigationdata/NavigationList";

const servicePages = {
  "/about": {
    section: "About Us",
    title: "About Nairobi Forensics",
    intro: "Independent forensic support for organisations facing financial uncertainty, disputes, and complex investigations.",
    details: ["Our team helps clients understand evidence, make informed decisions, and move forward with confidence."]
  },
  "/services": {
    section: "Services",
    title: "Forensic Services That Clarify Complex Matters",
    intro: "Explore focused forensic support for investigations, disputes, compliance, and financial decisions.",
    details: [
      "Each service page below has its own data object, title, introduction, and focus areas.",
      "Use this structure as the starting point for replacing placeholder content with full page sections."
    ]
  },
  "/about/our-team": {
    section: "About Us",
    title: "Our Team",
    intro: "Meet the investigators, accountants, analysts, and advisers who bring disciplined thinking to difficult questions.",
    details: ["Our work combines technical expertise, local knowledge, and clear communication."]
  },
  "/about/our-approach": {
    section: "About Us",
    title: "Our Approach",
    intro: "We turn complex evidence into clear, defensible findings.",
    details: ["Every engagement is planned around independence, confidentiality, documented evidence, and practical outcomes."]
  },
  "/about/why-choose-us": {
    section: "About Us",
    title: "Why Choose Us",
    intro: "Clients choose us for careful analysis, responsive advice, and reports that stand up to scrutiny.",
    details: ["We focus on reliable evidence, transparent methods, and useful conclusions."]
  },
  "/about/careers": {
    section: "About Us",
    title: "Careers",
    intro: "Build a career helping organisations understand risk, evidence, and financial complexity.",
    details: ["This page will contain available roles, working culture, and application information."]
  },
  "/industries": {
    section: "Industries",
    title: "Industry Expertise",
    intro: "Our investigations are shaped around the regulatory, operational, and financial realities of each sector.",
    details: ["Choose an industry to see the challenges and support areas relevant to that audience."]
  },
  "/insights": {
    section: "Insights",
    title: "Forensic Insights",
    intro: "Practical perspectives on fraud, investigations, tax, disputes, valuation, and compliance.",
    details: ["Each insight topic has its own content record so articles can be added without changing the route structure."]
  },
  "/contact": {
    section: "Contact",
    title: "Talk to a Forensics Specialist",
    intro: "Tell us what you are dealing with and we will help identify the right next step.",
    details: ["Share the nature of your concern, the relevant timeline, and how we can reach you."]
  }
};

const industries = navigation.find((item) => item.id === "industries")?.children || [];
const insights = navigation.find((item) => item.id === "insights")?.children || [];

for (const industry of industries) {
  servicePages[industry.path] = {
    section: "Industries",
    title: industry.label,
    intro: `Nairobi Forensics supports ${industry.label.toLowerCase()} organisations with independent financial, investigative, and risk advisory expertise.`,
    details: [
      "We help leaders understand exposure, test important information, and make decisions supported by clear evidence.",
      "Our work can be tailored to investigations, disputes, compliance reviews, recovery matters, and due diligence."
    ]
  };
}

for (const insight of insights) {
  if (insight.id === "all-insights") {
    continue;
  }

  servicePages[insight.path] = {
    section: "Insights",
    title: insight.label,
    intro: `Explore Nairobi Forensics perspectives on ${insight.label.toLowerCase()} and the decisions it informs.`,
    details: [
      "Our insights connect practical experience with the financial, regulatory, and investigative questions organisations face.",
      "This topic page is ready for articles, guides, case insights, and research as they are published."
    ]
  };
}

const serviceCategories = [
  {
    slug: "forensic-accounting-financial-investigations",
    title: "Forensic Accounting & Financial Investigations",
    intro: "Trace financial activity, test records, and explain what the numbers reveal.",
    children: [
      ["forensic-accounting", "Forensic Accounting", "Reconstruct financial information and identify unexplained movements."],
      ["financial-forensic-audits", "Financial Forensic Audits", "Test transactions and controls for anomalies, omissions, and irregularities."],
      ["financial-forensic-investigations", "Financial Forensic Investigations", "Build an evidence-led view of suspected financial misconduct."],
      ["fraud-investigations", "Fraud Investigations", "Investigate allegations, preserve evidence, and clarify financial impact."],
      ["fraud-audits", "Fraud Audits", "Review records and controls to identify fraud exposure and warning signs."]
    ]
  },
  {
    slug: "tax-investigations-forensic-tax-services",
    title: "Tax Investigations & Forensic Tax Services",
    intro: "Bring financial evidence and tax analysis together when obligations or filings are challenged.",
    children: [
      ["tax-fraud-investigations", "Tax Fraud Investigations", "Examine suspected concealment, false records, and tax-related misconduct."],
      ["tax-dispute-support", "Tax Dispute Support", "Prepare clear financial analysis for tax objections, negotiations, and disputes."],
      ["forensic-tax-reviews", "Forensic Tax Reviews", "Review tax positions and supporting records for inconsistencies and risk."],
      ["tax-risk-assessments", "Tax Risk Assessments", "Identify weaknesses that may lead to tax exposure or regulatory attention."],
      ["tax-audit-support", "Tax Audit Support", "Organise evidence and analysis for a more controlled audit response."]
    ]
  },
  {
    slug: "financial-crime-complex-investigations",
    title: "Financial Crime & Complex Investigations",
    intro: "Connect transactions, entities, and evidence across complex financial crime matters.",
    children: [
      ["financial-crime-investigations", "Financial Crime Investigations", "Analyse suspicious activity and develop a clear investigative narrative."],
      ["cross-border-forensic-investigations", "Cross-Border Forensic Investigations", "Follow financial trails across jurisdictions and organisational boundaries."],
      ["transaction-analysis", "Transaction Analysis", "Map payment activity to identify patterns, links, and unusual behaviour."]
    ]
  },
  {
    slug: "asset-tracing-recovery-support",
    title: "Asset Tracing & Recovery Support",
    intro: "Locate, verify, and document assets relevant to disputes, enforcement, and recovery.",
    children: [
      ["asset-tracing", "Asset Tracing", "Identify assets, ownership links, and movements that matter to recovery."],
      ["cross-border-asset-tracing", "Cross-Border Asset Tracing", "Investigate asset connections that extend across jurisdictions."],
      ["asset-recovery-support", "Asset Recovery Support", "Provide evidence and analysis to support recovery strategies."],
      ["asset-verification", "Asset Verification", "Test ownership, value, existence, and documentation for identified assets."]
    ]
  },
  {
    slug: "litigation-disputes-expert-services",
    title: "Litigation, Disputes & Expert Services",
    intro: "Translate financial and commercial evidence into analysis that supports dispute resolution.",
    children: [
      ["litigation-support", "Litigation Support", "Organise financial evidence and analysis for legal teams and proceedings."],
      ["expert-witness-services", "Expert Witness Services", "Present independent technical opinions in a clear and defensible way."],
      ["financial-loss-quantification", "Financial Loss Quantification", "Measure loss using transparent assumptions and traceable calculations."],
      ["economic-damages-quantification", "Economic Damages Quantification", "Assess economic impact and damages arising from disputed events."]
    ]
  },
  {
    slug: "corporate-investigations-valuation-due-diligence",
    title: "Corporate Investigations, Valuation & Due Diligence",
    intro: "Support important corporate decisions with independent investigation, valuation, and verification.",
    children: [
      ["corporate-investigations", "Corporate Investigations", "Examine internal concerns, conduct, transactions, and governance issues."],
      ["business-valuation", "Business Valuation", "Develop an informed view of business value and the assumptions behind it."],
      ["financial-due-diligence", "Financial Due Diligence", "Test financial performance, risks, and quality of earnings before a decision."],
      ["investigative-due-diligence", "Investigative Due Diligence", "Look beyond reported information to understand people, entities, and risk."]
    ]
  }
];

for (const category of serviceCategories) {
  const categoryPath = `/services/${category.slug}`;
  servicePages[categoryPath] = {
    section: "Services",
    title: category.title,
    intro: category.intro,
    details: ["This category brings together related services for a focused engagement."]
  };

  for (const [slug, title, intro] of category.children) {
    servicePages[`${categoryPath}/${slug}`] = {
      section: "Services",
      title,
      intro,
      details: ["This service page is ready for process details, deliverables, case examples, and contact information."]
    };
  }
}

export const pageContent = servicePages;

export function getPageContent(pathname) {
  return pageContent[pathname] || {
    section: "Page",
    title: "Page Not Found",
    intro: "This page does not have content yet.",
    details: ["Check the URL or return to the homepage."]
  };
}
