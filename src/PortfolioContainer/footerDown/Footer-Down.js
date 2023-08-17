import React from "react";

import arrowImage from '../../assets/back-arrow.png';
import "./footer-Down.css";



export default function FooterDown(){
    return(          
        <div className="footer2">
           <div className="footer-cont"> 
        <ul className="nav-u">         
        <li className="nav-list">
        <a href="#project" className="nav-link"> Projects</a>
    </li>
    <li className="nav-list">
        <a href="#About-Me" className="nav-link">AboutMe</a>
    </li> 
    <li className="nav-list">
        <a href="resume-btn" className="nav-link">Resume</a>
    </li>
    
    <li className="nav-list">
        <a href="#testimony" className="nav-link">Testimonial</a>
    </li>
    
    <li className="nav-list">
        <a href="https://linktr.ee/mighty_scribe" target="_blank" className="nav-link">Publications</a>
    </li>    
    <li className="nav-list">
        <a href="#Contact-nav" className="nav-link">ContactMe</a>
    </li>
</ul>

        <div className="up">            
        <a href="#" className="up-image">Home<img className="arrowImg" src={arrowImage}/>
        </a>
        </div>
        </div>
</div>
    )
}