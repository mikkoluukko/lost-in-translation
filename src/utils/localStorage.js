export const setStorage = (key, value) => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
};

export const getStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return false;

  return JSON.parse(storedValue);
};

export const clearStorage = () => {
  localStorage.clear();
};
