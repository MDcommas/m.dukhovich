import { client } from './apiClient.js'

export const createBook = async (userId, isbn, username, password) => {
  try {
    const response = await client.post(
      'BookStore/v1/Books',
      {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: isbn
          }
        ]
      },
      {
        auth: {
          username,
          password
        }
      }
    )

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error creating book:', error)
    throw error
  }
}

export const getBook = async isbn => {
  try {
    const response = await client.get(`/BookStore/v1/Books?isbn=${isbn}`)

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error getting book:', error)
    throw error
  }
}

export const deleteBook = async (userId, username, password) => {
  try {
    const response = await client.delete(`/BookStore/v1/Books?UserId=${userId}`, {
      auth: {
        username,
        password
      }
    })

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error deleting book:', error)
    throw error
  }
}
