import './App.css';
import EmployeesContainer from './EmployeesContainer';
import ActiveEmployeesContainer from './ActiveEmployeesContainer';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const fetchEmployeeData = () => {
  return axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then((response) => {
      // handle success
      response.data.forEach((item) => {
        if (localStorage.getItem(item.id) === null) {
          localStorage.setItem(item.id, false);
        }
      });
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const Context = createContext();

function App() {
  const [employeeDataJSON, setEmployeeDataJSON] = useState([]);

  const localStorageTrueArray = () => {
    let array = [];
    Object.keys(localStorage).forEach((key) => {
      if (localStorage[key] === 'true') {
        array.push(key);
      }
    });
    console.log('initialized a new true array', array)
    return array;
  };

  // array of items as default state
  const [activeValues, setActiveValues] = useState(localStorageTrueArray());

  const handleChange = (id) => {
    let newState = [...activeValues];
    // let newState = {...localStorage}

    if (newState.includes(id)) {
      console.log('removing item');
      localStorage.setItem(id, false);
      // use .filter to avoid mutation
      newState = newState.filter((item) => item !== id);
      // newState.splice(activeValues.indexOf(id), 1);
    } else {
      // use spreading operator to avoid mutation
      newState = [...newState, id];
      localStorage.setItem(id, true);
      console.log('adding an item');
      console.log(activeValues);
      // newState.push(id);
    }

    // console.log(newState);
    setActiveValues(newState);
  };

  useEffect(() => {
    fetchEmployeeData().then((employeeData) => {
      // console.log('emp data', employeeData);
      setEmployeeDataJSON(employeeData);
    });
  }, []);

  return (
    <Context.Provider value={handleChange}>
      <div className="App" style={{ display: 'flex' }}>
        <EmployeesContainer dataObject={employeeDataJSON} />

        <ActiveEmployeesContainer
          activeArray={activeValues}
          allEmployees={employeeDataJSON}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
