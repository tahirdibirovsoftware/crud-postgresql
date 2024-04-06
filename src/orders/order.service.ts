import { Pool, QueryArrayConfig, QueryConfig } from "pg";
import OrderDto from "./dto/order.dto";


class OrderService {
    constructor(private readonly pool: Pool) { }

    async getAllOrders() {
        try {
            const queryConfig: QueryConfig =
            {
                text: `SELECT * FROM orders;`,
            }
            return (await this.pool.query(queryConfig)).rows
        }
        catch (err) {
            throw err instanceof Error ? err : new Error('An unexpected error occured')
        }
    }


    async getOrderById(id: Pick<OrderDto, 'orderId'>) {
        const queryConfig: QueryConfig = {
            text: `SELECT * FROM orders WHERE order_id=$1`,
            values: [id]
        }

        return ((await this.pool.query(queryConfig)).rows)
    }



    async createOrder(order: OrderDto) {
        const { customerId } = order
        const queryConfig: QueryConfig = {
            text: 'SELECT name FROM customers WHERE id=$1',
            values: [customerId]
        }
        const doesCustomerExist = (await this.pool.query(queryConfig)).rows.length
        console.log(doesCustomerExist)
        if (doesCustomerExist) {
            try {
                const keys = Object.keys(order).map(key => key).join(', ')
                const values = Object.values(order)
                const placeholders = Object.keys(order).map((_, index) => `$${index + 1}`).join(', ')
                const queryConfig: QueryConfig = {
                    text: `INSERT INTO orders (${keys}) values(${placeholders}) RETURNING *`,
                    values
                }
                return (await this.pool.query(queryConfig)).rows
            } catch (err) {
                throw err instanceof Error ? err : new Error('An unexpected error occured')
            }
        } else {
            throw new Error("Customer doesn't exist")
        }
    }

}


export default OrderService