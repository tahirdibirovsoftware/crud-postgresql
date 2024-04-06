"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var TYPES_1 = __importDefault(require("./TYPES"));
var customer_service_1 = __importDefault(require("./customer/customer.service"));
require("reflect-metadata");
var customer_controller_1 = __importDefault(require("./customer/customer.controller"));
var container = new inversify_1.Container();
container.bind(TYPES_1.default.ICustomerService).to(customer_service_1.default);
container.bind(TYPES_1.default.CustomerController).to(customer_controller_1.default);
exports.default = container;
