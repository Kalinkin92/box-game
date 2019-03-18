const HELLO_WORLD = 'HELLO_WORLD';

const fetchHello = (msg) => ({
    type: HELLO_WORLD,
    payload: msg
});

export {
    HELLO_WORLD,
    fetchHello
}