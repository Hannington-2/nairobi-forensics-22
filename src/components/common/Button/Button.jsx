import './Button.css';
import { ROUTES } from '../../../lib/constants';

const Button = ({ btnName, href = ROUTES.contact, variant = "primary", className = "" }) => {
  return (
    <div className="cta-hero">
      <a href={href} className={`button hero-btn hero-btn-${variant} ${className}`.trim()}>
        {btnName}
      </a>
    </div>
  );
}

export default Button;
