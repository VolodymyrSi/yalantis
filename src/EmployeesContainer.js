import EmployeesItem from './EmployeesItem';

const EmployeesContainer = (props) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth:'80%'}}>
      {alphabet.map((letter) => (
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

export default EmployeesContainer;
