
import React from 'react';
import {useState} from 'react'; 
import './Projects.css';
import {images} from "../../Helpers/projectData";
import { FaArrowLeft, FaArrowRight, FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";
import divider from '../../../src/assets/Line-Divider.png';

function Carousel() {
    const [currImg, setCurrImg]=useState(0);

  return (    

    <div className="project-container" id="project">            
    <h2 className="text-center text-white">PROJECTS</h2>

    <div className="line-divider2">
    <img src={divider}
     className="divider2" width={('49%')} alt=""/>
    </div>



 
    
      
      <div className='project-details'> 

      <h1 className='project-label'>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>             
            <a href={images[currImg].link}target="_blank" rel='no referer'>
         <button className='live-btn'>Live</button>
        </a>
        <a href={images[currImg].link2}target="_blank">
        <button className='code-btn'>Code</button>

        </a>          
            

        <div className="project-carol" 
        style={{backgroundImage:`url(${images[currImg].img})`}}>
           {/*  <img src={images[2].img} alt='crypto website'/>      the array is imported */}
           
           <div className="Left" 
           onClick={()=>{
            currImg>0 && setCurrImg(currImg-1);//if else statement in js
           }}>

            <FaArrowLeft style={{fontSize:30}}/>

           </div>
           <div className="Center">

           </div>
           <div className="right"
           onClick={()=>{
            currImg<images.length-1 && setCurrImg(currImg+1) //if else statement in js
           }}>
           <FaArrowRight  style={{fontSize:30}}/>
            
           </div>
           
            </div>
            </div>


    </div>
    
    
   

  );
}

export default Carousel