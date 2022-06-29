const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const getAnimalsById = ids.map((entryId) => species.find((specie) => specie.id === entryId));
  return getAnimalsById;
}

module.exports = getSpeciesByIds;
