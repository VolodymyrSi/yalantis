import Radio from './Radio';
import PropTypes from 'prop-types';
// import in reverse order: external libraries, local components

// EmployeesList instead of EmployeesItem ?
const EmployeesItem = ({ letter, employees }) => {
  // isActive
  const isBlue = (id) => localStorage.getItem(id) === 'true';

  return (
    <div style={{ margin: 30, textAlign: 'left', width: '25%' }}>
      <p style={{ fontWeight: '800' }}>{letter}</p>
      {employees.map(({ id, firstName, lastName }) => (
        <div key={id}>
          <p
            style={{
              color: isBlue(id) ? 'blue' : 'black',
              fontWeight: '500'
            }}
          >
            {firstName} {lastName}
          </p>
          <Radio id={id} />
        </div>
      ))}
      {employees.length === 0 && <p>No Employees</p>}
    </div>
  );
};

EmployeesItem.propTypes = {
  letter: PropTypes.string.isRequired,
  // use PropTypes.shape for employees
  employees: PropTypes.array.isRequired
};

export default EmployeesItem;
