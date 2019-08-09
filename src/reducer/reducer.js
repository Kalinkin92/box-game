import React from 'react';
import { map, playerPosition } from '../lib';

import {
    PLAYER_MOVE
} from '../actions/actions'

const initialState = {
    msg: '',
    fieldMap: map,
    playerPosition
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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