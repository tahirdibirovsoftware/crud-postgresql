import express from 'express'
import CustomerController from './customer/customer.controller'
import OrderController from './order/order.controller'
import container from './inversify.config'
import TYPES from './TYPES'

const app = express()
app.use(express.json())
const PORT = 4500

const customerController = container.get<CustomerController>(TYPES.CustomerController)
const orderController = container.get<OrderController>(TYPES.OrderController)


app.post('/customer', customerController.addCustomer.bind(customerController))
app.put('/customer/:id', customerController.updateCustomer.bind(customerController))
app.delete('/customer/:id', customerController.deleteCustomer.bind(customerController))
app.get('/customers', customerController.getAllCustomers.bind(customerController))
app.get('/customer/:id', customerController.getCustomerById.bind(customerController))
app.get('/customer/order/:id', customerController.getCustomerOrder.bind(customerController))

//Orders

app.post('/order', orderController.createOrder.bind(orderController))
app.get('/orders', orderController.getAllOrders.bind(orderController))
app.get('/order/:id', orderController.getOrderById.bind(orderController))


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})