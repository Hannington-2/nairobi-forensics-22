import { Link } from "react-router-dom";
import {
	FaEnvelope,
	FaFacebookF,
	FaLinkedinIn,
	FaLocationDot,
	FaPhone,
	FaXTwitter,
} from "react-icons/fa6";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";
import "./Footer.css";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer-inner">
				<div className="site-footer-brand">
					<Link className="site-footer-logo" to="/" aria-label="Nairobi Forensics home">
						<img src="/logo.png" alt="Nairobi Forensics LLP" loading="lazy" decoding="async" />
					</Link>
					<p>
						Independent forensic, financial, tax, and advisory support for
						complex decisions.
					</p>
					<div className="site-footer-socials" aria-label="Social media links">
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
							<FaLinkedinIn aria-hidden="true" />
						</a>
						<a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
							<FaXTwitter aria-hidden="true" />
						</a>
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
							<FaFacebookF aria-hidden="true" />
						</a>
					</div>
				</div>

				<nav className="site-footer-links" aria-label="Footer navigation">
					<div>
						<h2>Explore</h2>
						<Link to="/">Home</Link>
						<Link to="/about">About Us</Link>
						<Link to="/services">All Services</Link>
						<Link to="/industries">Industries</Link>
						<Link to="/insights">Insights</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div className="site-footer-service-list">
						<h2>Services</h2>
						{ServicesNavList.map((category) => (
							<Link key={category.id} to={category.path}>
								{category.title}
							</Link>
						))}
					</div>
					<div>
						<h2>Contact</h2>
						<a className="site-footer-contact-item" href="mailto:info@forensicsnbi.com">
							<FaEnvelope aria-hidden="true" />
							<span>info@forensicsnbi.com</span>
						</a>
						<a className="site-footer-contact-item" href="tel:+254713416426">
							<FaPhone aria-hidden="true" />
							<span>0713 416 426</span>
						</a>
						<a className="site-footer-contact-item" href="tel:+254736033826">
							<FaPhone aria-hidden="true" />
							<span>0736 033 826</span>
						</a>
						<span className="site-footer-contact-item site-footer-address">
							<FaLocationDot aria-hidden="true" />
							<span>Monrovia Street,<br/> Nairobi, Kenya</span>
						</span>
						<Link to="/contact">Get in touch</Link>
						<Link to="/contact/consultation">Request a consultation</Link>
					</div>
				</nav>
			</div>

			<div className="site-footer-bottom">
				<span>© {new Date().getFullYear()} Nairobi Forensics LLP</span>
				<span>Built and managed by Delta Logics Technology</span>
			</div>
		</footer>
	);
}

export default Footer;
