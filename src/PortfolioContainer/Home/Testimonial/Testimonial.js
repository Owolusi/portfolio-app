import React from "react";
import { useState } from "react";
import './Testimonial.css';
import divider from '../../../assets/Line-Divider.png';
import { images } from "../../../Helpers/TestimonialData";

import { FaArrowLeft, FaArrowRight, FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";






export default function Testimonial(){
    const [currDiv, setCurrDiv]=useState(0);

    return(
        <div className="testimonial-container" id="testimony">            
        <h2 className="text-center text-white">TESTIMONIES</h2>
        <p className="lead text-center text-white mb-5" id="client-Text">From clients</p>

        <div className="line-divider3">
        <img src={divider}
         className="divider2" width={('49%')} alt=""/>
        </div>


        <div className="carol">
    <div className="Left" 
           onClick={()=>{
            currDiv>0 && setCurrDiv(currDiv-1);//if else statement in js
           }}>

            <FaArrowLeft style={{fontSize:30}}/>

           </div>
           <div className="Center">

            
           <img src='{images[currDiv].Client1}' className="rounded-circle"/>
               <h3 className="card-title mb-3">{images[currDiv].title}</h3>
               <h6 className="card-title mb-3">{images[currDiv].subtitle}</h6>
                <p className="card-text">{images[currDiv].detail}</p>         

           </div>
           <div className="right"
           onClick={()=>{
            currDiv<images.length-1 && setCurrDiv(currDiv+1) //if else statement in js
           }}>
           <FaArrowRight  style={{fontSize:30}}/>
            
           </div>              
            </div>
            </div>

    )
}