import { Request, Response } from 'express'
import pool from './db.config'
import CustomerService from './customer.service'


class CustomerController {

    constructor(private readonly customerService: CustomerService){}

    async addCustomer(req: Request, res: Response){
        return await this.customerService.addCustomer(req.body)
    }
    
    async updateCustomer(req: Request, res: Response) {
        return await this.customerService.updateCustomer(+req.params.id, req.body)
    }

    async deleteCustomer(req: Request, res: Response){
        res.send((await this.customerService.deleteCustomerById(+req.params.id)).rows)
    }
    async getCustomerById(req: Request, res: Response){
        res.send((await this.customerService.getCustomerById(+req.params.id)).rows)
    }
    async getAllCustomers(req: Request, res: Response){
        res.send((await this.customerService.getAllCustomers()).rows)
    }


}

export default CustomerController