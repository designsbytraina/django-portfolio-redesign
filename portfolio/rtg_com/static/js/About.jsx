import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="about" className="row subsection-dividers">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="section-heading">hi there
                          <a className="next-page btn" role="button" href="#technologies"><img src="../../static/img/tech-code.png" className="my-icons" /> tools</a>
                  </h3>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 offset-lg-1 offset-md-1 offset-sm-1 about-text">
                    <p><br className="d-none d-lg-block d-xl-block" />I am a Full Stack Software Engineer in the SF Bay Area who brings holistic development and functional beauty to applications. With professional experience in the music, retail, political and tech industries, I strive to be the Swiss Army Knife in any situation.</p>

                    <p>In my free time, I love to learn, empower others to pursue STEM and dive deep into the problems of tomorrow.</p>

                    <p>Let's make something together!</p>
                    <br />
                    <h6><img src="../../static/img/about-white.png" className="my-icons" /> Why Designs by Traina?</h6>
                    <p>My grandfather, Vincent Traina, made bespoke signs for local businesses (+ painted merry-go-rounds) in the SF Bay Area under the moniker of Signs by Traina. His lore will always be an inspiration.</p>
                </div>
                <div className="d-none d-sm-block col-sm-2 col-md-2 col-lg-2">
                    <img src="../../static/img/rtg-portrait.jpg" className="img-fluid" id="about-portrait" alt="Rachel Traina-Grandon portrait" />
                </div>
              </div>
          </div>
        );
    }
}
