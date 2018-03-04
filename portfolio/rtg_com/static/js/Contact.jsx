import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="contact" className="row subsection-dividers d-flex align-items-stretch">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="section-heading">contact
                          <a className="next-page btn" role="button" href="/">back</a>
                  </h3>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 about-text">
                  <p>
                      designsbytraina |<a href="https://github.com/designsbytraina" className="card-link github-link" id="contact-me">GitHub</a>
                      <br />
                      @designsbytraina |<a href="https://twitter.com/designsbytraina" className="card-link github-link" id="contact-me">Twitter</a>
                      <br />
                      connect |<a href="https://www.linkedin.com/in/racheltrainagrandon" className="card-link github-link" id="contact-me">LinkedIn</a>
                  </p>
              </div>
              <div className="typeform-widget col-lg-6 col-xs-12 col-sm-12 col-md-12" id="typeform-contact" data-url="https://rachel551.typeform.com/to/KIcljG"></div><div><a href="https://www.typeform.com/examples/forms/contact-form-template/?utm_campaign=KIcljG&amp;utm_source=typeform.com-5796311-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-contactform&amp;utm_term=EN" target="_blank"></a></div>
          </div>
        );
    }
}
