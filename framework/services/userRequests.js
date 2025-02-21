import { client } from './apiClient.js'

export const createUser = async (username, password) => {
  try {
    const response = await client.post('Account/v1/User', {
      userName: username,
      password: password
    })

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

export const generateToken = async (email, password) => {
  try {
    const response = await client.post('Account/v1/GenerateToken', {
      userName: email,
      password: password
    })

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error generating token:', error)
    throw error
  }
}

export const authRequest = async (email, password) => {
  try {
    const response = await client.post('Account/v1/Authorized', {
      userName: email,
      password: password
    })

    return { status: response.status, data: response.data }
  } catch (error) {
    console.error('Error authorizing request:', error)
    throw error
  }
}
