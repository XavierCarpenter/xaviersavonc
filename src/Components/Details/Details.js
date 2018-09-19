import React, { Component } from 'react';
import './Details.css';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";



class Details extends Component {
    constructor() {
        super();
        this.state = {
            project: "",
            tools: "",
        };
    }
    componentDidMount() {
        // this.setState({projects: this.props.projects});

        let current = this.props.projects && this.props.projects.filter((obj, i) => {
            if (obj.name === this.props.match.params.id) {
                return obj
            }
        })
        this.setState({ project: current });
        this.setState({})

    }
    render() {
        let list = this.state.project && this.state.project.map((obj, i) => obj.tools)
        let listItems = list && list.map((num, i) => {
        return (
            <ul className="tools-list">
            <li>{num[0]}</li>
            <li>{num[1]}</li>
            <li>{num[2]}</li>
            <li>{num[3]}</li>
            <li>{num[4]}</li>
            <li>{num[5]}</li>
            {/* <li>{num[6]}</li>
            <li>{num[7]}</li>
            <li>{num[8]}</li>
            <li>{num[9]}</li> */}
            </ul>

        );
        })
        let project = this.state.project && this.state.project.map((obj, i) => {
            return (
                <div className="details-content" key={i}>
                    <h1 className="name">{obj.name}</h1>
                    <p className="desc">{obj.description}</p>
                    <div className="links">
                        <button className="website-btn">View Website</button>
                        <i class="fab fa-github-square"></i>
                    </div>
                    <img src={obj.image} />
                    <div className="project-details-box">
                    <h1 className="project-details-title">About this project</h1>
                    <p>Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.</p>
                    <br/>
                    <p>At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.</p>
                    </div>
                    <h1 className="tools-title">Technologies Used</h1>
                    {listItems}

                </div>
            );
        })
        console.log(list)
        console.log(listItems)        
        return (
            <div className="Details">
                <Link to={"/portfolio"}>
                <h1 className="back-to-portfolio">Back To Portfolio</h1>
                </Link>
                {project}
                <div className="letsTalk">
                    <h1>Let's Talk</h1>
                    <p>Wanna get in touch or talk about a project?
Feel free to contact me via email at
xavier.carpenter16@gmail.com
or drop a message on Linkedin</p></div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Details));

