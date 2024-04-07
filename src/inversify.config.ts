import { Container } from "inversify";
import ICustomerService from "./customer/customer.interface";
import TYPES from "./TYPES";
import CustomerService from "./customer/customer.service";
import 'reflect-metadata';
import CustomerController from "./customer/customer.controller";
import IOrderService from "./order/order.interface";
import OrderService from "./order/order.service";
import OrderController from "./order/order.controller";
import { Pool } from "pg";
import PoolService from "./db.config";

const container = new Container()


container.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService)
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController)
container.bind<IOrderService>(TYPES.IOrderService).to(OrderService)
container.bind<OrderController>(TYPES.OrderController).to(OrderController)
container.bind<PoolService>(TYPES.PoolService).to(PoolService)

export default container