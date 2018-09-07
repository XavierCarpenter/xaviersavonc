import React, { Component } from 'react';
import './Details.css';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";



class Details extends Component {
    constructor(){
        super();
        this.state = {
            project: "",
            currentProject: ""
        };
    }
    componentDidMount(){
        // this.setState({projects: this.props.projects});
        
        let current = this.props.projects && this.props.projects.filter((obj, i) => {
            if (obj.name === this.props.match.params.id) {
                return obj
            }
        })
        this.setState({project: current});

    }
    render() {
        console.log(this.state.project[0])
        let project = this.state.project && this.state.project.map((obj, i) => {
            <div key={i}>
            <h1>{obj.name}</h1>
            </div>
        })
        return (
            <div className="Details">
                <div className="Details-content">
               {project}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Details));

