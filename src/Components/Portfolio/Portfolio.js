import React, { Component } from 'react';
import './Portfolio.css';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import fre3agent from "../../img/fre3agent.png"
import contentum from "../../img/contentum.png"


class Portfolio extends Component {
    render() {
        console.log(this.props.projects)
        let projects = this.props.projects &&
            this.props.projects.map((obj, i) => {
                return (
                    <div key={i}>
                        <Link to={`/Details/${obj.name}`}>
                            <div className="project-box">
                                <h1>{obj.name}</h1>

                                <img src={obj.image} width="100%" />

                            </div>
                        </Link>
                    </div>
                );
            });
        return (
            <div className="Portfolio">
                <div className="Portfolio-content">

                    <div className="portfolio-intro">
                        <h1>Developer Portfolio</h1>
                        <p>From Web Components and UI/UX designs to React.JS, Redux, and Node.JS. Check out my latest web development portfolio projects.</p>
                        <ul className="skills">
                            <li>Javascript</li>
                            <li>ES6+</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Sass</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>AdobeXD</li>
                            <li>Prototyping</li>
                            <li>Nodejs</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Restful API</li>
                        </ul>
                    </div>
                    <div className="projects-container">
                        {projects}
                        {/* <Link to="/">
                            <div className="project-box">
                                <h1>Fre3Agent</h1>
                                <img src={fre3agent} width="380" />
                            </div>
                        </Link>
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
                        </div> */}
                    </div>
                    <div className="prev">
                        <Link to={"/"}>
                            <p id="last-page">about</p>
                            <i className="fas fa-chevron-left"></i>
                        </Link>

                    </div>
                    <div className="next">
                        <Link to={"/recommendations"}>
                            <p id="next-page">recommendations</p>
                            <i className="fas fa-chevron-right"></i>
                        </Link>

                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Portfolio));
