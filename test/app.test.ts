import {nameIsValid, fullTrim, getTotal } from "../src/app"

describe('nameIsValid function', () => {
    it('should return true for mikita', () => {
      const result = nameIsValid('mikita')
      expect(result).toBeTruthy()
    })

    it('should return false for Mikita', () => {
      const result = nameIsValid('Mikita')
      expect(result).toBeFalsy()
    })

    it('should return false for symbols', () => {
      const result = nameIsValid("@#4")
      expect(result).toBeFalsy()
    })

    it('should return false for nothing', () => {
      const result = nameIsValid("")
      expect(result).toBeFalsy()
    })

})

describe('fullTrim function', () => {
    it('should trim spaces', () => {
      const result = fullTrim(' a b c ')
      expect(result).toBe('abc')
    })

    it('should trim all spaces', () => {
      const result = fullTrim('1             2')
      expect(result).toBe('12')
    })

    it('should trim tabulation', () => {
      const result = fullTrim('hello      otus')
      expect(result).toBe('hellootus')
    })

    it('should trim line break', () => {
      const result = fullTrim('hello \n otus')
      expect(result).toBe('hellootus')
    })
})

// describe('getTotal function', () => {
//     it('', () => {
//       const result = getTotal()
//       expect(result).toBe('')
//     })

// })