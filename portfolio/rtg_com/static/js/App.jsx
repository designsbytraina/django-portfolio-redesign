import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

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
        </div>
        );
    }
}




ReactDOM.render(<App />, document.getElementById('main'));