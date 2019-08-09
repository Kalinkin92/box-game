import store from '../store';
import { elements } from '../lib';
import { playerMove } from '../actions/actions';

const playerMoveHandler = (map, {indexRow, index}, key) => {
    const newPosition = getNewPosition({indexRow, index}, key, map.length - 1);
    if (checkNewPosition(map, newPosition)) {
        //todo content: elements({indexRow, index}).empty заменить это говно
        map[indexRow][index] = {type: 'empty', content: elements({indexRow, index}).empty};
        map[newPosition.indexRow][newPosition.index] = elements().player;
        store.dispatch(playerMove({fieldMap: map, newPosition}));
    }
};

const getNewPosition = ({indexRow, index}, key, max) => {
    const inc = (index) => index + 1 > max ? max : index + 1;
    const dec = (index) => index - 1 < 0 ? 0 : index - 1;

    switch (key) {
        case 'ArrowDown': return ({indexRow: inc(indexRow), index});
        case 'ArrowUp': return ({indexRow: dec(indexRow), index});
        case 'ArrowRight': return ({indexRow, index: inc(index)});
        case 'ArrowLeft': return ({indexRow, index: inc(index)});
        default: return {indexRow, index};
    }
};

const checkNewPosition = (map, {indexRow, index}) => {
    switch (map[indexRow][index].type) {
        case 'empty': return true;
        // case 'box': return true;
        default: return false
    }
};

export {
    playerMoveHandler
}