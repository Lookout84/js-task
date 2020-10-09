const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let keys = Object.keys(employees);
  let bestEmployee = 0;
  const message = " ";
  for (let key of keys) {
    if ((bestEmployee = Math.max(employees[keys]))) {
      return bestEmployee;
    } else if (Object.keys(employees).length == 0) {
      return message;
    }
  }
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
