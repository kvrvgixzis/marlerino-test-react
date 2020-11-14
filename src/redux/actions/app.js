import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from '../types';

export const showLoader = () => ({ type: SHOW_LOADER });

export const hideLoader = () => ({ type: HIDE_LOADER });

export const showAlert = (alert) => (dispatch) => {
  dispatch({ type: SHOW_ALERT, payload: alert });
  setTimeout(() => {
    dispatch(hideAlert());
  }, 2000);
};

export const hideAlert = () => ({ type: HIDE_ALERT });
