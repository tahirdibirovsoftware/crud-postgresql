"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var customer_controller_1 = __importDefault(require("./customer.controller"));
var customer_service_1 = __importDefault(require("./customer.service"));
var db_config_1 = __importDefault(require("./db.config"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var PORT = 4500;
var customerController = new customer_controller_1.default(new customer_service_1.default(db_config_1.default));
app.post('/customer', customerController.addCustomer.bind(customerController));
app.put('/customer/:id', customerController.updateCustomer.bind(customerController));
app.delete('/customer/:id', customerController.deleteCustomer.bind(customerController));
app.get('/customers', customerController.getAllCustomers.bind(customerController));
app.get('/customer/:id', customerController.getCustomerById.bind(customerController));
app.listen(PORT, function () {
    console.log("Server Running on ".concat(PORT));
});
