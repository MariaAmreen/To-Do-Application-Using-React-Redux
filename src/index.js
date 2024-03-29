import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
let store = createStore(reducers);



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>

    , document.getElementById('root'));
serviceWorker.unregister();
