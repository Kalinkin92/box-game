import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHello } from '../../actions/actions';

class Field extends Component {

    componentDidMount() {
        this.props.fetchHello('HELLO FROM componentDidMount()!')
    }

    render() {
        return (
            <div > {this.props.msg} </div>
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