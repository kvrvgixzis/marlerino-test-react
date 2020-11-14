export const apiGetJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) return;
    const json = await response.json();
    return json;
  } catch (error) {
    return;
  }
};
