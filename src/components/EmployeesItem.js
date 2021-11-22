import PropTypes from 'prop-types';
import Radio from './Radio';

const EmployeesList = ({ letter, employees }) => {
  const isActive = (id) => localStorage.getItem(id) === 'true';

  return (
    <div style={{ margin: 30, textAlign: 'left', width: '25%' }}>
      <p style={{ fontWeight: '800' }}>{letter}</p>
      {employees.map(({ id, firstName, lastName }) => (
        <div key={id}>
          <p
            style={{
              color: isActive(id) ? 'blue' : 'black',
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

EmployeesList.propTypes = {
  letter: PropTypes.string.isRequired,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EmployeesList;
