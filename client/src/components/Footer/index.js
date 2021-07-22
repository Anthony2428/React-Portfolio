import React from "react";
import Resume from "./assets/Resume.docx"
const Footer = () => {
        return (
        <footer className="footer">
            <header className="card-header">
                <p className="card-header-title">Here's My Contact info</p>
                <a href="https://www.linkedin.com/in/anthony-lopez-6b356218a/" className="card-footer-item">LinkedIn</a>
                <a href="mailto: alopez0218.al@gmail.com" className="card-footer-item">Email</a>
                <a href="#" className="card-footer-item">425-501-2452</a>
                <a href={Resume} downbload className="card-footer-item">Resume</a>
                <a href="https://github.com/Anthony2428" className="card-footer-item">GitHub</a>
                <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
          </footer>
    )
};

export default Footer;