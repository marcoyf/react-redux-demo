// command to install Redux: npm install --save redux

// this file redux-basics.js doesn't have any React code, just to show that Redux is independent of React
// it will be executed with Node.js: node redux-basics.js

// Redux manages the state (*similarly* to a regular JavaScript global variable)
// Redux is a third-party library, it works totally independent of React
// however, we can integrate Redux with React

// When to use Redux based on the type of State:
// Local UI State (show/hide backdrop, opening modal): Redux is not needed, mostly handled within components
// Persistent State (users, posts, orders): Redux is a good choice
// Client State (is the user authenticated?, filters set by the user): you definitely use Redux in this case

// Central Store: there's a single central store in each Redux application
// it stores the entire application state

// React Component: wants to manipulate or get the current application state, but it doesn't do that by directly accessing the Central Store
// if it did accessed it directly, it would be pretty hard identify which component modified the state (hard as a regular JavaScript global variable)
// Redux provides a clearly defined process of how the state may change

// Action: is dispatched from a Component and is just an information package (possibly with payload)
// it doesn't reach/change the Central Store, doesn't have any logic, it is just a messenger

// Reducer: The Action reaches the Reducer. The Reducer is directly connected to the Central Store, thus can modify it
// it's just a pure funcion which receives the Action and the old state as input and then outputs an updated state
// it has to execute synchronous code only (no side-effects)
// with Redux, there's only one single Reducer, however there's an utility method used to combine multiple Reducers into one (see index.js)

// Subscription: used to get the updated state back to the Component
// the Central Store triggers all the Subscriptions whenever the state changes
// the Component can subscribe to Central Store updates and then it receives that update automatically
// the Component is notified whenever the state changes

// this is Node.js syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
// assigning a default value if state is undefined
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());