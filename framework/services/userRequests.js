import axios from 'axios'
import config from '../config/config'

export const createUser = async (username, password) => {
  const response = await axios.post(config.userUrl, {
    userName: username,
    password: password
  })

  return { status: response.status, data: response.data }
}

export const generateToken = async (email, password) => {
  const response = await axios.post(config.tokenUrl, {
    userName: email,
    password: password
  })

  return { status: response.status, data: response.data }
}

export const authRequest = async (email, password) => {
  const response = await axios.post(config.authUrl, {
    userName: email,
    password: password
  })

  return { status: response.status, data: response.data }
}
