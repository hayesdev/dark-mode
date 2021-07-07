import { useState } from "react";

// THIS ACTUALLY MAKES SENSE!!
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // useState is the callback
    // it take no argument, and tries to create item
    // localStorage.getItem(key) returns the value key is set to,
    // in this case initialValue
    // last string of logic returns the result of the ternary:
    // if item (aka initialValue) is truthy(exists), it gets parsed and returned
    // if not, initialValue is returned (undefined, null, '', and false are falsy)

    const item = window.localStorage.getItem(key);
    // console.log(item);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
