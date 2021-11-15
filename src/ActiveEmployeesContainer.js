import ActiveEmployeesItem from './ActiveEmployeesItem';
import PropTypes from 'prop-types';

// move this functions to helper.js
function formatDate(dateObj) {
  const newDate = new Date(dateObj);
  // return newDate.toLocaleString('en-us', { month: 'long' })
  const dateToMonth = newDate.toLocaleString('en-us', { month: 'long' });
  return dateToMonth;
}

function sortedMonths() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  function formatDate(dateObj) { // move outside sortedMonths
    const newDate = new Date(dateObj);
    const dateToMonth = newDate.toLocaleString('en-us', { month: 'long' });
    return dateToMonth;
  }

  function currentMonth() { // move outside sortedMonths
    let today = new Date();
    return formatDate(today);
  }

  function sort(array, first) { // move outside sortedMonths
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    };
    // array == Object.keys(months) ??
    return array.sort(
      (a, b) =>
        (months[a] < months[first]) - (months[b] < months[first]) ||
        months[a] - months[b]
    );
  }
  return sort(months, currentMonth());
}

function shouldRenderData() { // move to helper.js
  console.log(Object.values(localStorage).some((item) => item === 'true'));
  return Object.values(localStorage).some((item) => item === 'true');
}

const ActiveEmployeesContainer = ({ activeArray, allEmployees }) => {
  const shouldRenderList = shouldRenderData();
  // save sortedMonths() to const outside of component
  // change activeArray name to activeIds ??
  return (
    <div style={{ textAlign: 'center', width: '25%' }}>
      <h2>Employees Birthday</h2>
      {!shouldRenderList && <p>Employees list is empty</p>}
      {shouldRenderList &&
        sortedMonths().map((month) => (
          <ActiveEmployeesItem
            key={month}
            month={month}
            activeArray={activeArray}
            sortedEmployees={allEmployees.filter((person) => {
              return formatDate(person.dob) === month;
            })}
          />
        ))}
    </div>
  );
};

ActiveEmployeesContainer.propTypes = {
  activeArray: PropTypes.array.isRequired,
  // use PropTypes.shape for allEmployees
  allEmployees: PropTypes.array.isRequired
};

export default ActiveEmployeesContainer;
