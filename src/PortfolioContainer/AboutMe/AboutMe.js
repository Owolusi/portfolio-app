import React from "react";
import "./AboutMe.css";
import pictureNw from '../../assets/mypic.jpg'

export default function AboutMe(){
    return(
        <div className="AboutMe-parent" id="About-Me">
        <h1 className="Abt-ME">About me</h1>
        <span className="Abtme-para">Why choose me?</span>
         
        <div className="container">
            <div className="box">
            <img src={pictureNw}
                className="myPicture" margin-top={('60%')}  width={('100%')} alt=""/>
        </div>
        <div className="box">
           <p className="aboutMe-text">I'm a front-end developer,
             with years of experience in crafting captivating websites.
             My expertise lies in seamlessly blending 
             innovative designs with cutting-edge tech to create
             user-friendly and visually stunning web experiences.
             <br /> 
             I also possess exceptional skills in website design using tools 
             like Figma and Canva. I build websites optimized for peak performance,
              ensuring enhanced user engagement and satisfaction. 
              My proficiency extends to 
              <br />responsive web design, 
              <br />ensuring seamless accessibility across all devices.
                If you're looking for a skilled front-end developer who can transform 
                your ideas into reality, I'm your go-to person.<br />
                Hire me to bring your web projects to life!</p>             
            <div className='profile-options'>

                <a href="#Contact-nav">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        </a>

                        <a href='Resume.pdf' download='Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                    
            </div>
            
            
        </div>
        </div>

    )
}