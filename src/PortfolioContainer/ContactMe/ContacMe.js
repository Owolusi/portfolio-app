import React from "react";
import './ContacMe.css';
import messageImage from "../../assets/MSG.jpg";


export default function Footer(){
    return(
    <div className="background-container" id="Contact-nav">
        <div className="contact-text">       
        <h1>Contact Me</h1>
        <p>Lets Keep In Touch</p> 
        </div>
        
            <div className="getInTouch-Container">
                 
            <div className="GetInTouch-text">    

        <div className='cool-icon'>                            
                          
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
                        <p>send your mail here</p>  

                        <div className="Message-image">
                        <img src={messageImage} alt="Message" className="Message-image"/>
                        </div>
        

        </div>


        <div className="form-container">
        <form action="https://formsubmit.co/e3c1ca1012a4635b3318e09149b93f23" method="POST">
            
            {/*spammer */}
            <input type="text" name="_honey"  style={{display:'none'}}/>

             {/*disable captcha*/}
             <input type="hidden" name="_captcha" value="false"/>

                {/*spammer */}
             <input type="hidden" name="_next" value="https://portfolio-app-taupe-gamma.vercel.app/success.html"/>


                <label  className="login">Name</label>
                <input type="text" name="name" placeholder="Your name" required/>
                <label class="Email" for="Email" > Email</label>
                <input type="Email" name="emailaddress" placeholder="your Email address" required/>
                <label for="Message">Message</label>
                <input type="text" name="comments. questions" placeholder="your message" required/>
                <button type="submit" className="submit-button">Submit</button>           

            </form>      
        </div>
</div>             
</div>
        
    );
}