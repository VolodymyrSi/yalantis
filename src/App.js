import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './styles/App.css';
import EmployeesContainer from './pages/EmployeesContainer';
import ActiveEmployeesContainer from './pages/ActiveEmployeesContainer';
import { localStorageSelectedValuesArray } from './utils/helper';

const fetchEmployeeData = () => {
  return axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Context = createContext();

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  const [activeIdValues, setActiveIdValues] = useState(
    localStorageSelectedValuesArray()
  );

  const handleChange = (id) => {
    let newState = [...activeIdValues];

    if (newState.includes(id)) {
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
      employeeData.forEach((item) => {
        if (localStorage.getItem(item.id) === null) {
          localStorage.setItem(item.id, false);
        }
      });
      setEmployeeData(employeeData);
    });
  }, []);

  return (
    <Context.Provider value={handleChange}>
      <div className="App" style={{ display: 'flex' }}>
        <EmployeesContainer employeeData={employeeData} />
        <ActiveEmployeesContainer
          activeArray={activeIdValues}
          allEmployees={employeeData}
        />
      </div>
    </Context.Provider>
  );
}

export default App;