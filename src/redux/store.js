// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';

// const store = createStore(reducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: reducer,
});

export default store;
