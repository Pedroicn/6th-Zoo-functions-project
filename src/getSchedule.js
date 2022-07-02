const data = require('../data/zoo_data');

const { species, hours } = data;
const daysOfWeek = Object.keys(hours);
function exhibitionsDay(day) {
  const animalsPerDay = species.filter((specie) =>
    ((specie.availability.includes(day)) ? specie.name : null));
  return animalsPerDay.map((animal) => animal.name);
}

function buscaTodosHorariosAnimais() {
  const allHours = {};
  daysOfWeek.forEach((day) => {
    allHours[day] = {
      officeHour: (day === 'Monday') ? 'CLOSED'
        : `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: (day === 'Monday') ? 'The zoo will be closed!' : exhibitionsDay(day),
    };
  });
  return allHours;
}

function searchWorkingDays(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: {
      officeHour:
        `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
      exhibition: exhibitionsDay(scheduleTarget),
    } };
  }
}

const allAnimals = species.map((specie) => specie.name);
function getSchedule(scheduleTarget) {
  if (daysOfWeek.includes(scheduleTarget)) return searchWorkingDays(scheduleTarget);
  if (!scheduleTarget || !allAnimals.includes(scheduleTarget)) {
    return buscaTodosHorariosAnimais();
  }
  return species.find((element) => element.name === scheduleTarget).availability;
}

module.exports = getSchedule;
