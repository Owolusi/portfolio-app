import React from "react";
import Profile from "./Profile";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
import Navbar from "./Navbar/Navbar";
import ContactMe from "../ContactMe/ContacMe";
import FooterDown from "../footerDown/Footer-Down";
import './Home.css';


export default function Home(){
    return(
        <div className="home-container">
        <Navbar/>
        <Profile/>
        <Footer/>
        <AboutMe />
        <Projects />
        <Testimonial/>
        <ContactMe />   
        <FooterDown />     
        </div>
    )
}