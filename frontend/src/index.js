import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'components/stylesheets/main.css';
import 'components/stylesheets/display.css';
import { store } from './store/index'
import App from './App'
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