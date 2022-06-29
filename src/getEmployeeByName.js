const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  const { employees } = data;
  const obj = {};
  if (!name) return obj;
  return employees.find((item) => item.firstName === name || item.lastName === name);
}

module.exports = getEmployeeByName;
