import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHello } from '../../actions/actions';
import { drawMap } from '../../lib';
import { playerMoveHandler } from '../../handlers';

import './field.css';

class Field extends Component {

    handleKeyPress({key}) {
        const { fieldMap, playerPosition } = this.props;
        // console.log(fieldMap, playerPosition )
        playerMoveHandler(fieldMap, playerPosition, key);
    }

    componentDidMount() {
        this.props.fetchHello('HELLO FROM componentDidMount(1)!')
    }

    render() {
        const { fieldMap } = this.props;

        return (
            <div className="field" tabIndex="0" onKeyDown={this.handleKeyPress.bind(this)}>
                {drawMap(fieldMap).map((item) => item)}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { fieldMap, playerPosition } = state;
    return {
        fieldMap,
        playerPosition
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHello: (msg) => dispatch(fetchHello(msg))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);