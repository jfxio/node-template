export function reverse(s: string): string {
  return s.split(' ').reverse().join('_')
}

export function greet(n: string): string {
  return n ? `Hello ${n}` : `Yo!`
}
