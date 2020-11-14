import {
  CREATE_NETWORK,
  CREATE_OFFER,
  FETCH_NETWORKS,
  FETCH_OFFERS,
} from '../types';

const initialState = {
  networks: [],
  offers: [],
};

export const offers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      return { ...state, offers: action.payload };
    case CREATE_OFFER:
      return { ...state, offers: [action.payload, ...state.offers] };
    case FETCH_NETWORKS:
      return { ...state, networks: action.payload };
    case CREATE_NETWORK:
      return { ...state, networks: [action.payload, ...state.offers] };
    default:
      return state;
  }
};
