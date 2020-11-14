import { apiGetNetworks, apiGetOffers } from '../../api/offers';
import {
  CREATE_NETWORK,
  CREATE_OFFER,
  FETCH_NETWORKS,
  FETCH_OFFERS,
} from '../types';
import { hideLoader, showAlert, showLoader } from './app';

export const fetchOffers = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const offers = await apiGetOffers();
    !offers && dispatch(showAlert('Error offers loading'));
    console.log('offers: ', offers);
    offers && dispatch({ type: FETCH_OFFERS, payload: offers });
    dispatch(hideLoader());
  };
};

export const fetchNetworks = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const networks = await apiGetNetworks();
    !networks && dispatch(showAlert('Error networks loading'));
    console.log('networks: ', networks);
    networks && dispatch({ type: FETCH_NETWORKS, payload: networks });
    dispatch(hideLoader());
  };
};

export const createOffer = (offer) => ({ type: CREATE_OFFER, payload: offer });
export const createNetwork = (network) => ({
  type: CREATE_NETWORK,
  payload: network,
});
