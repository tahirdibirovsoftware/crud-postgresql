import { Pool } from "pg";
import OrderService from "./order.service";
import { Response, Request } from "express";
import OrderDto from "./dto/order.dto";
import { inject, injectable } from "inversify";
import 'reflect-metadata'
import TYPES from "../TYPES";
import IOrderService from "./order.interface";

@injectable()
class OrderController {

    constructor(@inject(TYPES.IOrderService) private readonly orderService: IOrderService){}

    async getAllOrders(req: Request, res: Response){
        try{
            return res.status(200).send(await this.orderService.getAllOrders())
        }catch(err){
            res.status(400).send(new Error(err).message)
        }
    }


    async getOrderById(req: Request, res: Response){
        try{
            const {id} = req.params
            res.status(200).send(await this.orderService.getOrderById(+id as Pick<OrderDto, 'orderId'>))
        }catch(err){
            res.status(400).send(new Error(err).message)
        }
    }


    async createOrder(req: Request, res: Response){
      try{
        const order = req.body
        res.status(200).send(await this.orderService.createOrder(order))
      }catch(err){
        res.status(400).send(new Error(err).message)
      }
    }

}

export default OrderController