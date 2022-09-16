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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authen_middleware_1 = __importDefault(require("../middleware/authen.middleware"));
var orMod_1 = __importDefault(require("../models/orMod"));
var ModelOrder = new orMod_1.default();
// Create order
var createMyOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var creation, orderCreated, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                creation = {
                    status: req.body.status,
                    user_id: req.body.user_id
                };
                return [4 /*yield*/, ModelOrder.createMyOrder(creation)];
            case 1:
                orderCreated = _a.sent();
                res.status(200).send(orderCreated);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Add product to order by id
var createOrderProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quantity, order_id, product_id, addPro, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                quantity = req.body.quantity;
                order_id = req.params.id;
                product_id = req.body.product_id;
                return [4 /*yield*/, ModelOrder.createOrderProduct(quantity, order_id, product_id)];
            case 1:
                addPro = _a.sent();
                res.json(addPro);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Index, show all orders
var showOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allOrders, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelOrder.showOrders()];
            case 1:
                allOrders = _a.sent();
                res.status(200).send(allOrders);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Show, show user by id
var showOrdersUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelOrder.showOrdersUser(req.params.id)];
            case 1:
                orders = _a.sent();
                res.json(orders);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update order by id
var updateOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var upId, status_1, myOrder, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                upId = req.params.id;
                status_1 = req.body.status;
                return [4 /*yield*/, ModelOrder.updateOrder(upId, status_1)];
            case 1:
                myOrder = _a.sent();
                res.status(200).send(myOrder);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(400).json(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Delete order by id
var deleteOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var delId, myOrdeer, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                delId = req.params.id;
                return [4 /*yield*/, ModelOrder.deleteOrder(delId)];
            case 1:
                myOrdeer = _a.sent();
                res.status(200).send(myOrdeer);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// routing
var lastOrder = function (app) {
    app.post('/order', authen_middleware_1.default, createMyOrder);
    app.post('/orders/:id/product', authen_middleware_1.default, createOrderProduct);
    app.get('/orders', authen_middleware_1.default, showOrders);
    app.get('/orders/:id', authen_middleware_1.default, showOrdersUser);
    app.put('/order/:id', authen_middleware_1.default, updateOrder);
    app.delete('/order/:id', authen_middleware_1.default, deleteOrder);
};
exports.default = lastOrder;
