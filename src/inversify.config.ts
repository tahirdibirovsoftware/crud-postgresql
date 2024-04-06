import { Container } from "inversify";
import ICustomerService from "./customer/customer.interface";
import TYPES from "./TYPES";
import CustomerService from "./customer/customer.service";
import 'reflect-metadata';
import CustomerController from "./customer/customer.controller";

const container = new Container()


container.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService)
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController)



export default container