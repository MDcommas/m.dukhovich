import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('Name validation function', () => {
  it('returns false for space', () => {
    expect(nameIsValid('mi kita')).toBe(false)
  })

  it('returns false for length', () => {
    expect(nameIsValid('m')).toBe(false)
  })

  it('returns false for invalid symbols', () => {
    expect(nameIsValid('mikit@')).toBe(false)
  })
})

describe('Full trim function', () => {
  it('removes space at the beginning', () => {
    expect(fullTrim(' mikita')).toEqual('mikita')
  })

  it('removes space in the middle', () => {
    expect(fullTrim('mik ita')).toEqual('mikita')
  })

  it('removes all spaces', () => {
    expect(fullTrim(' mik ita ')).toEqual('mikita')
  })
})

describe('check total function', () => {
  const cases = [
    {
      description: 'error when negative discount',
      items: [{ price: 10, quantity: 1 }],
      discount: -100,
      error: 'Процент скидки должен быть от 0 до 99'
    },
    {
      description: 'error when 100% discount',
      items: [{ price: 10, quantity: 10 }],
      discount: 100,
      error: 'Процент скидки должен быть от 0 до 99'
    },
    {
      description: 'error when discount is a string',
      items: [{ price: 10, quantity: 10 }],
      discount: '$%',
      error: 'Скидка должна быть числом'
    }
  ]

  cases.forEach(({ items, discount, error }) => {
    it('Check total function', () => {
      expect(() => getTotal(items, discount)).toThrow(error)
    })
  })
})
