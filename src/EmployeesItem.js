import Radio from './Radio';

const EmployeesItem = (props) => {
  const style = (id) => localStorage.getItem(id) === 'true';
  return (
    <div style={{ padding: 30, textAlign: 'left' }}>
      <p style={{ fontWeight: '800' }}>{props.letter}</p>
      {props.employees.map((item) => (
        <div key={item.id}>
          <p style={{ color: style(item.id) ? 'blue' : 'black', fontWeight:'500' }}>
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
