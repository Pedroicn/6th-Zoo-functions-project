const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const getAnimal = species.find((specie) => specie.name === animal);
  const ages = getAnimal.residents.map((element) => element.age);
  return ages.every((element) => element >= age);
}

module.exports = getAnimalsOlderThan;
