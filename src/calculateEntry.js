const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entrantsObj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age < 18) {
      entrantsObj.child += 1;
    } else if (element.age < 50) {
      entrantsObj.adult += 1;
    } else { entrantsObj.senior += 1; }
  });
  return entrantsObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const arrayPrices = Object.entries(countEntrants(entrants));
  return arrayPrices.reduce((result, current) => (result + prices[current[0]] * current[1]), 0);
}

module.exports = { calculateEntry, countEntrants };
