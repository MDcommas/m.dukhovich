import axios from 'axios'

export const createUser = async (email, password) => {
  const baseUrl = 'https://bookstore.demoqa.com/Account/v1/User'
  const response = await axios.post(baseUrl, {
    userName: email,
    password: password
  })

  return { status: response.status, data: response.data }
}
