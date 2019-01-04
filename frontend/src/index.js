import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/stylesheets/main.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { store } from './store/index'
import App from './App'
import {LogInContainer} from "./containers/containers";
import { Provider } from 'react-redux'



window.store = store
window.React = React
const render = () =>
        ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
            document.getElementById('root'));

store.subscribe(render)
render()