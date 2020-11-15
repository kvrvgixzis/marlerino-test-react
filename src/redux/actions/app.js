import {
  CHANGE_LOCALE,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  TOGGLE_THEME,
} from '../types';

export const showLoader = () => ({ type: SHOW_LOADER });

export const hideLoader = () => ({ type: HIDE_LOADER });

export const showAlert = (alert) => (dispatch) => {
  dispatch({ type: SHOW_ALERT, payload: alert });
  setTimeout(() => {
    dispatch(hideAlert());
  }, 2000);
};

export const hideAlert = () => ({ type: HIDE_ALERT });

export const changeLocale = (locale) => ({
  type: CHANGE_LOCALE,
  payload: locale,
});

export const toggleTheme = () => (dispatch) => {
  document.querySelector('body').classList.toggle('theme-dark');
  dispatch({ type: TOGGLE_THEME });
};
