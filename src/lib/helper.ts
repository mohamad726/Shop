export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key) as string);
  }
  return null;
}
export function removeFromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return window.localStorage.removeItem(key);
  }
  return null;
}
export function setToLocalStorage(key: string, value: string) {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
  return null;
}
