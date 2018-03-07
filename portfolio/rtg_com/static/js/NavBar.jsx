import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
        <div className="container-fluid">
            <nav className="navbar navbar-toggleable-xs navbar-light fixed-top" id="navbar-top" style={{ backgroundColor: 'rgba(230, 194, 239,.9)'}}>
              <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#" style={{color:'dimgrey'}}>designs by traina</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item" id="about-link">
                    <a className="nav-link" href="#about">about</a>
                  </li>
                  <li className="nav-item" id="tech-link">
                    <a className="nav-link" href="#technologies">technologies</a>
                  </li>
                  <li className="nav-item" id="projects-link">
                    <a className="nav-link" href="#projects">projects</a>
                  </li>
                  <li className="nav-item" id="resume-link">
                    <a className="nav-link" href="#resume">r&eacute;sum&eacute;</a>
                  </li>
                  <li className="nav-item" id="contact-link">
                    <a className="nav-link" href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
        );
    }
}
