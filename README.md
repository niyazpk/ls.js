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

 - localStorage.key and localStorage.length are not supported in the API. In practice, I hope they won't be missed becuase of the way ls.keys() method works.



