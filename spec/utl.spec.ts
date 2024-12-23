import 'jasmine'
import {reverse} from '../src/utl.js'

describe('utl.reverse', () => {
  const cases = [
    ['empty', '', ''],
    ['even length', 'one two', 'two_one'],
    ['odd length', 'a b c', 'c_b_a'],
  ]
  cases.forEach(([name, arg, expected]) => {
    it(`works on ${name} string`, () => {
      expect(reverse(arg)).toBe(expected)
    })
  })

  it('can fail (bogus expected)', () => {
    expect(reverse('a')).toBe('bb')
  })
})
