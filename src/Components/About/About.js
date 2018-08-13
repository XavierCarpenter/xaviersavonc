import React, { Component } from 'react';
import './About.css';
import { Link, withRouter } from "react-router-dom";


class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="about-content">
                <ul>
                    <li><i class="fab fa-github-square"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-youtube-square"></i></li>
                </ul>
                <div className="intro">
                <h1>Hello, my name is Xavier Carpenter.</h1>
                <p>I am a Full Stack Web Developer and Javascript specialist.
                    Check out my YouTube channel, XTheDev. Feel free to take a look at my latest projects on the web portfolio page. Based in Dallas, TX. Enquires at xavier.carpenter16@gmail.com</p>
                    </div>
                    <div className="next">
                    <Link to={"/portfolio"}>
                    <i class="fas fa-angle-right"></i>
                    </Link>
            
                    </div>
                    </div>


            </div>
        );
    }
}

export default About;
