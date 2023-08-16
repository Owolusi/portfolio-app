import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return(
        <div className="navbar">                   
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <a href="#" className="navbar-brand">MIGHTY TECH</a>            
            <button className="navbar-toggler" type="button"
             data-bs-toggle="collapse" data-bs-target="#navmenu">
             <span className="navbar-toggler-icon"></span></button>
        
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#project" className="nav-link"> Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#About-Me" className="nav-link">About Me</a>
                    </li> 
                    <li className="nav-item">
                        <a href="resume-btn" className="nav-link">Resume</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#testimony" className="nav-link">Testimonial</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="https://linktr.ee/mighty_scribe" target="_blank" className="nav-link">Publications</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#Contact-nav" className="nav-link">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
  
        

    )
}