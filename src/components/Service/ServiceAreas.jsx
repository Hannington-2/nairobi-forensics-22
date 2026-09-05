// src/components/Service/ServiceAreas.jsx

import "./ServiceAreas.css";

const ServiceAreas = ({ service, variant = "services" }) => {
  if (!service) return null;
  
  const isServices = variant === "services";
  const items = isServices ? service.services : service.situations;
  
  if (!items || items.length === 0) return null;
  
  const title = isServices 
    ? "Our Services"
    : "When You May Need This Service";
  
  return (
    <section className={`service-areas service-areas-${variant}`}>
      <div className="container">
        <h2>{title}</h2>
        <div className="service-areas-grid">
          {items.map((item, index) => (
            <div key={index} className="service-area-item">
              {isServices ? (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </>
              ) : (
                <div className="service-situation-item">
                  <span className="situation-marker">✓</span>
                  <span>{item}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
