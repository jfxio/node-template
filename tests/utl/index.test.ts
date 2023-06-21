import {reverse, greet} from '../../src/utl/index.js'

describe('utl.reverse', () => {
  const cases = [
    ['empty', '', ''],
    ['even length', 'one two', 'two_one'],
    ['odd length', 'a b c', 'c_b_a'],
  ]
  cases.forEach(([name, arg, expected]) => {
    test(`works on ${name} string`, () => {
      expect(reverse(arg)).toEqual(expected)
    })
  })
})
