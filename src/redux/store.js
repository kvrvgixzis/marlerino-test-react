import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { root } from './rootReducer';

export const store = createStore(root, applyMiddleware(thunk));
