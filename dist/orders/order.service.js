"use strict";
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
var OrderService = /** @class */ (function () {
    function OrderService(pool) {
        this.pool = pool;
    }
    OrderService.prototype.getAllOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryConfig = {
                            text: "SELECT * FROM orders;",
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1: return [2 /*return*/, (_a.sent()).rows];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1 instanceof Error ? err_1 : new Error('An unexpected error occured');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrderService.prototype.getOrderById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryConfig = {
                            text: "SELECT * FROM orders WHERE order_id=$1",
                            values: [id]
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1: return [2 /*return*/, ((_a.sent()).rows)];
                }
            });
        });
    };
    OrderService.prototype.createOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var customerId, queryConfig, doesCustomerExist, keys, values, placeholders, queryConfig_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = order.customerId;
                        queryConfig = {
                            text: 'SELECT name FROM customers WHERE id=$1',
                            values: [customerId]
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig)];
                    case 1:
                        doesCustomerExist = (_a.sent()).rows.length;
                        console.log(doesCustomerExist);
                        if (!doesCustomerExist) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        keys = Object.keys(order).map(function (key) { return key; }).join(', ');
                        values = Object.values(order);
                        placeholders = Object.keys(order).map(function (_, index) { return "$".concat(index + 1); }).join(', ');
                        queryConfig_1 = {
                            text: "INSERT INTO orders (".concat(keys, ") values(").concat(placeholders, ")"),
                            values: values
                        };
                        return [4 /*yield*/, this.pool.query(queryConfig_1)];
                    case 3: return [2 /*return*/, (_a.sent()).rows];
                    case 4:
                        err_2 = _a.sent();
                        throw err_2 instanceof Error ? err_2 : new Error('An unexpected error occured');
                    case 5: return [3 /*break*/, 7];
                    case 6: throw new Error("Customer doesn't exist");
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return OrderService;
}());
exports.default = OrderService;
