import React from "react";
import "./AboutMe.css";
import pictureNw from '../../assets/mypic.jpg';
import divider from '../../assets/Line-Divider.png';

export default function AboutMe(){
    return(
        <div className="AboutMe-parent" id="About-Me">
        <h1 className="Abt-ME">About me</h1>
        <span className="Abtme-para">Why choose me?</span>
        <div className="line-divider">
        <img src={divider}
         className="divider" width={('49%')} alt=""/>
        </div>
         
        <div className="container">
            <div className="image-box">
            <img src={pictureNw}
                className="myPicture" margin-top={("")}  width={('100%')} alt=""/>
        </div>
        <div className="text-box">
           <p className="aboutMe-text">I'm a front-end developer,
             with years of experience in crafting captivating websites by blending 
             innovative designs to create user-friendly and visually stunning web experiences.
             <br /> 
             <br/>
             I also possess exceptional skills in website design using tools 
             like Figma and Canva, to build websites optimized for peak performance,
              ensuring enhanced user engagement and satisfaction by, 
              <br />ensuring seamless accessibility across all devices.
              <br/>
                If you're looking for a skilled front-end developer who can transform 
                your ideas into reality, I'm your go-to person.<br />
                Hire me to bring your web projects to life!</p>

                 
            </div>
            
            
        </div>
        </div>

    )
}