// src/pages/Services/Services.jsx

import { Link } from "react-router-dom";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";
import servicesData from "../../data/services/ServiceData";  
import "./Services.css";

const Services = () => {
  return (
    <main className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <p className="services-description">
          Nairobi Forensics LLP provides a comprehensive range of forensic and financial investigation services across Kenya.
        </p>
        
        {ServicesNavList.map(category => {
          const categoryServices = category.children.filter(child => servicesData[child.slug]);
          if (categoryServices.length === 0) return null;
          
          return (
            <section key={category.slug} className="service-category-section">
              <h2>
                <Link to={`/services/${category.slug}`}>{category.title}</Link>
              </h2>
              <div className="service-category-grid">
                {categoryServices.map(service => (
                  <Link 
                    key={service.slug}
                    to={`/services/${category.slug}/${service.slug}`}
                    className="service-item"
                  >
                    <h3>{service.title}</h3>
                    <p>{servicesData[service.slug]?.hero?.description?.slice(0, 100) || servicesData[service.slug]?.overview?.paragraphs?.[0]?.slice(0, 100) || ""}...</p>
                    <span className="learn-more">Learn More →</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Services;
