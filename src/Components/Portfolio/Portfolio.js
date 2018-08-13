import React, { Component } from 'react';
import './Portfolio.css';
import { Link, withRouter } from "react-router-dom";
import fre3agent from "../../img/fre3agent.png"
import contentum from "../../img/contentum.png"


class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="Portfolio-content">

                    <div className="portfolio-intro">
                        <h1>Skills And Work</h1>
                        <p>From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.</p>
                        <ul className="skills">
                            <li>Javascript</li>
                            <li>ES6+</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Sass</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>Nodejs</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Restful API</li>
                        </ul>
                    </div>
                    <div className="projects-container">
                        <div className="project-box">
                            <h1>Fre3Agent</h1>
                            <img src={fre3agent} width="380" />
                        </div>
                        <div className="project-box">
                            <h1>Contentum</h1>
                            <img src={contentum} width="380" />
                        </div>
                        <div className="project-box">
                            <h1>Fre3Agent</h1>

                            <img src={fre3agent} width="380" />
                        </div>
                        <div className="project-box">
                            <h1>Contentum</h1>

                            <img src={contentum} width="380" />
                        </div>
                        <div className="project-box">
                            <h1>Fre3Agent</h1>

                            <img src={fre3agent} width="380" />
                        </div>
                        <div className="project-box">
                            <h1>Contentum</h1>

                            <img src={contentum} width="380" />
                        </div>
                    </div>

                    {/* <div className="prev">
                        <Link to={"/"}>
                            <i class="fas fa-angle-left"></i>
                        </Link>

                    </div>
                    <div className="next">
                        <Link to={"/portfolio"}>
                            <i class="fas fa-angle-right"></i>
                        </Link>

                    </div> */}
                </div>


            </div>
        );
    }
}

export default Portfolio;
