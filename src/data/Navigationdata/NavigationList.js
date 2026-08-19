export const navigation = [
    {
      id: "home",
      label: "Home",
      path: "/",
      type: "link",
    },
  
    {
      id: "about",
      label: "About Us",
      path: "/about",
      type: "dropdown",
      children: [
        {
          id: "about-nairobi-forensics",
          label: "About Us",
          path: "/about",
        },
        {
          id: "our-team",
          label: "Our Team",
          path: "/about/our-team",
        },
        {
          id: "our-approach",
          label: "Our Approach",
          path: "/about/our-approach",
        },
        {
          id: "why-choose-us",
          label: "Why Choose Us",
          path: "/about/why-choose-us",
        },
        {
          id: "careers",
          label: "Careers",
          path: "/about/careers",
        },
      ],
    },
  
    {
      id: "services",
      label: "Services",
      path: "/services",
      type: "mega-menu",
    },
  
    {
      id: "industries",
      label: "Industries",
      path: "/industries",
      type: "dropdown",
      children: [
        {
          id: "banking-financial-services",
          label: "Banking & Financial Institutions",
          path: "/industries/banking-financial-services",
        },
        {
          id: "government-public-sector",
          label: "Government & Public Sector",
          path: "/industries/government-public-sector",
        },
        {
          id: "corporates-businesses",
          label: "Corporates & Businesses",
          path: "/industries/corporates-businesses",
        },
        {
          id: "legal-professional-services",
          label: "Legal & Professional Services",
          path: "/industries/legal-professional-services",
        },
        {
          id: "insurance",
          label: "Insurance",
          path: "/industries/insurance",
        },
        {
          id: "ngos-development",
          label: "NGOs & Development Organisations",
          path: "/industries/ngos-development-organisations",
        },
      ],
    },
  
    {
      id: "insights",
      label: "Insights",
      path: "/insights",
      type: "dropdown",
      children: [
        {
          id: "all-insights",
          label: "All Insights",
          path: "/insights",
        },
        {
          id: "forensic-accounting-insights",
          label: "Forensic Accounting",
          path: "/insights/forensic-accounting",
        },
        {
          id: "fraud-financial-crime",
          label: "Fraud & Financial Crime",
          path: "/insights/fraud-financial-crime",
        },
        {
          id: "tax-investigations",
          label: "Tax & Tax Investigations",
          path: "/insights/tax-investigations",
        },
        {
          id: "asset-tracing-recovery",
          label: "Asset Tracing & Recovery",
          path: "/insights/asset-tracing-recovery",
        },
        {
          id: "litigation-expert-evidence",
          label: "Litigation & Expert Evidence",
          path: "/insights/litigation-expert-evidence",
        },
        {
          id: "corporate-investigations-insights",
          label: "Corporate Investigations",
          path: "/insights/corporate-investigations",
        },
        {
          id: "business-valuation-due-diligence",
          label: "Business Valuation & Due Diligence",
          path: "/insights/business-valuation-due-diligence",
        },
        {
          id: "regulatory-compliance",
          label: "Regulatory & Compliance Updates",
          path: "/insights/regulatory-compliance",
        },
        {
          id: "case-insights",
          label: "Case Insights",
          path: "/insights/case-insights",
        },
      ],
    },
  
    {
      id: "contact",
      label: "Contact Us",
      path: "/contact",
      type: "link",
    },
  ];