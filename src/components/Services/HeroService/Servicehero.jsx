import { Link } from "react-router-dom";

const ServiceHero = ({ service }) => {
  const { hero } = service;

  return (
    <section className="service-hero">

      <div className="service-hero-content">

        <p className="service-eyebrow">
          {service.eyebrow}
        </p>

        <h1>
          {hero?.heading || service.title}
        </h1>

        <p className="service-hero-description">
          {hero?.text || service.description}
        </p>

        <div className="service-hero-actions">

          <Link
            to={hero?.primaryButton?.link || "/contact"}
            className="service-primary-btn"
          >
            {hero?.primaryButton?.text || "Speak to Our Experts"}
          </Link>

          {hero?.secondaryButton && (
            <a
              href={hero.secondaryButton.link}
              className="service-secondary-btn"
            >
              {hero.secondaryButton.text}
            </a>
          )}

        </div>

      </div>

      {hero?.image && (
        <div className="service-hero-image">

          <img
            src={hero.image}
            alt={service.title}
          />

        </div>
      )}

    </section>
  );
};

export default ServiceHero;