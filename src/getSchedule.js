const data = require('../data/zoo_data');

const { species } = data;
function getSchedule(scheduleTarget) {
  const animals = species.map((specie) => specie.name)
  if (animals.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability
  }

}
console.log(getSchedule('penguins'))
module.exports = getSchedule;
