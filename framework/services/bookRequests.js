import axios from 'axios'
import config from '../config/config'

export const createBook = async (userId, isbn, username, password) => {
  try {
    const response = await axios.post(
      config.bookUrl,
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
    const response = await axios.get(`${config.bookUrl}?isbn=${isbn}`)

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error getting book:', error)
    throw error
  }
}

export const deleteBook = async (userId, username, password) => {
  try {
    const response = await axios.delete(`${config.bookUrl}?UserId=${userId}`, {
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
