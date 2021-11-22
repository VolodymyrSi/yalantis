import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from '../utils/helper';

const ActiveEmployeesItem = ({ activeIds, sortedEmployees, month }) => {
  const [activeEmployees, setActiveEmployees] = useState([]);

  useEffect(() => {
    setActiveEmployees(
      sortedEmployees.filter(
        (person) => localStorage.getItem(person.id) === 'true'
      )
    );
  }, [activeIds, sortedEmployees]);

  return (
    <ul>
      <h3>{month}</h3>
      {activeEmployees.length === 0 && <p>No Employees</p>}
      {activeEmployees.length > 0 &&
        activeEmployees.map(({ id, firstName, lastName, dob }) => (
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
  activeIds: PropTypes.array
};

export default ActiveEmployeesItem;
