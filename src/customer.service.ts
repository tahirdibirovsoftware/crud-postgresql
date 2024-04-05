import { Pool, QueryConfig } from "pg";
import { CustomerDTO } from "./dto/customer.dto";

class CustomerService {

    constructor(private readonly pool: Pool) { }


    async addCustomer(schema: CustomerDTO) {
        try {
            const keys = Object.keys(schema).join(', ');
            const values = Object.values(schema);
            const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
            const text = `INSERT INTO customers (${keys}) VALUES (${placeholders})`;
            const queryConfig: QueryConfig = { text, values }
            const customerResult = await this.pool.query(queryConfig, values);
            return customerResult.rows; // Depending on what you expect to return after insertion
        } catch (err) {
            // It's good practice to check if err is an instance of Error
            throw err instanceof Error ? err : new Error('An unexpected error occurred');
        }
    }



    async updateCustomer(id: number, schema: Partial<CustomerDTO>) {
        try {
            const placeholders = Object.keys(schema).map((key, index) => `${key}=$${index + 1}`).join(', ');
            const values = Object.values(schema);
            values.push(id);
            const text = `UPDATE customers SET ${placeholders} WHERE id=$${values.length}`;
            const query: QueryConfig = { text, values }

            // Ensure this.pool.query is called in a way that returns a promise
            const updateCustomerResult = await this.pool.query(query);
            // Process the result of the update operation if needed
        } catch (err) {
            // It's good practice to check if err is an instance of Error
            throw err instanceof Error ? err : new Error('An unexpected error occurred');
        }
    }



    async deleteCustomerById(id: number) {
        try {
            const queryConfig: QueryConfig = {
                text: `DELETE FROM customers WHERE id=$1`,
                values: [id]
            }

            const deletedOne = await this.pool.query(queryConfig)
            return deletedOne
        } catch (err) {
            throw err instanceof Error ? err : new Error('An unexpected error occured');
        }

    }


    async getCustomerById(id: number) {
        try{
            const queryConfig: QueryConfig = {
                text: `SELECT * FROM customers WHERE id=$1`,
                values: [id]
            }
    
            return await this.pool.query(queryConfig)
        }catch(err){
            throw err instanceof Error ? err : new Error('An unexpected error occured');
        }

    }


    async getAllCustomers() {
     try{
        const queryConfig: QueryConfig = {
            text: `SELECT * FROM customers`
        }
        return await this.pool.query(queryConfig)
    }
     catch(err){
        throw err instanceof Error ? err : new Error('An unexpected error occured')
     }

}
}

export default CustomerService