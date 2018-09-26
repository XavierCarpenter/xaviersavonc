import React, { Component } from 'react';
import './Contact.css';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";



class Contact extends Component {
    render() {
        return (
            <div className="Contact">
            <div className="contact-content">
                <h1 className="contact-title">Get In Touch</h1>
                    <p>If you wanna get in touch, and talk to me about an oppurtunity or just say hi,
feel free to shoot me a message on linkedin or send an email to 
xavier.carpenter16@gmail.com and ~let's talk.</p>
                </div>
                    <div className="prev">
                        <Link to={"/recommendations"}>
                            <p id="last-page">recommendations</p>
                            <i className="fas fa-chevron-left"></i>
                        </Link>

                    </div>
            </div >
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, )(Contact));
