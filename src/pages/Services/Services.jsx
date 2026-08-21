import { Link } from 'react-router-dom';
import { ServicesNavList } from '../../data/Navigationdata/ServiceList';
import './Services.css';

const ServicesPage = () => {
  return (
    <main className="service-page">
      <p>NAIROBI FORENSICS LLP</p>
      <h1>Our Services</h1>
      <p>Explore our forensic, tax, recovery, and advisory services.</p>

      <div>
        {ServicesNavList.map((category) => (
          <div key={category.path}>
            <Link to={category.path}>{category.title}</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;