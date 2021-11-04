const useLocalStorage = () => {
  const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    get,
    set,
  };
};

export default useLocalStorage;
