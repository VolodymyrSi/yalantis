import './App.css';
import EmployeesContainer from './EmployeesContainer';
import ActiveEmployeesContainer from './ActiveEmployeesContainer';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// move fetch to a separate file?

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
  const [employeeDataJSON, setEmployeeDataJSON] = useState([]);

  const localStorageSelectedValuesArray = () => {
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
      // use .filter to avoid mutation
      newState = newState.filter((item) => item !== id);
    } else {
      // use spreading operator to avoid mutation
      newState = [...newState, id];
      localStorage.setItem(id, true);
    }

    setActiveIdValues(newState);
  };

  useEffect(() => {
    fetchEmployeeData().then((employeeData) => {
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
