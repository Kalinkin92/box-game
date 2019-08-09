import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHello } from '../../actions/actions';

import './header.css';

class Field extends Component {

    componentDidMount() {
        this.props.fetchHello('HELLO FROM componentDidMount(1)!')
    }

    render() {
        return (
            <div className="header">
                {/*<h4>WELCOME TO THE GAME</h4>*/}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Field);