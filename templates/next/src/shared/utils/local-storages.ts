const isBrowser: boolean = typeof window !== 'undefined';

export const setLocalStorage = (key: string, value: unknown) => {
  if (!isBrowser) return;
  localStorage[key] = value;
};

export const getLocalStorage = (key: string) => {
  if (!isBrowser) return '';
  if (!localStorage[key]) return '';
  return localStorage[key] as string;
};

export const getAllLocalStorage = () => {
  if (!isBrowser) return {};
  return localStorage as Record<string, unknown>;
};

export const clearLocalStorage = () => {
  if (!isBrowser) return;
  localStorage.clear();
};
