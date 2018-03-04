import React from 'react';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="resume" className="row subsection-dividers">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="section-heading">resume
                      <a className="next-page btn" role="button" href="/contact"><img src="../../static/img/contact-white.png" className="my-icons" /> contact</a>

              </h3>
              </div>

              <div className="col-lg-2 hidden-md-down"></div>
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-6 about-text">
                  <h4 id="resume-heading">Rachel Traina-Grandon</h4>
                  <p>Full Stack Software Engineer with previous experience in Product Management + UI/UX</p>
                  <div className="hidden-md-down"> 
                      <br />
                  </div>
                  <a href="../../static/img/Traina-Grandon_Resume_2017-c.pdf" className="card-link github-link" id="download-button">Download CV</a>
              </div>
              <div className="hidden-sm-down col-md-3 col-lg-2">
                  <img src="../../static/img/resume-preview.png" className="img-fluid" id="resume-preview" alt="Rachel Traina-Grandon resume" />
              </div>
              <div className="col-lg-2 hidden-md-down"></div>
          </div>
        );
    }
}
