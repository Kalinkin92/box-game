import { elements } from '../lib';
import React, { Component } from 'react';

const playerMoveHandler = ({fieldMap, playerPosition: {indexRow, index}, key}) => {
    const newPosition = getNewPosition({indexRow, index}, key, fieldMap.length - 1);
    console.log(`playerMoveHandler`,newPosition);
    if (checkNewPosition(fieldMap, newPosition)) {
        //todo content: elements({indexRow, index}).empty заменить это говно
        fieldMap[indexRow][index] = elements(`${indexRow}.${index}`).empty;
        fieldMap[newPosition.indexRow][newPosition.index] = elements().player;
        console.log(fieldMap);
        return {fieldMap: fieldMap, playerPosition: newPosition};
        // store.dispatch(playerMove({fieldMap: map, newPosition}));
    } else {
        return {fieldMap, playerPosition: {indexRow, index}}
    }

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
        // case 'box': return true;
        default: return false
    }
};

export {
    playerMoveHandler
}