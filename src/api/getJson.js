export const apiGetJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) return;
    const json = await response.json();
    return json;
  } catch (error) {
    return;
  }
};
