import { orderSchema } from '../shemas/orderSchema.js'
import { orderData } from '../data/orderData.js'
import { orderRequests } from '../services/orderRequests.js'
import { matchers } from 'jest-json-schema'
import { expect, describe, it, afterAll } from '@jest/globals'

expect.extend(matchers)

describe('Order API Tests', () => {
  let createdOrders = []

  afterAll(async () => {
    for (const orderId of createdOrders) {
      await orderRequests.deleteOrder(orderId)
    }
  })

  it('should place an order with valid data', async () => {
    const newOrder = orderData.getValidOrder()
    const { status, data } = await orderRequests.addOrder(newOrder)

    expect(status).toBe(200)
    expect(data).toHaveProperty('id')
    expect(data.petId).toBe(newOrder.petId)
    expect(data).toMatchSchema(orderSchema)

    createdOrders.push(data.id)
  })

  it('should return error when placing an order with incorrect data', async () => {
    const invalidOrder = orderData.getInvalidOrder()
    const { status, data } = await orderRequests.addOrder(invalidOrder)

    expect(status).toBe(500)
    expect(data.message).toContain('something bad happened')
  })

  it('should get an order by id', async () => {
    const newOrder = orderData.getValidOrder()
    const createdOrder = await orderRequests.addOrder(newOrder)
    expect(createdOrder.status).toBe(200)

    const orderId = createdOrder.data.id
    const { status, data } = await orderRequests.getOrder(orderId)

    expect(status).toBe(200)
    expect(data).toMatchSchema(orderSchema)
    expect(data.id).toBe(orderId)
    expect(data.petId).toBe(newOrder.petId)

    createdOrders.push(orderId)
  })

  it('should return error for non-existent order_id', async () => {
    const response = await orderRequests.getOrder(0)

    expect(response.status).toBe(404)
    expect(response.data.message).toBe('Order not found')
  })

  it('should delete an order successfully', async () => {
    const newOrder = orderData.getValidOrder()
    const createdOrder = await orderRequests.addOrder(newOrder)
    expect(createdOrder.status).toBe(200)

    const orderId = createdOrder.data.id
    const deleteResponse = await orderRequests.deleteOrder(orderId)
    expect(deleteResponse.status).toBe(200)

    const getResponse = await orderRequests.getOrder(orderId)
    expect(getResponse.status).toBe(404)
  })

  it('should return error when deleting non-existent order', async () => {
    const deleteResponse = await orderRequests.deleteOrder(0)

    expect(deleteResponse.status).toBe(404)
    expect(deleteResponse.data.message).toEqual('Order Not Found')
  })

  it('should get inventories', async () => {
    const { status, data } = await orderRequests.getInventories()

    expect(status).toBe(200)
    expect(data).toBeInstanceOf(Object)
  })

  it('should update an order successfully', async () => {
    const newOrder = orderData.getValidOrder()
    const createdOrder = await orderRequests.addOrder(newOrder)
    expect(createdOrder.status).toBe(200)

    const updatedOrder = { ...createdOrder.data, quantity: 10 }
    const deleteResponse = await orderRequests.deleteOrder(createdOrder.data.id)
    expect(deleteResponse.status).toBe(200)

    const { status, data } = await orderRequests.addOrder(updatedOrder)
    expect(status).toBe(200)
    expect(data.quantity).toBe(10)
    expect(data).toMatchSchema(orderSchema)

    createdOrders.push(data.id)
  })

  it('should get all orders', async () => {
    const newOrder1 = orderData.getValidOrder()
    const newOrder2 = orderData.getValidOrder()
    await orderRequests.addOrder(newOrder1)
    await orderRequests.addOrder(newOrder2)

    const { status, data } = await orderRequests.getInventories()
    expect(status).toBe(200)
    expect(data).toBeInstanceOf(Object)
  })

  it('should check order status', async () => {
    const newOrder = orderData.getValidOrder()
    const createdOrder = await orderRequests.addOrder(newOrder)
    expect(createdOrder.status).toBe(200)

    const orderId = createdOrder.data.id
    const { status, data } = await orderRequests.getOrder(orderId)
    expect(status).toBe(200)
    expect(data.status).toBeDefined()

    createdOrders.push(orderId)
  })
})
