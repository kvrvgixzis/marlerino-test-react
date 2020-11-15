import { apiGetJson } from './getJson';
import { __DEV__ } from '../utils/dev';

const API_URL = __DEV__
  ? 'http://0.0.0.0:3004'
  : 'https://my-json-server.typicode.com/kvrvgixzis/marlerino-test-react';

const API_APPS_URL = `${API_URL}/apps`;

export const apiGetApplications = async () => {
  return await apiGetJson(API_APPS_URL);
};
