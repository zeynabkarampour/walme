import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose } from 'redux';
// import thunk from 'redux-thunk';
import reduxThunk from 'redux-thunk';

//  const store= createStore(reducers , applyMiddleware(thunk));

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(reduxThunk))
 );


ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.querySelector('#root')
);