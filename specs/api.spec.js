import { faker } from '@faker-js/faker'
import config from '../framework/config/config'
import { createUser, generateToken, authRequest } from '../framework/services/userRequests'

describe('Check user API routes', () => {
  let userEmail

  it('should successfully create a user', async () => {
    userEmail = faker.internet.email()
    const response = await createUser(userEmail, config.Password)

    expect(response.status).toBe(201)
    expect(response.data.username).toEqual(userEmail)
  })

  it('should be an error when already exists', async () => {
    await expect(createUser(userEmail, config.Password)).rejects.toMatchObject({
      response: {
        status: 406,
        data: { code: '1204', message: 'User exists!' }
      }
    })
  })

  it('should be an error when invalid password', async () => {
    await expect(createUser(userEmail, config.invalidPassword)).rejects.toMatchObject({
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
    await expect(createUser('', config.Password)).rejects.toMatchObject({
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

  it('should authorize successfully', async () => {
    const response = await generateToken(userEmail, config.Password)

    expect(response.status).toBe(200)
    expect(response.data.token).toBeTruthy()
    expect(response.data.status).toBe('Success')
    expect(response.data.result).toBe('User authorized successfully.')
  })

  it('should be failed with invalid password', async () => {
    const response = await generateToken(userEmail, config.invalidPassword)

    expect(response.status).toBe(200)
    expect(response.data.token).toBe(null)
    expect(response.data.status).toBe('Failed')
    expect(response.data.result).toBe('User authorization failed.')
  })

  it('shoul be authorized true', async () => {
    await generateToken(userEmail, config.Password)

    const authResponse = await authRequest(userEmail, config.Password)
    expect(authResponse.status).toBe(200)
    expect(authResponse.data).toBe(true)
  })

  it('shoul be authorized false', async () => {
    userEmail = faker.internet.email()
    await createUser(userEmail, config.Password)

    const authResponse = await authRequest(userEmail, config.Password)
    expect(authResponse.status).toBe(200)
    expect(authResponse.data).toBe(false)
  })
})
