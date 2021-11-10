import EmployeesItem from './EmployeesItem';
import PropTypes from 'prop-types';

const EmployeesContainer = (props) => {
  function getAlphabetArray() {
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
          employees={props.dataObject
            .filter((item) => item.firstName[0] === letter)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))}
        />
      ))}
    </div>
  );
};

EmployeesContainer.propTypes = {
  dataObject: PropTypes.array.isRequired
};

export default EmployeesContainer;
