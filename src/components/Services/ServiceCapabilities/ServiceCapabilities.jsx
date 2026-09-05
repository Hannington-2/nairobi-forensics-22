const ServiceCapabilities = ({ capabilities }) => {
    if (!capabilities?.length) return null;
  
    return (
      <section className="service-capabilities">
  
        <div className="section-container">
  
          <div className="section-heading">
  
            <p className="section-eyebrow">
              Our Expertise
            </p>
  
            <h2>
              How We Can Help
            </h2>
  
          </div>
  
          <div className="capabilities-grid">
  
            {capabilities.map((item, index) => (
  
              <article
                className="capability-card"
                key={item.title}
              >
  
                <span className="capability-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
  
                <h3>
                  {item.title}
                </h3>
  
                <p>
                  {item.description}
                </p>
  
              </article>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default ServiceCapabilities;