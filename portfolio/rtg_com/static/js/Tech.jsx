import React from 'react';

export default class Tech extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="technologies" className="row subsection-dividers">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="section-heading hidden-md-down d-none d-sm-none d-md-block d-lg-block">technologies
                      <a className="next-page btn" role="button" href="#projects"><img src="../../static/img/projects-white.png" className="my-icons" /> projects</a>
                  </h3>
                  <h3 className="section-heading hidden-lg-up d-block d-sm-block d-md-none d-lg-none">tools
                      <a className="next-page btn" role="button" href="#projects"><img src="../../static/img/projects-white.png" className="my-icons" /> projects</a>
                  </h3>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <ul className="tech-list">
                      <li className="tech-list-header">Languages</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Python</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">JavaScript</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">HTML5</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">CSS3</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">SQL</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">Bash</li>
                  </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <ul className="tech-list">
                      <li className="tech-list-header">Frameworks</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Flask</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 3/5</strong></span>">Django</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">React</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">jQuery</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">Node</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">Express</li>
                  </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                  <ul className="tech-list">
                      <li className="tech-list-header">Data Stores</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">PostgreSQL</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">Redis</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 3/5</strong></span>">SQLite</li>
                      <li className="tech-list-header">Interaction</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 3/5</strong></span>">Web Sockets</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">AJAX</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Bootstrap</li>
                      
                  </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                  <ul className="tech-list">
                      <li className="tech-list-header">Deployment</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Heroku</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 3/5</strong></span>">AWS</li>
                      <li className="tech-list-header">OS</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 4/5</strong></span>">Linux</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">macOS (OS X)</li>
                  </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                  <ul className="tech-list">
                      <li className="tech-list-header">Tools</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Git</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">GitHub</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">BitBucket</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 5/5</strong></span>">Atlassian Suite</li>
                      <li className="tech-list-item" data-toggle="tooltip" data-placement="right" data-html="true" title="<span style='color: rgba(78, 173, 146, 1);'><strong>XP 3/5</strong></span>">Docker</li>
                  </ul>
              </div>

              <div className="hidden-lg-down col-xl-2"></div> 
              
          </div>
        );
    }
}
