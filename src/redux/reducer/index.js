import {combineReducers} from '@reduxjs/toolkit';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {contactReducer} from './newcontact';

const rootReducer = combineReducers({
  globalReducer,
  homeReducer,
  contactReducer,
});

export default rootReducer;
