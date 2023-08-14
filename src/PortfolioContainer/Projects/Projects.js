import React from "react";
import './Projects.css';
import signupImage from "../../assets/screen.png";
import fashionImage from "../../assets/fashion.png";
import fashionImage3 from "../../assets/screen3.png";
import fashionImage4 from "../../assets/Fashion.jpg";



export default function projects(){
    return(

        <div className="project-container" id="project">            
        <h2 className="text-center text-white">PROJECTS</h2>
            <div className="project-parent">                
                <div id="#instructors" className="p-9 bg-secondaary">
                        <div className="container">
                <div className="row">

                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                    <div className="card-body">

               <a href="https://crypto-app-six-pi.vercel.app/"  target="_blank">
                
                <img src={signupImage} className="website-image" alt="Cryto-Trading-App"/>
               </a>
               <h3 className="card-title mb-3">Crypto Trading Website</h3>
               <p className="card-text">Hml/CSS/ Bootstrap/Javascript</p>            
            </div>
            </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                    <div className="card-body">

               <a href="https://fashion-website-beta.vercel.app/"  target="_blank">
                
                <img src={fashionImage} className="website-image" alt="fashion-website"/>
               </a>
               <h3 className="card-title mb-3">Fashion Learning Website</h3>
                <p className="card-text">Hml/CSS/ Bootstrap/Javascript</p>            
            </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                    <div className="card-body">

               <a href="https://www.relevanceapparel.shop/"  target="_blank">
                
                <img src={fashionImage3} className="website-image" alt="Fashion-website"/>
               </a>
               <h3 className="card-title mb-3">E-Commerce Fashion Website</h3>
                <p className="card-text">Hml/CSS/Wordpress</p>            
            </div>
            </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                    <div className="card-body">

               <a href="https://www.figma.com/file/EKkIZ1ak0d3Ymj0GA05LhJ/FASHION-WEBSITE?type=design&node-id=0-1&mode=design&t=TsyD9imAslYSk5HC-0"  target="_blank">
                
                <img src={fashionImage4} className="website-image" alt="Fashion-Website"/>
               </a>
               <h3 className="card-title mb-3">Fashion Designer Website</h3>
                <p className="card-text">Web Template Designed with Figma</p>            
            </div>
            </div>
            </div>



        </div>
        </div>
        </div>
        </div>
        </div>      
    )
    
}