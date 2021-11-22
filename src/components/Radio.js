import { useContext } from 'react';
import { Context } from '../App';
import PropTypes from 'prop-types';

const Radio = ({ id }) => {
  const handleChange = useContext(Context);
  const isChecked = localStorage.getItem(id) === 'true';

  return (
    <div>
      <input
        defaultChecked={!isChecked}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="radio"
        value={id}
        name={`${id}_is_active`}
      />
      not active
      <input
        defaultChecked={isChecked}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="radio"
        value={id}
        name={`${id}_is_active`}
      />
      active
    </div>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired
};

export default Radio;
