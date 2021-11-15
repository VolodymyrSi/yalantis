import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActiveEmployeesItem = ({ activeArray, sortedEmployees, month }) => {
  const [activeEmployees, setActiveEmployees] = useState([]);

  function FormattedDate(dateObj) { // move to helper.js or ust outside of component
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
      sortedEmployees.filter(
        (person) => localStorage.getItem(person.id) === 'true'
      )
    );
  }, [activeArray, sortedEmployees]);

  return (
    <ul>
      <h3>{month}</h3>
      {activeEmployees.length === 0 && <p>No Employees</p>}
      {activeEmployees.length > 0 &&
        activeEmployees.map(({id, firstName, lastName, dob}) => (
          <li key={id}>
            <p>
              {firstName} {lastName} - {FormattedDate(dob)}
            </p>
          </li>
        ))}
    </ul>
  );
};

ActiveEmployeesItem.propTypes = {
  month: PropTypes.string,
  sortedEmployees: PropTypes.array,
  activeArray: PropTypes.array
};

export default ActiveEmployeesItem;
