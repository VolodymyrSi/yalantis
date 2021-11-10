import { useState, useEffect } from 'react';

const ActiveEmployeesItem = ({ activeArray, sortedEmployees, month }) => {
  const [activeEmployees, setActiveEmployees] = useState([]);

  function FormattedDate(dateObj) {
    dateObj = new Date(dateObj);
    const dateToMonth = dateObj.toLocaleString('en-us', { month: 'long' });
    return (
      dateObj.getDate() +
      ' ' +
      dateToMonth +
      ', ' +
      dateObj.getFullYear() +
      ' year'
    );
  }

  useEffect(() => {
    setActiveEmployees(
      // sortedEmployees.filter((person) => activeArray.includes(person.id))
      sortedEmployees.filter(
        (person) => localStorage.getItem(person.id) === 'true'
      )
    );
  }, [activeArray, sortedEmployees]);

  return (
    <ul>
      <h3>{month}</h3>
      {activeEmployees.length === 0 && <p>No Employees</p>}
      {/* {localStorage.length === 0 && <p>No Employees</p>} */}
      {activeEmployees.length > 0 &&
        activeEmployees.map((item) => (
          <li key={item.id}>
            <p>
              {item.firstName} {item.lastName} - {FormattedDate(item.dob)}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default ActiveEmployeesItem;
