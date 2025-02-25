import { apiClient } from './apiClient'

export const orderRequests = {
  async addOrder(petData) {
    const response = await apiClient.post('/store/order', petData)
    return { status: response.status, data: response.data }
  },

  async getInventories(petData) {
    const response = await apiClient.get('/store/inventory', petData)
    return { status: response.status, data: response.data }
  },

  async getOrder(orderId) {
    const response = await apiClient.get(`/store/order/${orderId}`)
    return { status: response.status, data: response.data }
  },

  async deleteOrder(orderId) {
    const response = await apiClient.delete(`/store/order/${orderId}`)
    return { status: response.status, data: response.data }
  }
}
