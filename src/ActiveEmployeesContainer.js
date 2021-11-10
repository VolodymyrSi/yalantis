import ActiveEmployeesItem from './ActiveEmployeesItem';
import PropTypes from 'prop-types';

function formatDate(dateObj) {
  const newDate = new Date(dateObj);
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

  function formatDate(dateObj) {
    const newDate = new Date(dateObj);
    const dateToMonth = newDate.toLocaleString('en-us', { month: 'long' });
    return dateToMonth;
  }

  function currentMonth() {
    let today = new Date();
    return formatDate(today);
  }

  function sort(array, first) {
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
    return array.sort(
      (a, b) =>
        (months[a] < months[first]) - (months[b] < months[first]) ||
        months[a] - months[b]
    );
  }
  return sort(months, currentMonth());
}

function shouldRenderData() {
  // why does it console log this many times?
  console.log(Object.values(localStorage).some((item) => item === 'true'));
  return Object.values(localStorage).some((item) => item === 'true');
}

const ActiveEmployeesContainer = ({ activeArray, allEmployees }) => {
  return (
    <div style={{ textAlign: 'center', width: '25%' }}>
      <h2>Employees Birthday</h2>
      {/* maybe the problem is here? */}
      {!shouldRenderData() && <p>Employees list is empty</p>}
      {shouldRenderData() === true &&
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
  allEmployees: PropTypes.array.isRequired
};

export default ActiveEmployeesContainer;
