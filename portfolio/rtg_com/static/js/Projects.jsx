import React from 'react';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="projects" className="row subsection-dividers">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="section-heading">Projects
                          <a className="next-page btn" role="button" href="/resume"><img src="../../static/img/resume-white.png" className="my-icons" /> r&eacute;sum&eacute;</a>
                  </h3>
              </div>
              <div className="card-deck">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">
                      <div className="card">
                          <div className="card-block">
                              <h4 className="card-title">should i wear a jacket?</h4>
                              <p className="card-text">An application built with another instructor as an example for students to reference in the Hackbright Part-Time Program. It uses Python, Flask, HTML and CSS to illustrate computer science fundamentals, including APIs, modules and requests.</p>
                          </div>
                          <img className="card-img-top img-fluid" id="project-gif" src="../../static/img/wear-jacket.gif" alt="should i wear a jacket gif" />
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item card-list">Built With | Python, HTML, CSS, Flask, Jinja2, AccuWeather API</li>
                          </ul>
                          <div className="card-block">
                              <a href="https://github.com/designsbytraina/flask-weather-app" className="card-link github-link">GitHub</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">
                      <div className="card">
                          <div className="card-block">
                              <h4 className="card-title">parl&eacute; lune</h4>
                              <p className="card-text">A chat application for dreamers built with Node, Express, and Socket.io. <br /><br />This project is temporarily on hold and more features (+ deployment) will be added soon.</p>
                          </div>
                          <img className="card-img-top img-fluid" id="project-gif" src="../../static/img/parle-lune.gif" alt="parlé lune gif" />
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item card-list">Built With | Node.js, Express.js, HTML, CSS, JavaScript, Socket.io, Redis, additional TBD</li>
                          </ul>
                          <div className="card-block">
                              <a href="https://github.com/designsbytraina/parle-lune" className="card-link github-link">GitHub</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">
                      <div className="card">
                          <div className="card-block">
                              <h4 className="card-title">pok&eacute;see pok&eacute;do</h4>
                              <p className="card-text">A companion application for Pok&eacute;mon GO which allows users to plan an optimized route for catching Pok&eacute;mon, while visiting local points of interest and having fun with friends. As the user traverses zir path, Pok&eacute;mon can be marked as 'caught' and added to zir collection of Pok&eacute;mon, which can later be accessed from the user's profile page.<br /><br />
                                  <a href="https://pokeseepokedo.herokuapp.com" className="card-link github-link">View Demo</a>
                              </p>
                          </div>
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Z_xZIh555r0" allowfullscreen></iframe>
                          </div>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item card-list">Built With | Python, JavaScript, jQuery, HTML, CSS, SQLAlchemy, PostgreSQL, Flask, Jinja, Bootstrap, Google Maps API, Yelp API</li>
                          </ul>
                          <div className="card-block">
                              <a href="https://github.com/designsbytraina/pokeseepokedo" className="card-link github-link">GitHub</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">
                      <div className="card">
                          <div className="card-block">
                              <h4 className="card-title">tic-tac-toe</h4>
                              <p className="card-text">A command line interface for Tic-Tac-Toe written in Python.</p>
                          </div>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item card-list">Built With | Python</li>
                          </ul>
                          <div className="card-block">
                              <a href="https://github.com/designsbytraina/python-tictactoe" className="card-link github-link">GitHub</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">
                      <div className="card">
                          <div className="card-block">
                              <h4 className="card-title">this portfolio</h4>
                              <p className="card-text">This site was made with Flask + Love and deployed to Heroku.</p>
                          </div>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item card-list">Built With | Python, Flask, Jinja, Bootstrap, Heroku</li>
                          </ul>
                          <div className="card-block">
                              <a href="https://github.com/designsbytraina/designsbytraina" className="card-link github-link">GitHub</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
