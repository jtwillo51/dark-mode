import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {

    // changing value from useState
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  // building a new function to set the initial 
  // value from useState
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  // returning state almost how I found it.
  return [storedValue, setValue];
};
