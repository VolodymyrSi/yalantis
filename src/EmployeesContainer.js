import EmployeesItem from './EmployeesItem';
import PropTypes from 'prop-types';
// import in reverse order: external libraries, local components, styles

const EmployeesContainer = (props) => {
  function getAlphabetArray() { // move from component to helper.js
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet;
  }

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
          employees={props.dataObject // dataObject is array, better name employeeData
            .filter((item) => item.firstName[0] === letter)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))}
        />
      ))}
    </div>
  );
};

EmployeesContainer.propTypes = {
  // use PropTypes.shape() to describe object keys and values
  // dataObject: PropTypes.arrayOf(PropTypes.shape({...}))
  dataObject: PropTypes.array.isRequired,
};

export default EmployeesContainer;
