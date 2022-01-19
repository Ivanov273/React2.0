import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Readux/State'
//import {subscribe} from "./Readux/State";
let render = (state)=> {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    )
}
render(store.getState())

store.setState(render)
//let state = store.getState()
//store.setState(render)
//store.setState(rerenderState)
//store.getState()
//console.log(store)
//console.log(store.subscribe(rerenderState))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

