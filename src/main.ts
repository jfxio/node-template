import chalk from 'chalk'

import { reverse, greet } from './utl/index.js'

console.log(`Greet: ${greet('Joe')}`)
console.log(`Reverse: ${reverse('one two three')}`)
console.log(chalk.blue(`Water is your friend.`))