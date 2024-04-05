import express from 'express'
import CustomerController from './customer.controller'
import CustomerService from './customer.service'
import pool from './db.config'

const app = express()
app.use(express.json())
const PORT = 4500

const customerController = new CustomerController(new CustomerService(pool))


app.post('/customer', customerController.addCustomer.bind(customerController))
app.put('/customer/:id', customerController.updateCustomer.bind(customerController))
app.delete('/customer/:id', customerController.deleteCustomer.bind(customerController))
app.get('/customers', customerController.getAllCustomers.bind(customerController))
app.get('/customer/:id', customerController.getCustomerById.bind(customerController))


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})