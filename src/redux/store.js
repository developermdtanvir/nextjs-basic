const { createStore } = require("redux");
const { counterReducer } = require("./counter/counterReducer");

const store = createStore(counterReducer);

export default store;
