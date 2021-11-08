import { useContext } from 'react';
import { Context } from './App';

const Radio = (props) => {
  const handleChange = useContext(Context);

  return (
    <div>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          handleChange(event.target.value);
        }}
        type="radio"
        value={props.id}
        name={props.id + 'isActive'}
      />{' '}
      not active
      <input
        onChange={(event) => {
          console.log(event.target.value);
          handleChange(event.target.value);
        }}
        type="radio"
        value={props.id}
        name={props.id + 'isActive'}
      />{' '}
      active
    </div>
  );
};

export default Radio;
