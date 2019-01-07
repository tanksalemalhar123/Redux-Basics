/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/


/*The first thing is creating a store*/
import {createStore} from 'redux';


/*Here reducer takes the action and dispatches in the application */
const reducer = (state,action) => {
    switch (action.type){
        case "ADD":
        state= state + action.payload;
        break;
        case "SUBSTRACT":
        state= state - action.payload;
        break;
        default: 
        console.log("Wrong Choice");
    }
    return state;
    
};

/*createStore contains two parameter , one is the reducer which 
has the actions and the initial state which was set to 1*/

const store= createStore(reducer,11);  // 1 defines the initial state


store.subscribe(() => {
console.log("Store Updated",store.getState());
});

/*As the name suggets it triggers the state change and dispatches an 
action*/
store.dispatch({
    type:"ADD",
    payload: 100
})

//We can use dispatch multiple times

store.dispatch({
    type:"ADD",
    payload: 20
})

store.dispatch({
    type:"SUBSTRACT",
    payload: 50
})

store.dispatch({
    type:"SUBSTRACT",
    payload: 30
})
