import { faker } from '@faker-js/faker'
import { createUser } from '../utils/createUser'

const Password = '123qweQWE!'
const invalidPassword = '123'

describe('Check user API routes', () => {
  let userEmail

  it('should successfully create a user', async () => {
    userEmail = faker.internet.email()
    const response = await createUser(userEmail, Password)

    expect(response.status).toBe(201)
    expect(response.data.username).toEqual(userEmail)
  })

  it('should be an error when already exists', async () => {
    await expect(createUser(userEmail, Password)).rejects.toMatchObject({
      response: {
        status: 406,
        data: { code: '1204', message: 'User exists!' }
      }
    })
  })

  it('should be an error when invalid password', async () => {
    await expect(createUser(userEmail, invalidPassword)).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          code: '1300',
          message:
            "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
        }
      }
    })
  })

  it('should be an error when empty username', async () => {
    await expect(createUser('', Password)).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          code: '1200',
          message: 'UserName and Password required.'
        }
      }
    })
  })

  it('should be an error when empty password', async () => {
    await expect(createUser(userEmail, '')).rejects.toMatchObject({
      response: {
        status: 400,
        data: {
          code: '1200',
          message: 'UserName and Password required.'
        }
      }
    })
  })
})
