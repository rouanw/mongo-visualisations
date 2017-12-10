const Chance = require('chance');
const chance = new Chance();

let data = [];
for (i = 0; i <= 25; i++) {
  data.push({ amount: chance.natural({min: 1, max: 20}), date: chance.date({year: 2017}) });
}

module.exports = data;
