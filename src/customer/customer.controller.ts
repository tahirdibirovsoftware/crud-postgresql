import { Request, Response } from 'express'
import pool from '../db.config'
import CustomerService from './customer.service'
import { CustomerDTO } from './dto/customer.dto'


class CustomerController {

    constructor(private readonly customerService: CustomerService){}

    async addCustomer(req: Request, res: Response){
        res.status(200).send(await this.customerService.addCustomer(req.body))
    }
    
    async updateCustomer(req: Request, res: Response) {
        res.status(200).send(await this.customerService.updateCustomer(+req.params.id, req.body))
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

    async getCustomerOrder(req: Request, res: Response){
        const {id} = req.params
        try{
            res.status(200).send(await this.customerService.getCustomerOrder(id as Pick<CustomerDTO, 'id'>))
        }catch(err){
            res.status(500).send(new Error(err).message)
        }
    }

}

export default CustomerController