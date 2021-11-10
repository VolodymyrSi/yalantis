import { useContext } from 'react';
import { Context } from './App';
import PropTypes from 'prop-types';

const Radio = ({ id }) => {
  const handleChange = useContext(Context);
  const required = localStorage.getItem(id) === 'true';
  return (
    <div>
      <input
        defaultChecked={!required}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="radio"
        value={id}
        name={id + 'isActive'}
      />
      not active
      <input
        defaultChecked={required}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="radio"
        value={id}
        name={id + 'isActive'}
      />
      active
    </div>
  );
};

Radio.propTypes = {
  id: PropTypes.string
};

export default Radio;
