"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var inversify_config_1 = __importDefault(require("./inversify.config"));
var TYPES_1 = __importDefault(require("./TYPES"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var PORT = 4500;
var customerController = inversify_config_1.default.get(TYPES_1.default.CustomerController);
var orderController = inversify_config_1.default.get(TYPES_1.default.OrderController);
app.post('/customer', customerController.addCustomer.bind(customerController));
app.put('/customer/:id', customerController.updateCustomer.bind(customerController));
app.delete('/customer/:id', customerController.deleteCustomer.bind(customerController));
app.get('/customers', customerController.getAllCustomers.bind(customerController));
app.get('/customer/:id', customerController.getCustomerById.bind(customerController));
app.get('/customer/order/:id', customerController.getCustomerOrder.bind(customerController));
//Orders
app.post('/order', orderController.createOrder.bind(orderController));
app.get('/orders', orderController.getAllOrders.bind(orderController));
app.get('/order/:id', orderController.getOrderById.bind(orderController));
app.listen(PORT, function () {
    console.log("Server Running on ".concat(PORT));
});
