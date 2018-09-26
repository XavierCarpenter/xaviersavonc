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
                 <ul className="recomendations">
                        <li><p className="text-body">"Xavier is a great team member to have on a group project. His knowledge of SQL and Node really came in handy while building our CMS application. Xavier plans well, makes good use of time, is easy going and is fun to be around."</p><p className="text-author">-Logan Simonsen API Support Engineer at EasyPost</p></li>
                        <li><p className="text-body">"Xavier is a strong Javascript developer with an even stronger work ethic. Xavier from the first day I met him was looking for opportunities to get ahead and gain more experience interfacing with the development cycle. Any team would be lucky to have Xavier on it because he brings such a unique approach to each and every problem."</p><p className="text-author">-Hayden Manning JavaScript Engineer at THINaër</p></li>
                        <li><p className="text-body">"In the time that I have known Xavier he has demonstrated qualities which make it my sincere pleasure to recommend him for a position in web development. Anyone can write code - not everyone brings confidence, enthusiasm for learning, strong communication, and leadership to a team. Xavier exhibits these qualities and more, immediately apparent upon meeting him. I highly recommend Xavier for a position in any organization for both his outstanding technical ability and professional character.</p><p className="text-author">-John Fisher Software Engineer</p></li>
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
                        <p id="next-page">contact</p>
                        <i className="fas fa-chevron-right"></i>
                    </Link>

                </div>
            </div >
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Recommend));
