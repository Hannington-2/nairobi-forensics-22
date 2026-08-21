import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer-inner">
				<div className="site-footer-brand">
					<Link className="site-footer-logo" to="/" aria-label="Nairobi Forensics home">
						<img src="/logo.png" alt="Nairobi Forensics LLP" />
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
						<Link to="/about">Home</Link>
						<Link to="/services">About Us</Link>
						<Link to="/insights">Services</Link>
						<Link to="/insights">Industry</Link>
						<Link to="/insights">Insight</Link>
						<Link to="/insights">Contact</Link>
					</div>
					<div>
						<h2>Contact</h2>
						<a href="mailto:info@forensicsnbi.com">info@forensicsnbi.com</a>
						<a href="tel:+254713416426">0713 416 426</a>
						<a href="tel:+254736033826">0736 033 826</a>
						<span className="site-footer-address">Monrovia Street, Nairobi, Kenya</span>
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
