import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-eyebrow">NAIROBI FORENSICS LLP</p>
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">This page could not be found.</h1>
        <p className="not-found-message">
          The address may be incorrect, or the page may have moved. Return to
          Nairobi Forensics and continue exploring our advisory services.
        </p>
        <Link className="not-found-link" to="/">
          <span>Return to homepage</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

export default NotFound;