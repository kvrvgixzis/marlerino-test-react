import { combineReducers } from 'redux';
import { applications } from './reducers/applications';
import { offers } from './reducers/offers';
import { app } from './reducers/app';

export const root = combineReducers({ applications, app, offers });
