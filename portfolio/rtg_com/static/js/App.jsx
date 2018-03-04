import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Tech from './Tech';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <Welcome />
                <About />
                <Tech />
                <Projects />
                <Resume />
                <Contact />
            </div>
        </div>
        );
    }
}




ReactDOM.render(<App />, document.getElementById('main'));