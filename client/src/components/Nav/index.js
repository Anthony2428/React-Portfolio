import React from "react";
import Resume from "./assets/Resume.docx"
const Nav = () => {
    return (
    <nav class="navbar py-4">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                <h1 style={{fontSize: "75px", fontFamily: "Fuggles, cursive"}}>AL</h1>
            </a>
            <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            <div class="navbar-menu">
            <div class="navbar-end">
            <a class="navbar-item" href="#">About</a>
            <a class="navbar-item" href={Resume} download>Resume</a>
            <a class="navbar-item" href="mailto:alopez0218.al@gmail.com">alopez0218.al@gmail.com</a>
            <a class="navbar-item" href="https://www.linkedin.com/in/anthony-lopez-6b356218a/">LinkedIn</a></div>
            </div>
        </div>
</nav>
    )
};
export default Nav;