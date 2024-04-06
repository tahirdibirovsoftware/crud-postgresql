import { CustomerDTO } from "./dto/customer.dto"

interface ICustomerService{

    addCustomer: (schema: CustomerDTO)=>Promise<CustomerDTO>,
    updateCustomer: (id: number, schema: Partial<CustomerDTO>)=>Promise<CustomerDTO>,
    deleteCustomerById: (id: number)=> Promise<CustomerDTO>,
    getCustomerById: (id: number)=>Promise<CustomerDTO>,
    getAllCustomers: ()=>Promise<Array<CustomerDTO>>,
    getCustomerOrder: (id: Pick<CustomerDTO, 'id'>)=>Promise<Array<CustomerDTO>>
}

export default ICustomerService