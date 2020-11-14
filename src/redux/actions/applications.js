import { apiGetApplications } from '../../api/applications';
import { FETCH_APPLICATIONS } from '../types';
import { hideLoader, showAlert, showLoader } from './app';

export const fetchApplications = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const applications = await apiGetApplications();
    !applications && dispatch(showAlert('Error applications loading'));
    console.log('applications: ', applications);
    applications &&
      dispatch({ type: FETCH_APPLICATIONS, payload: applications });
    dispatch(hideLoader);
  };
};
