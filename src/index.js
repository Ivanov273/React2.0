import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Readux/redux-store'
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
//import {subscribe} from "./Readux/State";
let renderState = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store} >
        <App    />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderState(store.getState())

store.subscribe(()=>{

   let state =  store.getState()
    renderState(state)
})
//let state = store.getState()
//store.setState(render)
//store.setState(rerenderState)
//store.getState()
//console.log(store)
//console.log(store.subscribe(rerenderState))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

