const ServiceOverview = ({ overview }) => {
    if (!overview) return null;
  
    return (
      <section className="service-overview">
  
        <div className="section-container">
  
          <div className="section-heading">
  
            <p className="section-eyebrow">
              Overview
            </p>
  
            <h2>
              {overview.heading}
            </h2>
  
          </div>
  
          <div className="overview-content">
  
            {overview.paragraphs?.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default ServiceOverview;