import React from 'react';
import { map } from '../lib';

import {
    HELLO_WORLD,
    PLAYER_MOVE
} from '../actions/actions'

const initialState = {
    msg: '',
    fieldMap: map,
    playerPosition: {
        indexRow: 3,
        index: 4
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return {
                ...state,
                msg: action.payload
            };
        case PLAYER_MOVE:
            const {fieldMap, playerPosition} = action.payload;
            return {
                ...state,
                fieldMap,
                playerPosition
            };
        default:
            return state
    }
};

export default reducer;