export const setLocalStorage = (key: string, value: unknown) => {
  localStorage[key] = value;
};

export const getLocalStorage = (key: string) => {
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
};

export const getAllLocalStorage = () => {
  return localStorage as Record<string, unknown>;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
