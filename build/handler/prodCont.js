"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var prodMod_1 = __importDefault(require("../models/prodMod"));
var dotenv_1 = __importDefault(require("dotenv"));
var authen_middleware_1 = __importDefault(require("../middleware/authen.middleware"));
dotenv_1.default.config();
var ModelProduct = new prodMod_1.default();
// Create product
var createPro = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var creation, product, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                creation = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category
                };
                return [4 /*yield*/, ModelProduct.createPro(creation)];
            case 1:
                product = _a.sent();
                res.json({
                    status: 'success',
                    data: __assign({}, product),
                    message: 'product created'
                });
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
// index, show all products
var showAllPro = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelProduct.showAllPro()];
            case 1:
                products = _a.sent();
                res.json({
                    status: 'success',
                    data: products,
                    message: 'all products'
                });
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
//show, show product by id
var showOnePro = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelProduct.showOnePro(req.params.id)];
            case 1:
                product = _a.sent();
                res.json({
                    status: 'success',
                    data: product,
                    message: 'product retrieved'
                });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// update product by id
var updatePro = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, price, updPro, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_1 = _a.name, price = _a.price;
                return [4 /*yield*/, ModelProduct.updatePro(id, name_1, price)];
            case 1:
                updPro = _b.sent();
                res.status(200).send(updPro);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(400).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// delete product by id
var deletePro = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedPro, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, ModelProduct.deletePro(id)];
            case 1:
                deletedPro = _a.sent();
                res.status(200).send(deletedPro);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// routing
var lastProduct = function (app) {
    app.post('/product', authen_middleware_1.default, createPro);
    app.get('/products', showAllPro);
    app.get('/product/:id', showOnePro);
    app.put('/product/:id', authen_middleware_1.default, updatePro);
    app.delete('/product/:id', authen_middleware_1.default, deletePro);
};
exports.default = lastProduct;
