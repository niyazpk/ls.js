ls.js
=====

A very tiny and awesome HTML5 localStorage wrapper.


API
---

`ls.set(key, value)` - store a value in localStorage

`ls.get(key)` - gets a value from localStorage

`ls.flush()` - clear ALL data stored in localStorage

`ls.remove(key)` - remove an item from localStorage. This methos also accepts an array of keys.

`ls.keys(str)` - returns a list of keys matching the regex/string given as argument. If nothing is provided as argument, ALL the keys are returned.



Notes
-----

 - `localStorage.key` and `localStorage.length` were not ported to the API. In practice, I hope they won't be missed because of the way ls.keys() method works.

  - If you are using *ls.js* in your code, please make sure that you are using ONLY this library to manage your localStorage needs. Because of the way *ls.js* stores data, it may not be compatible with other libraries which may store data in a different manner.



