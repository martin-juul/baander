const storagePrefix = 'baander_';

const localStorage = {
  getToken: (): string | null => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}api_token`) as string);
  },
  setToken: (token: unknown) => {
    window.localStorage.setItem(`${storagePrefix}api_token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}api_token`);
  },
};

export {
  localStorage,
};
