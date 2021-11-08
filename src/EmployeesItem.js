import Radio from './Radio';

const EmployeesItem = (props) => {
  return (
    <div style={{ padding: 30, textAlign: 'left' }}>
      <p>{props.letter}</p>
      {props.employees.map((item) => (
        <div key={item.id}>
          <p>
            {item.firstName} {item.lastName}
          </p>
          <Radio id={item.id} />
        </div>
      ))}
      {props.employees.length === 0 && <p>No Employees</p>}
    </div>
  );
};

export default EmployeesItem;
