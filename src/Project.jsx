import React from "react";
import './Project.css';
import Project1 from './img/portfolio-1.png';
import Project2 from './img/portfolio-2.png';
import Project3 from './img/portfolio-3.png';
import Project4 from './img/portfolio-4.png';
import Project5 from './img/portfolio-5.png';
import Project6 from './img/portfolio-6.png';

function Project () {
     return (
         <div className="project component__space" id="Portfolio">
             <div className="heading">
                <h1 className="heading">My Latest Project</h1>
             
                 
             </div>

             <div className="container">
                <div className="row">

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project1} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect">
                             
                            </div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text">Google Search</h4>
                             <p  className="project__text">Tech : React,Tailwind ,Html, Css,JavaScript</p>
                            <a href="https://akshayudupa7.github.io/React-google-clone/" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project2} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text">Crypto App</h4>
                            <p  className="project__text">Tech : React,Tailwind ,Html ,JavaScript</p>
                            <a href=" https://akshayudupa7.github.io/React-crypto-clone/" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project3} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text">Personal Portfolio</h4>
                            <p  className="project__text">Tech : React ,Html, JavaScript , css, Bootstrap</p>
                            <a href="Project" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project4} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text"> Movie App</h4>
                            <p  className="project__text">Tech : React ,Html, Css,JavaScript</p>
                            <a href="https://akshayudupa7.github.io/React-movie-app/" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project5} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text">Electronic Site</h4>
                            <p  className="project__text">Tech : React ,Html, Css,Bootstrap</p>
                            <a href="https://akshayudupa7.github.io/React-electronic-clone/" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                   <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__box__img">
                                <img src={Project6} className="project__img" alt="" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                            <h4 className="project__text">Metaverse Page</h4>
                            <p className="project__text">Tech : React ,Html, Css,Bootstrap</p>
                            <a href="https://akshayudupa7.github.io/React-metaverse-app/" className="project__btn">View Details</a>
                        </div>
                    </div>
                   </div>

                </div>
             </div>
         </div>
     )
}

export default Project;