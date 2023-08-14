import React from "react";
import './Testimonial.css';

export default function testimonial(){
    return(
        <div className="testimonial-container" id="testimony">            
        <h2 className="text-center text-white">TESTIMONIES</h2>
        <p className="lead text-center text-white mb-5">From clients</p>
            <div className="testimonial-parent">                
<div id="#instructors" className="p-9 bg-">
    <div className="container">
            <div className="row">

                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                    <div className="card-body">
               <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle"/>
               <h3 className="card-title mb-3">Lekan</h3>
               <h6 className="card-title mb-3">Lead designer Terain-Fashion</h6>
                <p className="card-text">
                Mighty developed a well desined website for a fashion website that really help our customer to aceess our product at their conveniences
            </p>            
            </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                <div className="card-body">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" className="rounded-circle" alt=""/>
                <h3 className="card-title mb-3">Mr Godwin</h3>
                <h6 className="card-title mb-3">CEO G-Gold fashion</h6>
                <p className="card-text">Mighty desined a website that help us to teach our students easily and introduced our products to the market</p>
              
            </div>
            </div>
        </div>

        
        <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                <div className="card-body">
                <img src="https://randomuser.me/api/portraits/women/12.pg" className="rounded-circle" alt=""/>
                <h3 className="card-title mb-3">Temitope</h3>
                <h6 className="card-title mb-3">Freelancer at Fiverr</h6>

                <p className="card-text">As a we designer Mighty has helped me to transfer my designs into cool websites for my clients.</p>
              
            </div>
            </div>
        </div>

            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                <div className="card-body">
                <img src="https://randomuser.me/api/portraits/men/12.jg"
                className="rounded-circle" alt=""/>
                <h3 className="card-title">Micheal</h3>
                <h6 className="card-title mb-3">Freelancer at Upwork</h6>

                <p className="card-text">I have worked with Micheal on many occasions and he is a good web developer
                with good work ethics.</p> 
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