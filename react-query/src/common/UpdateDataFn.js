export const updateDataFn = async (url, payload) => {
  await fetch(url, {
    ...payload,
  });
};
