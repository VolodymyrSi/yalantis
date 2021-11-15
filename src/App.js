import './App.css';
import EmployeesContainer from './EmployeesContainer';
import ActiveEmployeesContainer from './ActiveEmployeesContainer';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
// import in reverse order: external libraries, local components, styles

const fetchEmployeeData = () => {
  return axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then((response) => {
      response.data.forEach((item) => {
        if (localStorage.getItem(item.id) === null) {
          localStorage.setItem(item.id, false);
        }
      });
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Context = createContext();

function App() {
  const [employeeDataJSON, setEmployeeDataJSON] = useState([]); // rm JSON from name

  const localStorageSelectedValuesArray = () => { // move from component to helper.js
    let array = [];
    Object.keys(localStorage).forEach((key) => {
      if (localStorage[key] === 'true') {
        array.push(key);
      }
    });
    return array;
  };

  const [activeIdValues, setActiveIdValues] = useState(
    localStorageSelectedValuesArray()
  );

  const handleChange = (id) => {
    let newState = [...activeIdValues];

    if (newState.includes(id)) {
      console.log('the item exists, removing the item');
      localStorage.setItem(id, false);
      newState = newState.filter((item) => item !== id);
    } else {
      newState = [...newState, id];
      localStorage.setItem(id, true);
    }

    setActiveIdValues(newState);
  };

  useEffect(() => {
    fetchEmployeeData().then((employeeData) => {
      // push to local storage here
      setEmployeeDataJSON(employeeData);
    });
  }, []);

  return (
    <Context.Provider value={handleChange}>
      <div className="App" style={{ display: 'flex' }}>
        <EmployeesContainer dataObject={employeeDataJSON} />
        <ActiveEmployeesContainer
          activeArray={activeIdValues}
          allEmployees={employeeDataJSON}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
