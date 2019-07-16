import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
    if (props.location.pathname.startsWith("/s/stays")) {
        return (
            <div>                
            </div>
        )
    }
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="column">
                    <h2 className="column-header">
                        Technologies
                    </h2>
                    <ul>
                        <li>Javascript</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="column-header">
                        Developers
                    </h2>
                    <ul>
                        <li>Christie Brandao</li>
                        <li>April Graves</li>
                        <li>Charles Mancuso</li>
                        <li>Zachary Oliver</li>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="column-header">
                        Description
                    </h2>
                    <p>This is a full-stack clone of AirBnB created in one week.</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer);