import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchHello } from '../../actions/actions';
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

/*const mapStateToProps = (state) => {
    const { msg } = state;
    return {
        msg
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHello: (msg) => dispatch(fetchHello(msg))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/

export default App;