import React from "react";
import './About.css'


function About ()  {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector('a.bottom__to__top');
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
            <div className="about component__space" id="About">
               <h1 className="about__heading">About Me</h1>
                <div className="container">
                  <h2 className="intro">Hi I am Akshay Udupa  a highly motivated, passionate hard-core web developer.<br/> I have a high intrest  in building a FrontEnd application using react</h2>
                    <div className="row">
                        <div className="col__2">
                           <h2 className="intro_head">Experince</h2>
                           <p className="about__text p__color">
                8 Month Experince as a FrontEnd Developer in Thomson Reuters
              </p>
                        </div>
                        <div className="col__2">
                        <h2 className="intro_head">Education</h2>
                         
                       <div className="about__meta">
                            <p className="about__text p__color">
                             10th : Rotary School (2015)
                           </p>
                           <p className="about__text p__color">
                             12th : Excellent College (2017)
                           </p>
                           <p className="about__text p__color">
                             Engineering (E&C) : MITE  (2021)
                           </p>
          
                 <div className="about__button d__flex align__items__center">
                    <a href="https://app.luminpdf.com/viewer/63a94e557bc2c2631ba80e50">
                        <button className="about btn pointer">Look at CV</button>
                    </a>
                   
                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="up__to__top__btn">
                        <a href="/#" className="bottom__to__top">
                        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default About;