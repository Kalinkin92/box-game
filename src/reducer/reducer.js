import React from 'react';
import {
    HELLO_WORLD
} from '../actions/actions'

const initialState = {
    msg: '',
    fieldMap: [...new Array(8)].map((itemRow, indexRow) => {
        return [...new Array(8)].map((item, index) => (
            {
                type: 'empty',
                content: `${indexRow}.${index}`,
                // template: <div className="cell">{index1}.{index2}</div>
            })
        )
    })
};

/*
    types

    block
    player
    box
    empty
    target
    none

 */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return {
                ...state,
                msg: action.payload
            };
        default:
            return state
    }
};

export default reducer;