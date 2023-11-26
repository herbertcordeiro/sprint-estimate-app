const localStorageService = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

export {localStorageService};
