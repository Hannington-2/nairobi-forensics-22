import { Link } from 'react-router-dom';
import { navigation } from '../../data/Navigationdata/NavigationList';
import '../SectionLanding.css';

const Industries = () => {
  const industries = navigation.find((item) => item.id === 'industries')?.children || [];

  return (
    <main className="section-landing">
      <section className="section-landing-hero">
        <p className="section-landing-eyebrow">INDUSTRY EXPERTISE</p>
        <h1>Insight shaped around the realities of your sector.</h1>
        <p>
          We bring financial, investigative, and regulatory understanding to
          the sectors where decisions carry real consequences.
        </p>
      </section>
      <section className="section-landing-grid" aria-label="Industries we serve">
        {industries.map((industry, index) => (
          <Link className="landing-card" to={industry.path} key={industry.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{industry.label}</h2>
            <p>Explore the challenges and advisory needs of this sector.</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Industries;
