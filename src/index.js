import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';


import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';

const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
   ,
    document.getElementById('root')
);
