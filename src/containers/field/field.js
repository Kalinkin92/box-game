import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHello } from '../../actions/actions';
import { drawMap } from '../../lib';

import './field.css';



class Field extends Component {

    componentDidMount() {
        this.props.fetchHello('HELLO FROM componentDidMount(1)!')
    }

    render() {
        const { fieldMap } = this.props;

        return (
            <div className="field">
                {drawMap(fieldMap).map((item) => item)}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { fieldMap } = state;
    return {
        fieldMap
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHello: (msg) => dispatch(fetchHello(msg))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);