import React, { Component } from 'react';
import Field from '../field';
import Header from '../header';

import './app.css';

class App extends Component {

    render() {
        return (
            <div className="app" >
                <Header />
                <Field />
            </div>

        );
    };
}

export default App;