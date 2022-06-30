const data = require('../data/zoo_data');

const { species } = data;
function count(animal) {
  if (animal.specie && animal.sex) {
    const getAnimal = species.find((item) => item.name === animal.specie);
    return getAnimal.residents
      .reduce((acc, crr) => ((crr.sex === animal.sex) ? acc + 1 : acc), 0);
  }
  return species.find((item) => item.name === animal.specie).residents.length;
}
function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((item) => {
      obj[item.name] = item.residents.length;
    });
    return obj;
  }
  return count(animal);
}

module.exports = countAnimals;
