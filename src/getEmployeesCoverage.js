const data = require('../data/zoo_data');

const { employees, species } = data;

function searchEmployee(obj) {
  if (obj.name) {
    return employees.find(({ firstName, lastName }) =>
      [firstName, lastName].includes(obj.name));
  }
  if (obj.id) {
    return employees.find((employee) => employee.id === obj.id);
  }
}

function searchResponsibleEmployee(obj) {
  if (searchEmployee(obj) === undefined) {
    throw new Error('Informações inválidas');
  }
  const responsability = species.filter((specie) =>
    searchEmployee(obj).responsibleFor.includes(specie.id));
  return {
    id: searchEmployee(obj).id,
    fullName: `${searchEmployee(obj).firstName} ${searchEmployee(obj).lastName}`,
    species: responsability.map((item) => item.name),
    locations: responsability.map((item) => item.location),
  };
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return employees.map((employee) => searchResponsibleEmployee({ id: employee.id }));
  }
  return searchResponsibleEmployee(obj);
}
// console.log(getEmployeesCoverage({name: 'Nelso'}))
module.exports = getEmployeesCoverage;
