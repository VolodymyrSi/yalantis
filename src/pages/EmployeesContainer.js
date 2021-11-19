import PropTypes from 'prop-types';
import EmployeesItem from '../components/EmployeesItem';
import { getAlphabetArray } from '../utils/helper';

const EmployeesContainer = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '75%'
      }}
    >
      {getAlphabetArray().map((letter) => (
        <EmployeesItem
          key={letter}
          letter={letter}
          employees={props.employeeData
            .filter((item) => item.firstName[0] === letter)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))}
        />
      ))}
    </div>
  );
};

EmployeesContainer.propTypes = {
  // use PropTypes.shape() to describe object keys and values
  // employeeData: PropTypes.arrayOf(PropTypes.shape({...}))
  employeeData: PropTypes.array.isRequired
};

export default EmployeesContainer;
