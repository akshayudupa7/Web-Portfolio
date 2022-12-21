import { useState } from 'react';
import './Home.css';
import {DiReact} from "react-icons/di" 

function Home () {
   window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header");
     header.classList.toggle("active", window.scrollY > 0)
   });
    const [isOpen, setIsOpen] = useState(false);
    return (
     <div className='home' id='Home'>
        <div className='home__bg'>
            <div className='header Navbar'>
                <span className='symbol'> <DiReact/> </span>
                <div className={`nav-items ${isOpen && "open"}`} >
                    <a href='#Home'>Home</a>
                    <a href='#About'>About</a>
                    <a href='#Portfolio'>Portfolio</a>
                    <a href='#Skills'>Skills</a>
                    <a href='#Contact'>Contact</a>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} 
                onClick={() => setIsOpen(!isOpen)} >
                    <div className='bar'></div>
                </div>
            </div>
            <div className="container">
          <div className="home__content">
            <div className="home__meta">
             <h2 className="frelencer_content">
             Hi!
             <br></br>
             I'm FrontEnd Developer 
            
             </h2>
            </div>
          </div>
        </div>
            
        </div>
     </div>
    )
}

export default Home;