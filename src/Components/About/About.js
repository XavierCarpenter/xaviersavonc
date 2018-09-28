import React, { Component } from 'react';
import './About.css';
import { Link, withRouter } from "react-router-dom";


class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="about-content">
            
                    <ul className="social">
                        <li id="follow">Follow Me</li>
                        <li><a href="https://github.com/XavierCarpenter"><i className="fab fa-github-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/xaviersavonc/"><i className="fab fa-linkedin"></i></a></li>
                 
                    </ul>
                    <div className="intro">
                        <h1>Hello, my name is Xavier Carpenter.</h1>
                        <p>I am a Full Stack Web Developer and Javascript specialist.
                    I'm currently located in Dallas, TX heading towards the end of a contract. I spend most of my days
                    coding, watching netflix afd sleeping. Enquires at <span className="highlight">xavier.carpenter16@gmail.com</span>
                        </p>
                    </div>
                    <div className="next">
                        <Link to={"/portfolio"}>
                            <p id="next-page">portfolio</p>
                            <i className="fas fa-chevron-right"></i>
                        </Link>

                    </div>
                </div>


            </div>
        );
    }
}

export default About;
