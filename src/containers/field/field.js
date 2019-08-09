import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerMove } from '../../actions/actions';
import { drawMap } from '../../lib';

import './field.css';

class Field extends Component {

    handleKeyPress({key}) {
        const { fieldMap, playerPosition, playerMove } = this.props;
        // console.log(fieldMap, playerPosition )
        playerMove({fieldMap, playerPosition, key});
    }

    componentDidMount() {
        // this.props.fetchHello('HELLO FROM componentDidMount(1)!')
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
        playerMove: (data) => dispatch(playerMove(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);