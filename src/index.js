import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import configureStore from './store/configureStore'
import { startGetUsers } from './actions/usersActions'

const store = configureStore()

store.dispatch(startGetUsers())



ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root')
);


