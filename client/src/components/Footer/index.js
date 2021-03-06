import React from "react";
import Resume from "./assets/Resume.docx"
const Footer = () => {
        return (
        <footer className="footer" style={{margin: "auto",padding: "2rem .5rem 2rem .5rem", bottom: "0",width: "95%", backgroundColor: "#878f99"}}>
<header className="card-header" style={{flexDirection: "column", margin: "auto", textAlign: "center"}}>
                <p className="card-header-title" style={{textAlign: "center", margin: "auto"}}>My Contact info</p>
                <a style={{borderRightColor: "rgb(135, 143, 153)"}} href="https://www.linkedin.com/in/anthony-lopez-6b356218a/" className="card-footer-item">LinkedIn</a>
                <a style={{borderRightColor: "rgb(135, 143, 153)"}} href="mailto: alopez0218.al@gmail.com" className="card-footer-item">Email</a>
                <a style={{borderRightColor: "rgb(135, 143, 153)"}} href="#" className="card-footer-item">425-501-2452</a>
                <a style={{borderRightColor: "rgb(135, 143, 153)"}} href={Resume} downbload className="card-footer-item">Resume</a>
                <a href="https://github.com/Anthony2428" className="card-footer-item">GitHub</a>
            </header>
          </footer>
    )
};

export default Footer;