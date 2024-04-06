"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var inversify_1 = require("inversify");
var CustomerService = /** @class */ (function () {
    function CustomerService(pool) {
        this.pool = pool;
    }
    CustomerService.prototype.addCustomer = function (schema) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, values, placeholders, text, queryConfig, customerResult, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        keys = Object.keys(schema).join(', ');
                        values = Object.values(schema);
                        placeholders = values.map(function (_, index) { return "$".concat(index + 1); }).join(', ');
                        text = "INSERT INTO customers (".concat(keys, ") VALUES (").concat(placeholders, ") RETURNING *");
                        queryConfig = { text: text, values: values };
                        return [4 /*yield*/, this.pool.query(queryConfig, values)];
                    case 1:
                        customerResult = _a.sent();
                        return [2 /*return*/, customerResult.rows[0]]; // Depending on what you expect to return after insertion
                    case 2:
                        err_1 = _a.sent();
                        // It's good practice to check if err is an instance of Error
                        throw err_1 instanceof Error ? err_1 : new Error('An unexpected error occurred');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.updateCustomer = function (id, schema) {
        return __awaiter(this, void 0, void 0, function () {
            var placeholders, values, text, query, updateCustomerResult, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        placeholders = Object.keys(schema).map(function (key, index) { return "".concat(key, "=$").concat(index + 1); }).join(', ');
                        values = Object.values(schema);
                        values.push(id);
                        text = "UPDATE customers SET ".concat(placeholders, " WHERE id=$").concat(values.length);
                        query = { text: text, values: values };
                        return [4 /*yield*/, this.pool.query(query)];
                    case 1:
                        updateCustomerResult = _a.sent();
                        return [2 /*return*/, updateCustomerResult.rows[0]
                            // Process the result of the update operation if needed
                        ];
                    case 2:
                        err_2 = _a.sent();
                        // It's good practice to check if err is an instance of Error
                        throw err_2 instanceof Error ? err_2 : new Error('An unexpected error occurred');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.deleteCustomerById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig, deletedOne, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryConfig = {
                            text: "DELETE FROM customers WHERE id=$1",
                            values: [id]
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1:
                        deletedOne = _a.sent();
                        return [2 /*return*/, deletedOne.rows[0]];
                    case 2:
                        err_3 = _a.sent();
                        throw err_3 instanceof Error ? err_3 : new Error('An unexpected error occured');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getCustomerById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryConfig = {
                            text: "SELECT * FROM customers WHERE id=$1",
                            values: [id]
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1: return [2 /*return*/, (_a.sent()).rows[0]];
                    case 2:
                        err_4 = _a.sent();
                        throw err_4 instanceof Error ? err_4 : new Error('An unexpected error occured');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getAllCustomers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryConfig = {
                            text: "SELECT * FROM customers"
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1: return [2 /*return*/, (_a.sent()).rows];
                    case 2:
                        err_5 = _a.sent();
                        throw err_5 instanceof Error ? err_5 : new Error('An unexpected error occured');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.getCustomerOrder = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig, myOrders, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryConfig = {
                            text: "SELECT new_customers.name, orders.orderName FROM (SELECT * from customers where id=$1) as new_customers JOIN orders ON new_customers.id=orders.customerId;",
                            values: [id]
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1:
                        myOrders = (_a.sent()).rows;
                        return [2 /*return*/, myOrders];
                    case 2:
                        err_6 = _a.sent();
                        throw err_6 instanceof Error ? err_6 : new Error('An unexpected error occured');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [pg_1.Pool])
    ], CustomerService);
    return CustomerService;
}());
exports.default = CustomerService;
