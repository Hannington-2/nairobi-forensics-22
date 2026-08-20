// import React from 'react';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import { ROUTES } from '../../../lib/constants';
import './Hero.css';

const heroDescription = [
    "Nairobi Forensics LLP is an independent forensic accounting and   business advisory firm helping organizations investigate complex financial matters, manage risk, resolve disputes, preserve value, and navigate business distress with evidence-based insights and strategic guidance.",

    "Our multidisciplinary expertise extends across forensic accounting, fraud and financial investigations, tax advisory and compliance, insolvency, business restructuring and recovery, corporate governance, independent verification, risk advisory, litigation support, and expert witness services. We work with businesses, investors, legal professionals, institutions, and other stakeholders in Kenya and across international markets, supporting both domestic and cross-border matters with independent analysis, practical recommendations, and professionally defensible solutions.",

    "Whether addressing suspected financial misconduct, complex tax issues, regulatory concerns, governance failures, commercial disputes, financial distress, or restructuring challenges, Nairobi Forensics LLP provides the clarity and specialist expertise needed to understand complex situations, evaluate available options, manage risk, and make informed decisions with confidence."

 ];
const Hero = () => {

 const [currentDescription, setCurrentDescription] = useState(0);
 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((previousIndex) => {
        return (previousIndex + 1) % heroDescription.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="hero">
        <div className="container">
            <div className="hero-container">
                <p className='tag'>
                    <span className="tag-note"></span>
                    Turning Vision To value
                </p>
                <h1>Clarity and Confidence When the Stakes Are High.</h1>
                    <div className="hero-description">
                        <p key={currentDescription}>
                            {heroDescription[currentDescription]}
                        </p>
                    </div>
            </div>

                  <div className="hero-actions">
                    <Button btnName="Speak to Our Experts" href={ROUTES.contact} />
                    <Button btnName="Explore Our Services" href={ROUTES.services} variant="secondary" />
                  </div>

        </div>
    </section>
  );
}

export default Hero;
