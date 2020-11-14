import { __DEV__ } from '../utils/dev';
import { apiGetJson } from './getJson';

const API_URL = __DEV__
  ? 'http://0.0.0.0:3004'
  : 'https://my-json-server.typicode.com/kvrvgixzis/marlerino-test-react';

const API_OFFERS_URL = `${API_URL}/offers`;
const API_NETWORKS_URL = `${API_URL}/networks`;

export const apiGetOffers = async () => {
  return await apiGetJson(API_OFFERS_URL);
};

export const apiGetNetworks = async () => {
  return await apiGetJson(API_NETWORKS_URL);
};
