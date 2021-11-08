import './App.css';
import EmployeesContainer from './EmployeesContainer';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const fetchEmployeeData = () => {
  return axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then((response) => {
      // handle success
      console.log(response);
      console.log(response.data);
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

  const [activeValues, setActiveValues] = useState([]);

  const handleChange = (id) => {
    const newState = [...activeValues];

    if (newState.includes(id)) {
      console.log('removing item');
      newState.splice(activeValues.indexOf(id), 1);
    } else {
      console.log('adding an item');
      newState.push(id);
    }

    setActiveValues(newState);
    console.log(activeValues);
  };

  useEffect(() => {
    fetchEmployeeData().then((employeeData) => {
      console.log('emp data', employeeData);
      setEmployeeDataJSON(employeeData);
    });
  }, []);

  return (
    <Context.Provider value={handleChange}>
      <div className="App">
        <header className="App-header">
          <EmployeesContainer dataObject={employeeDataJSON} />
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
