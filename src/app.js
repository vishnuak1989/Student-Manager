import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/configureStore'
import { startSetStudents } from './actions/students'
import {firebase} from './firebase/firebase'
import {login, logout} from './actions/auth'
import './firebase/firebase'
import LoadingPage from './components/LoadingPage'
const store = configureStore();
const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);
let hasRendered = false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetStudents()).then(()=>{
            renderApp();
            if(history.location.pathname ==="/"){
                history.push("/dashboard")
            }
            
        });
        
    }
    else
    {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})