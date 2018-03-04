import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div id="home" className="jumbotron jumbotron-fluid row subsection-dividers">
            <div className="container">
              <h1 className="display-3">rachel traina-grandon</h1>
              <p className="lead">software engineer</p>
                  <a className="btn" role="button" id="learn-more-btn" href="/about">about me</a>
            </div>
          </div>
        );
    }
}
