import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './hoc/ScrollToTop'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/RootReducer";
import thunk from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
