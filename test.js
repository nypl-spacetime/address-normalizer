const chalk = require('chalk')
const addressNormalizer = require('./')

const input = [
  'Morris',
  'Sullivan',
  'W. 25th',
  'Rivington',
  'Amos',
  'Columbia',
  'Fourth',
  'Monroe',
  'Fourth',
  'Broadway',
  'W. 17th',
  'Rivington',
  'W. 18th',
  'Madison',
  'Cedar',
  'Hudson',
  'Fourth',
  'Broadway',
  'W. 20th',
  'Hudson',
  'Merchants Ex',
  'Anthony',
  'E.',
  'Fourth',
  'W. 25th',
  'W. Broadway',
  'Goerck',
  'Av. 8',
  'W. 35th'
]

input
  .map((from) => ({
    from,
    to: addressNormalizer(from)
  }))
  .map((fromTo) => `${chalk.cyan(fromTo.from)} ⇨ ${chalk.yellow(fromTo.to)}`)
  .forEach((item) => {
    console.log(item)
  })
