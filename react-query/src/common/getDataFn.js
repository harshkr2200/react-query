// reuse this fn for every api call

export const getDataFn = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
