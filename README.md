# Yalantis React.js School Practice Task

### Technology used:

- React functional components
- React hooks: useState, useEffect;
- React Context
- React PropTypes
- Axios

### Details:

|| Employees container | Active employees container |
|-----------| ----------- | ----------- |
|Data type| A list of all employees | Employees selected with radio buttons |
|Components| Employees item + Radio button | Active employees item |


_The page renders a number of employees alphabetically based on server data. The data is received with `Axios` async request. The data is placed in a state called `employeeData` upon page load with `useEffect` hook._

_**Context** stores `handleChange` function which will push selected employees to `local storage`._

_Selecting an item with a radio button with push its **ID** to local storage with value of **true**._

_Whenever an item with a value of **true** is found in local storage, it gets rendered in the list of active employees._

### Extra detail:

- `Helper` functions stored in `utils` folder deal with ordering items alphabetically and by date.
