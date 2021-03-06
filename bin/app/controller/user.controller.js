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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../paperboat/core/api");
const user_model_1 = require("../model/user.model");
const error_1 = require("../util/error");
const message_1 = require("../util/message");
const authenticate_user_1 = require("../auth/authenticate-user");
const status_1 = require("../util/status");
const policy_1 = require("../util/policy");
let UserController = class UserController extends api_1.ApiController {
    constructor() {
        super();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let exist = yield user_model_1.User.findOne({ username: req.body.username });
                if (exist) {
                    throw new error_1.AccountExistError();
                }
                let user = yield user_model_1.User.create(req.body);
                let token = yield new authenticate_user_1.AuthenticateUser(req.body.username, req.body.password).execute();
                res.status(status_1.Status.CREATED).json({
                    token: token,
                    message: message_1.Message.ACCOUNT_CREATED
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    show(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({
                content: req.context.item
            });
        });
    }
};
__decorate([
    api_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    api_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "show", null);
UserController = __decorate([
    api_1.Api({
        path: '/api/user',
        policies: [
            { use: policy_1.authoriseRequest, except: ['create'] },
        ]
    }),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
