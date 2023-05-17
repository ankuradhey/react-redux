import { createStore } from './node_modules/redux/es/redux.mjs';

const countReducer = (state = {counter: 0}, action) => {
    const { type } = action;
    if(type === 'increment'){
        return {counter: state.counter + 1};
    } else if(type === 'decrement'){
        return {counter: state.counter - 1}
    }
    return state;
}

const store = createStore(countReducer);
const counterElement = document.getElementById('counter');

document.getElementById('incrementCounter').addEventListener('click', () => {
    store.dispatch({type: 'increment'});
});
document.getElementById('decrementCounter').addEventListener('click', () => {
    store.dispatch({type: 'decrement'});
});

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    counterElement.innerHTML = state.counter;
});

store.dispatch({type:''});