import { useCallback, useState } from "react";

const initState = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => initState());

  const setValue = useCallback((value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  },[]);
  return [storedValue, setValue];
}