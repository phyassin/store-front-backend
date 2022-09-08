"use strict";
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
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
var user_model_1 = __importDefault(require("../models/user.model"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authen_middleware_1 = __importDefault(require("../middleware/authen.middleware"));
var dotenv_1 = __importDefault(require("dotenv"));
var config_1 = __importDefault(require("../config"));
dotenv_1.default.config();
var ModelUser = new user_model_1.default();
// Create User
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var creation, user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                creation = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: req.body.password
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ModelUser.createUser(creation)];
            case 2:
                user = _a.sent();
                res.json({
                    status: 'success',
                    data: __assign({}, user),
                    message: 'user created'
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// index, Show all users
var showAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelUser.showAllUsers()];
            case 1:
                users = _a.sent();
                res.json({
                    status: 'success',
                    data: users,
                    message: 'all users'
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
// show,  show user by id
var showUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ModelUser.showUser(req.params.id)];
            case 1:
                user = _a.sent();
                res.json({
                    status: 'success',
                    data: user,
                    message: 'user retrieved'
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
// authenticate user
var authenticate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, first_name, last_name, password, user, token, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, first_name = _a.first_name, last_name = _a.last_name, password = _a.password;
                return [4 /*yield*/, ModelUser.authenticate(first_name, last_name, password)];
            case 1:
                user = _b.sent();
                token = jsonwebtoken_1.default.sign({ user: user }, config_1.default.secretToken);
                if (!user) {
                    return [2 /*return*/, res.status(401).json({
                            status: 'error',
                            message: 'please try again first and last names dont match'
                        })];
                }
                return [2 /*return*/, res.json({
                        status: 'success',
                        data: __assign(__assign({}, user), { token: token }),
                        message: 'user authentiiicated'
                    })];
            case 2:
                err_4 = _b.sent();
                return [2 /*return*/, next(err_4)];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update user by id
var updUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var creation, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                creation = {
                    id: req.params.id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: req.body.password
                };
                return [4 /*yield*/, ModelUser.updateUser(creation)];
            case 1:
                user = _a.sent();
                res.json({
                    status: 'success',
                    data: user,
                    message: 'user updated'
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// delete user by id
var delUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, ModelUser.deleteUser(id)];
            case 1:
                user = _a.sent();
                res.json({
                    status: 'success',
                    data: user,
                    message: 'user deleted'
                });
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
var lastUser = function (app) {
    app.post('/users', createUser);
    app.get('/users', authen_middleware_1.default, showAllUsers);
    app.get('/users/:id', authen_middleware_1.default, showUser);
    app.post('/authen', authenticate);
    app.put('/user/:id', authen_middleware_1.default, updUser);
    app.delete('/user/:id', authen_middleware_1.default, delUser);
};
exports.default = lastUser;
