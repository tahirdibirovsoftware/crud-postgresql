import { Container } from "inversify";
import ICustomerService from "./customer/customer.interface";
import TYPES from "./TYPES";
import CustomerService from "./customer/customer.service";
import 'reflect-metadata';

const container = new Container()


container.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService)



export default container