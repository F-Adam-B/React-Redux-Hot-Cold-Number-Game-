import {createStore} from 'redux';


import reducer, { hotReducer } from './reducers';

export default createStore(hotReducer);

