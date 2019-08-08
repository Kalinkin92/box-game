import React from 'react';

const drawMap = (fieldMap) => {
    return [...fieldMap].map((itemRow, indexRow) => {
        return (
            <div className="row" key={indexRow}>
                {[...itemRow].map(({type, content}, index) => <div className="cell" key={index}>{content}</div>)}
            </div>
        )
    })
};

const elements = (payload) => ({
    player: <div className="player"></div>,
    block: {
        content: (<div className="block"></div>)
    },
    target: {
        content: (<div className="target"></div>)
    },
    box: {
        content: (<div className="box"></div>)
    },
    empty: {
        content: payload
    }
});

//todo Временная карта, чтобы проверить отображение элементов

const getRandomPosition = (max) => {
    return ({
        indexRow: Math.floor(Math.random() * max),
        index: Math.floor(Math.random() * max)
    });
};

const checkPosition = (map, position) => {
    const {indexRow, index} = position;
    const max = map.length - 1;

    return map[indexRow][index].type === 'empty' ? position : checkPosition(map, getRandomPosition(max));
};

let map = [...new Array(8)].map((itemRow, indexRow) =>
    [...new Array(8)].map((item, index) =>
        ({
            type: 'empty',
            content: `${indexRow}.${index}`,
        })
    )
);

let max = map.length - 1;

// console.log(map);
map[0] = map[0].map((itemRow, index) => ({type: 'block', content : <div className="block"></div>}));
map[max] = map[max].map((itemRow, index) => ({type: 'block', content : <div className="block"></div>}));
map = map.map((itemRow, index) => itemRow.map((item, index) => (index === 0 || index === max) ? ({type: 'block', content : <div className="block"></div>}) : item));

let position = checkPosition(map, getRandomPosition(max));
map[position.indexRow][position.index] = ({type: 'player', content : <div className="player"></div>})

export {
    map,
    drawMap
}
