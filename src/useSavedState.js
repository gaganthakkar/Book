// cookies - key value storage
// - also available on the server
// - when a browser makes HTTP requests, it sends all the cookies
//   - HTTP2 doesn't always resend cookes on each request (?)
//   - HTTP3, what is that?
// - secure only (cookie only available on HTTPS protocol, not HTTP)
// - server only - JavaScript cannot see this cookie

// localStorage
// sessionStorage (same API as localStorage, but deleted on end of session)
// IndexedDB (deprecated?)

// const [input, setInput] = useState('');
// const [input, setInput] = useSavedState('in', '');

// localStorage.getItem('foo') -> undefined | string
// localStorage.setItem('foo', 'bar') -> saves bar value for foo key
// ^ value must be string

import { useState } from "react";

export default (localStorageKey, defaultValue) => {
  const item = localStorage.getItem(localStorageKey);

  let [input, setInput] = useState(item || defaultValue);

  let saveInput = (val) => {
    setInput(val);
    localStorage.setItem(localStorageKey, val);
  };

  return [input, saveInput];

  // const [input, setInput] = localStorage.setItem(item ? item : defaultValue);

  // return [input, (item) => localStorage.setItem(item)];
};
