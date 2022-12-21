import React from "react";
import './Service.css';
import {AiFillHtml5} from "react-icons/ai";
import { DiCss3} from "react-icons/di";  
import { DiJavascript} from "react-icons/di";  
import {DiBootstrap} from "react-icons/di"
import { SiTailwindcss} from "react-icons/si"   
import {DiReact} from "react-icons/di" 


function Serive ()  {
    return (
        <div className="service component__space" id="Skills">
            <div className="heading">
                <h1 className="heading">My Skills</h1>
              
                <p className="heading p__color">
                    Technologies
                </p>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <AiFillHtml5/>
                           
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">HTML</h1>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                             <DiCss3/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">CSS</h1>
                              
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                               <DiJavascript/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">JavaScript</h1>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                             <DiBootstrap/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Bootstrap</h1>
                             
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                              <SiTailwindcss/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Tailwind </h1>
                              
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                              <DiReact/>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">React</h1>
                             
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serive;