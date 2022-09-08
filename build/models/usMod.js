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
var database_1 = __importDefault(require("../database/database"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var myConfig_1 = __importDefault(require("../myConfig"));
var modelUser = /** @class */ (function () {
    function modelUser() {
    }
    modelUser.prototype.createUser = function (usType) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, sugar_1, hashword, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "INSERT INTO users (first_name, last_name, password) values ($1, $2, $3) returning *";
                        sugar_1 = parseInt(myConfig_1.default.sugar, 10);
                        hashword = function (pass) {
                            return bcrypt_1.default.hashSync("".concat(pass).concat(myConfig_1.default.pepp), sugar_1);
                        };
                        return [4 /*yield*/, connect.query(sql, [usType.first_name, usType.last_name, hashword(usType.password)])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("can not create user ".concat(err_1, "!!"));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    modelUser.prototype.showAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT * FROM users";
                        return [4 /*yield*/, connect.query(sql)];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("can not show all users ".concat(err_2, "!!"));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    modelUser.prototype.showUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT * FROM users WHERE id = ($1)";
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_3 = _a.sent();
                        throw new Error("can not get this user ".concat(err_3, "!!"));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    modelUser.prototype.authenticate = function (first_name, last_name, password) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, hashword, info, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = "SELECT password FROM users WHERE first_name =($1) AND last_name =($2)";
                        return [4 /*yield*/, connect.query(sql, [first_name, last_name])];
                    case 2:
                        result = _a.sent();
                        if (!result.rows.length) return [3 /*break*/, 4];
                        hashword = result.rows[0].password;
                        if (!bcrypt_1.default.compareSync("".concat(password).concat(myConfig_1.default.pepp), hashword)) return [3 /*break*/, 4];
                        return [4 /*yield*/, connect.query("SELECT id, first_name, last_name FROM users WHERE first_name = ($1) AND last_name = ($2)", [first_name, last_name])];
                    case 3:
                        info = _a.sent();
                        return [2 /*return*/, info.rows[0]];
                    case 4:
                        connect.release();
                        return [2 /*return*/, null];
                    case 5:
                        err_4 = _a.sent();
                        throw new Error("can not login ".concat(err_4, "!!"));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    modelUser.prototype.updateUser = function (usType) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sugar_2, hashword, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sugar_2 = parseInt(myConfig_1.default.sugar, 10);
                        hashword = function (pass) {
                            return bcrypt_1.default.hashSync("".concat(pass).concat(myConfig_1.default.pepp), sugar_2);
                        };
                        sql = 'UPDATE users SET first_name=($2), last_name=($3), password=($4)  WHERE id=($1) RETURNING id, first_name, last_name';
                        return [4 /*yield*/, connect.query(sql, [usType.id, usType.first_name, usType.last_name, hashword(usType.password)])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("unable to update user: ".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    modelUser.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        sql = 'DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name';
                        return [4 /*yield*/, connect.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("unable to delete user: ".concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return modelUser;
}());
exports.default = modelUser;
