import { apiGetJson } from './getJson';

const getRndItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const platforms = ['Apple', 'Google'];

const API_URL =
  'http://ws75.aptoide.com/api/7/apps/search?query=%22Halloween%22';

export const apiGetApplications = async () => {
  const apps = await apiGetJson(API_URL);
  const mockApps = apps?.datalist?.list.map((app) => {
    return {
      id: app.id,
      name: app.name,
      icon: app.icon,
      platform: getRndItem(platforms),
    };
  });
  return mockApps;
};
