import { elements } from '../lib';

const playerMoveHandler = ({fieldMap, playerPosition: {indexRow, index}, key}) => {
    //считаем новую точку игрока
    const newPosition = getNewPosition({indexRow, index}, key, fieldMap.length - 1);

    //проверка новой точки игрока, на возможность перемещения
    if (!checkNewPosition(fieldMap, newPosition)) return {fieldMap, playerPosition: {indexRow, index}};

    // где был игрок рисуем пусто
    fieldMap[indexRow][index] = elements(`${indexRow}.${index}`).empty;

    // рисуем игрока в новой точке
    fieldMap[newPosition.indexRow][newPosition.index] = elements().player;

    return {fieldMap: fieldMap, playerPosition: newPosition};

};

const getNewPosition = ({indexRow, index}, key, max) => {
    const inc = (index) => index + 1 > max ? max : index + 1;
    const dec = (index) => index - 1 < 0 ? 0 : index - 1;

    switch (key) {
        case 'ArrowDown': return ({indexRow: inc(indexRow), index});
        case 'ArrowUp': return ({indexRow: dec(indexRow), index});
        case 'ArrowRight': return ({indexRow, index: inc(index)});
        case 'ArrowLeft': return ({indexRow, index: dec(index)});
        default: return {indexRow, index};
    }
};

const checkNewPosition = (map, {indexRow, index}) => {
    switch (map[indexRow][index].type) {
        case 'empty': return true;
        default: return false
    }
};

export {
    playerMoveHandler
}