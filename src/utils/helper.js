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

export const localStorageSelectedValuesArray = () => {
  let array = [];
  Object.keys(localStorage).forEach((key) => {
    if (localStorage[key] === 'true') {
      array.push(key);
    }
  });
  return array;
};

export const formatDate = (dateObj) => {
  const newDate = new Date(dateObj);
  return newDate.toLocaleString('en-us', { month: 'long' });
};

export const shouldRenderData = () => {
  return Object.values(localStorage).some((item) => item === 'true');
};

const currentMonth = () => formatDate(new Date());

const sort = (first) => {
  const array = Object.keys(months);
  return array.sort(
    (a, b) =>
      (months[a] < months[first]) - (months[b] < months[first]) ||
      months[a] - months[b]
  );
};

export const sortedMonths = () => sort(currentMonth());

export const getAlphabetArray = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
};

export const FormattedDate = (dateObj) => {
  dateObj = new Date(dateObj);
  const dateToMonth = formatDate(dateObj);
  return (
    dateObj.getDate() +
    ' ' +
    dateToMonth +
    ', ' +
    dateObj.getFullYear() +
    ' year'
  );
};
