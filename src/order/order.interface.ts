import OrderDto from "./dto/order.dto"


interface IOrderService{

    getAllOrders:()=>Promise<Array<OrderDto>>,
    getOrderById:(id: Pick<OrderDto, 'orderId'>)=>Promise<OrderDto>,
    createOrder:(order: OrderDto)=>Promise<OrderDto>

}

export default IOrderService