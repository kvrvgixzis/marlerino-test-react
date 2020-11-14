import { apiGetJson } from './getJson';

const API_URL =
  'http://ws75.aptoide.com/api/7/apps/search?query=%22Halloween%22';

export const apiGetApplications = async () => {
  return await apiGetJson(API_URL);
};
