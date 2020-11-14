import {
  CHANGE_LOCALE,
  HIDE_ALERT,
  SHOW_ALERT,
  TOGGLE_THEME,
  SHOW_LOADER,
  HIDE_LOADER,
} from '../types';

const initialState = {
  loader: false,
  alert: false,
  locale: 'en',
  theme: 'light',
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: false };
    case SHOW_LOADER:
      return { ...state, loader: action.payload };
    case HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
};
