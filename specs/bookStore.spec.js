import { userCreds } from '../framework/services/auth'
import { createBook, getBook, deleteBook } from '../framework/services/bookRequests'
import { createUser } from '../framework/services/userRequests'

let creds
let userId

beforeAll(async () => {
  creds = userCreds()
  const username = creds.username
  const password = creds.password
  const userResponse = await createUser(username, password)
  userId = userResponse.data.userID
  console.log(userResponse)
})

describe('Check books api routes', () => {
  it('should successfully create a book', async () => {
    const isbn = '9781449325862'
    const response = await createBook(userId, isbn, creds.username, creds.password)
    console.log(response)
    expect(response.status).toBe(201)
    expect(response.data.books).toBeDefined()
    expect(response.data.books.length).toBeGreaterThan(0)
    expect(response.data.books[0].isbn).toBe('9781449325862')
  })

  it('should be an error when already exists', async () => {
    const isbn = '9781449325862'
    await expect(createBook(userId, isbn, creds.username, creds.password)).rejects.toMatchObject({
      response: {
        status: 400,
        data: { code: '1210', message: "ISBN already present in the User's Collection!" }
      }
    })
  })

  it('should get information about the book', async () => {
    const isbn = '9781449325862'
    const response = await getBook(isbn)
    expect(response.status).toBe(200)
    expect(response.data.books).toBeDefined()
    expect(response.data.books.length).toBeGreaterThan(0)
    expect(response.data.books[0].isbn).toBe('9781449325862')
  })

  it('should delete the book', async () => {
    const deleteResponse = await deleteBook(userId, creds.username, creds.password)
    expect(deleteResponse.status).toBe(204)
  })
})
