// import React from 'react';
import {
  LuBuilding2,
  LuScale,
  LuChartNoAxesCombined,
  LuLandmark,
} from "react-icons/lu";
import Section from "../../components/common/Setcion/Section";
import Sectionbutton from "../../components/common/Sectionbutton/Sectionbutton";
import Hero from "../../components/content/Hero/Hero";
import ServiceCard from "../../components/cards/ServiceCard/ServiceCard";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";
import { getPageContent } from "../../data/pageContent";
import './Home.css';

const whoWeHelp = [
  {
    title: "Businesses & Organizations",
    description:
      "Financial distress, fraud risks, governance challenges, and recovery.",
    icon: LuBuilding2,
  },
  {
    title: "Legal Professionals",
    description:
      "Forensic analysis, litigation support, financial evidence, and expert advisory.",
    icon: LuScale,
  },
  {
    title: "Investors & Stakeholders",
    description:
      "Independent financial analysis, verification, viability assessments, and risk insights.",
    icon: LuChartNoAxesCombined,
  },
  {
    title: "Regulators & Institutions",
    description:
      "Independent investigations, financial analysis, verification, and professional advisory.",
    icon: LuLandmark,
  },
];

const serviceIcons = ["investigations", "tax", "crime", "recovery", "disputes", "corporate"];

const Home = () => {
  return (
    <main className="home-page">
        <section className="hero-home">
          <Hero />
        </section>
      <Section
      eyebrow="WHO WE ARE"
      heading="An independent advisory firm built for the moments that matter most."
      variant="light"
      layout="split"
      className="home-who-we-are"
    >
      <p className="section-body-text">
        Nairobi Forensics LLP is a leading Kenyan financial advisory and
        forensic consulting firm specializing in forensic accounting,
        business recovery, insolvency administration, corporate
        restructuring, tax advisory, fraud investigations, and regulatory
        compliance.
      </p>

      <p className="section-body-text">
        Our multidisciplinary team combines financial expertise,
        investigative rigor, legal awareness, and strategic business insight
        to help organizations resolve disputes, recover value, manage risk,
        and make informed decisions.
      </p>
    
      <Sectionbutton href="/about">
        More about our firm
      </Sectionbutton>
    </Section>      

    <Section
      eyebrow="OUR SERVICES"
      heading="Comprehensive forensic, tax and recovery advisory."

      variant="muted"
      layout="split"
      className="home-OUR-SERVICES"
    >
      <Sectionbutton href="/services" align="right">
        ALL SERVICES
      </Sectionbutton>
    </Section>

    <section className="service-cards-section" aria-label="Our services">
      <div className="service-cards-grid">
        {ServicesNavList.map((service, index) => {
          const content = getPageContent(service.path);

          return (
            <ServiceCard
              key={service.path}
              service={service}
              description={content.intro}
              icon={serviceIcons[index]}
            />
          );
        })}
      </div>
    </section>

    <section className="who-we-help-section" aria-labelledby="who-we-help-title">
      <div className="who-we-help-header">
        <p className="who-we-help-eyebrow">WHO WE HELP</p>
        <h2 id="who-we-help-title">Clear advice for the people responsible for important decisions.</h2>
        <p className="who-we-help-intro">
          We support organisations and professionals who need reliable evidence,
          independent analysis, and a practical way forward.
        </p>
      </div>

      <div className="who-we-help-grid">
        {whoWeHelp.map((item) => {
          const Icon = item.icon;

          return (
            <article className="who-we-help-card" key={item.title}>
              <div className="who-we-help-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>

    <section className="home-news-cta" aria-labelledby="home-news-cta-title">
      <div className="home-news-cta-content">
        <p className="home-news-cta-eyebrow">STAY INFORMED</p>
        <h2 id="home-news-cta-title">Receive our latest forensic and advisory updates.</h2>
        <p>
          Subscribe for practical news, insights, and updates from Nairobi Forensics.
        </p>
      </div>
      <form className="home-news-cta-form" action="/contact" method="get">
        <label htmlFor="news-email">Your email address</label>
        <div className="home-news-cta-form-row">
          <input
            id="news-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <button type="submit">
            Subscribe <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="home-news-cta-note">You will continue to our contact page to complete your request.</p>
      </form>
    </section>
    
    </main>
    );
}

export default Home;
