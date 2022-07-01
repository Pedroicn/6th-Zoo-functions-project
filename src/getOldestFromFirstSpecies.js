const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  const colaborador = employees.find((employee) => employee.id === id);
  const firstAnimal = species.find((specie) => specie.id === colaborador.responsibleFor[0]);
  const animalCharacteristics = firstAnimal.residents
    .reduce((acc, atual) => ((acc.age > atual.age) ? acc : atual));
  return Object.values(animalCharacteristics);
}

module.exports = getOldestFromFirstSpecies;
