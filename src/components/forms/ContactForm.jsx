// import React from 'react';
import './Contact.css';
import '../layout/Footer.css';
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaLinkedinIn,
    FaXTwitter,
    FaFacebookF,
  } from "react-icons/fa6";
const ContactForm = () => {
  return (
    <section className="contact-section">
        <div className="contact-grid">
            <div className="contact-info">
                <img className="contact-watermark" src="/logo.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <h3>Contact Information</h3>
                <div className="left-info">
                    
                        <div className="info item">
                                <div className="icon">
                                    <FaLocationDot></FaLocationDot>
                                    <h4>Address</h4>
                                </div> 
                                <div className='info-item'>
                                    <p className='info-descp'>
                                        Monrovia Street<br/>Nairobi, Kenya
                                    </p>
                                </div>
                        </div>

                        <div className="info item">
                                <div className="icon">
                                    <FaPhone></FaPhone>
                                    <h4>Phone</h4>
                                </div>
                                <div className='info-item'>
                                    <p className='info-descp'>
                                        +254 713 416 426<br/>+254 736 033 826
                                    </p>
                                </div>
                            </div>

                        <div className="info item">
                            <div className="icon">
                                <FaEnvelope></FaEnvelope>
                                <h4>Email</h4>
                            </div>
                            <div className='info-item'>
                                <p className='info-descp'>
                                    info@forensicsnbi.com<br/>
                                </p>
                            </div>  
                        </div>
                     
                        <div className="info item">
                            <div className="icon">
                                <FaClock></FaClock>
                                <h4>Business Hours</h4>
                            </div>
                            <div className='info-item'>
                                <p className='info-descp'>Monday-Friday: 8:00AM to 5:00PM<br/>
                                    Saturday: 9:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                        
                </div>
                    <span className='divider'></span>
                <div className="social-link">
                    <h4>Follow Us</h4>
                <div className="social-icons" aria-label="Social media link">
                            <a href="https://www.linkedin.com/company/nairobi-forensics" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn aria-hidden="true" />
                            </a>
                            <a href="https://x.com/forensicsnbi254" target="_blank" rel="noreferrer" aria-label="X">
                                <FaXTwitter aria-hidden="true" />
                            </a>
                            <a href="https://web.facebook.com/people/Nairobi-Forensics-LLP/61582189740299/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <FaFacebookF aria-hidden="true" />
                            </a>
                        </div>
                        </div>
            </div>
            <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                <form id="contactForm">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select id="subject" name="subject" required>
                            <option value="">Select a subject</option>
                            <option value="support">Forensic Accounting & Financial Investigations</option>
                            <option value="sales">Tax Investigations & Forensic Tax Services</option>
                            <option value="partnership">Financial Crime & Complex Investigations</option>
                            <option value="feedback">Asset Tracing & Recovery Support</option>
                            <option value="other">Litigation, Disputes & Expert Services</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
                    </div>
                    
                    <div className="form-submit">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  
  )};

export default ContactForm;
