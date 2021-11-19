import PropTypes from 'prop-types';
import ActiveEmployeesItem from '../components/ActiveEmployeesItem';
import { formatDate } from '../utils/helper';
import { shouldRenderData } from '../utils/helper';
import {sortedMonths} from '../utils/helper'

const ActiveEmployeesContainer = ({ activeIds, allEmployees }) => {
  const shouldRenderList = shouldRenderData();
  return (
    <div style={{ textAlign: 'center', width: '25%' }}>
      <h2>Employees Birthday</h2>
      {!shouldRenderList && <p>Employees list is empty</p>}
      {shouldRenderList &&
        sortedMonths().map((month) => (
          <ActiveEmployeesItem
            key={month}
            month={month}
            activeIds={activeIds}
            sortedEmployees={allEmployees.filter((person) => {
              return formatDate(person.dob) === month;
            })}
          />
        ))}
    </div>
  );
};

ActiveEmployeesContainer.propTypes = {
  activeIds: PropTypes.array.isRequired,
  // use PropTypes.shape for allEmployees
  allEmployees: PropTypes.array.isRequired
};

export default ActiveEmployeesContainer;
