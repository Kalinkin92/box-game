import { playerMoveHandler } from '../handlers';

const
    PLAYER_MOVE = 'PLAYER_MOVE';


const playerMove = ({fieldMap, playerPosition, key}) => ({
    type: PLAYER_MOVE,
    payload: playerMoveHandler({fieldMap, playerPosition, key})
});

export {
    PLAYER_MOVE,
    playerMove
}