const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let bestEmployee = 0;
  let message = '';
  for (let key in employees) {
    if (employees[key] > bestEmployee) {
      bestEmployee = employees[key];
      message = key;
    }
  }
  return message;
};

// Объекты и ожидаемый результат
const developers = {};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
