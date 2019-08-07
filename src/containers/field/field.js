import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHello } from '../../actions/actions';

import './field.css';

// let fieldMap = new Array(8);
// fieldMap.fill([]);
// const fieldMap = [...new Array(8)].map((item, index1) => {
//     // item = new Array(8);
//     // item.fill(<div className="cell"></div>);
//     return (
//         <div className="row">
//             {[...new Array(8)].map((item, index2) => <div className="cell">{index1}.{index2}</div>)}
//         </div>
//
//     )
//     // item = item.ma
// });

const drawMap = (filedMap) => {
    return [...filedMap].map((itemRow, indexRow) => {
        return (
            <div className="row" key={indexRow}>
                {[...itemRow].map((item, index) => {
                    return (<div className="cell" key={index}>{item.content}</div>)
                })}
            </div>
        )
    })
};

class Field extends Component {

    componentDidMount() {
        this.props.fetchHello('HELLO FROM componentDidMount(1)!')
    }

    render() {
        const { fieldMap } = this.props;
        console.log(fieldMap);

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