import React, { Component } from 'react';
import './Recommend.css';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";



class Recommend extends Component {
    render() {
        return (
            <div className="Recommend">
                <div className="Recommend-content">
                    <h1 className="Recommend-title">My Recommendations</h1>
                 <ul>
                        <li><p>"Xavier is a great team member to have on a group project. His knowledge of SQL and Node really came in handy while building our CMS application. Xavier plans well, makes good use of time, is easy going and is fun to be around."</p><br/><p>-Logan Simonsen API Support Engineer at EasyPost</p></li>
                 </ul>
                </div>
                <div className="prev">
                    <Link to={"/portfolio"}>
                        <p id="last-page">portfolio</p>
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                </div>
                <div className="next">
                    <Link to={"/contact"}>
                        <p id="next-page">recommendations</p>
                        <i className="fas fa-chevron-right"></i>
                    </Link>

                </div>
            </div >
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Recommend));
