import {
    HELLO_WORLD
} from '../actions/actions'

const initialState = {
    msg: ''
};

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