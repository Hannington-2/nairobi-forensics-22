import {
    FaSearch,
    FaShieldAlt,
    FaBalanceScale,
    FaChartLine,
    FaFileInvoiceDollar,
    FaBuilding,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const iconMap = {
  investigations: FaSearch,
  tax: FaFileInvoiceDollar,
  crime: FaShieldAlt,
  recovery: FaBuilding,
  disputes: FaBalanceScale,
  corporate: FaChartLine,
};

const ServiceCard = ({ service, description, icon = 'investigations' }) => {
  const Icon = iconMap[icon] || FaSearch;

  return (
    <article className="service-card">
      <div className="service-card-icon" aria-hidden="true">
        <Icon />
      </div>
      <h3>{service.title}</h3>
      <p>{description}</p>
      <Link className="service-card-link" to={service.path}>
        Explore service <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
};

export default ServiceCard;
