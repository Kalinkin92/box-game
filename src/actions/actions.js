const
    HELLO_WORLD = 'HELLO_WORLD',
    PLAYER_MOVE = 'PLAYER_MOVE';

const fetchHello = (msg) => ({
    type: HELLO_WORLD,
    payload: msg
});

const playerMove = ({fieldMap, playerPosition}) => ({
    type: PLAYER_MOVE,
    payload: {fieldMap, playerPosition}
});

export {
    HELLO_WORLD,
    PLAYER_MOVE,
    fetchHello,
    playerMove
}