import { useContext } from 'react';
import { Context } from './App';

const Radio = (props) => {
  const handleChange = useContext(Context);
  // const required = localStorage.getItem(props.id) === 'true';
  return (
    <div>
      <input
        defaultChecked={localStorage.getItem(props.id) === 'false'}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        type="radio"
        value={props.id}
        name={props.id + 'isActive'}
      />{' '}
      not active
      <input
        defaultChecked={localStorage.getItem(props.id) === 'true'}
        onChange={(event) => {
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