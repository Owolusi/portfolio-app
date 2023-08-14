import React from 'react';


import '../Home/Profile.css';

export default function profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            
                        
                    <a href="https://twitter.com/Mighty_scribe" target="_blank">
                        <i className="bi bi-twitter text dark mx-1"></i>
                        </a>
                    <a href="https://web.facebook.com/owolusi?_rdc=1&_rdr" target="_blank">
                        <i className="bi bi-facebook text dark mx-1"></i>
                        </a>
                    <a href="https://www.linkedin.com/in/owolusi-lucky-36b540175/" target="_blank">
                        <i className="bi bi-linkedin text dark mx-1"></i>
                        </a>
                        <a href="https://www.instagram.com/oluwabunmiowolusi/"  target="_blank">
                        <i className="bi bi-instagram text dark mx-1"></i>
                        </a>
                    <a href="https://github.com/Owolusi/" target="_blank">
                        <i className="bi bi-github text dark mx-1"></i>
                        </a>
                    <a href="m.bunmi5@gmail.com">
                        <i className="bi bi-google text dark mx-1"></i>
                        </a>
                        </div>
                   </div>

                   <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'M <span className='highlighted-text'>Lucky</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {""}
                        <h1>
                           {""}
                         
                        </h1>
                        <span className='profile-role-tagline'>
                            Passionate about frontend development and web designs
                        </span>
                        
                    </span>
                    <div className='profile-options'>
                    <a href="#Contact-nav" >

                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        </a>
                        <a href='Resume.pdf' download='Resume.pdf'>
                            <button className='btn highlighted-btn' id='resume-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                </div>
    
            <div className='profile-picture'>

                <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}