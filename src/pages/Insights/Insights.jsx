import { Link } from 'react-router-dom';
import { navigation } from '../../data/Navigationdata/NavigationList';
import '../SectionLanding.css';

const Insights = () => {
  const insights = navigation.find((item) => item.id === 'insights')?.children || [];

  return (
    <main className="section-landing">
      <section className="section-landing-hero">
        <p className="section-landing-eyebrow">INSIGHTS</p>
        <h1>Clear perspectives on risk, evidence, and value.</h1>
        <p>
          Practical perspectives from the areas that shape investigations,
          disputes, tax decisions, valuation, and compliance.
        </p>
      </section>
      <section className="section-landing-grid" aria-label="Insight topics">
        {insights.filter((item) => item.id !== 'all-insights').map((insight, index) => (
          <Link className="landing-card" to={insight.path} key={insight.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{insight.label}</h2>
            <p>Read perspectives and practical guidance from this topic.</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Insights;
