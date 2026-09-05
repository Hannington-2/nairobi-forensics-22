const ServiceChallenges = ({ data }) => {
    if (!data) return null;
  
    return (
      <section className="service-challenges">
  
        <div className="section-container">
  
          <div className="section-heading">
  
            <p className="section-eyebrow">
              When You May Need Us
            </p>
  
            <h2>
              {data.heading}
            </h2>
  
            {data.text && (
              <p>
                {data.text}
              </p>
            )}
  
          </div>
  
          <div className="challenges-grid">
  
            {data.items?.map((item) => (
              <div
                className="challenge-item"
                key={item}
              >
                <span>✓</span>
  
                <p>{item}</p>
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default ServiceChallenges;