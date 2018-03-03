import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-toggleable-xs navbar-inverse fixed-top">
              <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">designs by traina</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item" id="about-link">
                    <a className="nav-link" href="/about"><img src="./static/img/about-white.png" className="my-icons" /> about</a>
                  </li>
                  <li className="nav-item" id="tech-link">
                    <a className="nav-link" href="/technologies"><img src="./static/img/tech-code.png" className="my-icons" /> technologies</a>
                  </li>
                  <li className="nav-item" id="projects-link">
                    <a className="nav-link" href="/projects"><img src="./static/img/projects-white.png" className="my-icons" /> projects</a>
                  </li>
                  <li className="nav-item" id="resume-link">
                    <a className="nav-link" href="/resume"><img src="./static/img/resume-white.png" className="my-icons" /> r&eacute;sum&eacute;</a>
                  </li>
                  <li className="nav-item" id="contact-link">
                    <a className="nav-link" href="/contact"><img src="./static/img/contact-white.png" className="my-icons" /> contact</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
        );
    }
}
