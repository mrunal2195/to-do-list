import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Reducer from './reducers/reducer'
import './index.css';
import * as serviceWorker from './serviceWorker';
import List from './components/List';
import Video from './components/video';
import rootSaga from './reducers/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleWare = createSagaMiddleware()

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleWare)
)

const Store = createStore(Reducer, { list: []}, enhancer)

sagaMiddleWare.run(rootSaga)

ReactDOM.render(
    <Provider store={Store}>
       <List /> 
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
