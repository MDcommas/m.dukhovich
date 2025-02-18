import { faker } from '@faker-js/faker'

export function userCreds() {
  const creds = {
    username: faker.internet.email(),
    password: faker.internet.password({ length: 12 }) + '$'
  }
  return creds
}
