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
const status_1 = require("../util/status");
const policy_1 = require("../util/policy");
const account_model_1 = require("../model/account.model");
;
let AccountController = class AccountController extends api_1.ApiController {
    constructor() {
        super();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let account = yield account_model_1.Account.create(req.body);
                res.status(status_1.Status.CREATED).json({
                    content: account
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let accounts = yield account_model_1.Account.find().exec();
            res.json({
                content: accounts
            });
        });
    }
    show(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let account = yield account_model_1.Account.findOne({ _id: req.params.id }).exec();
            res.json({
                content: account
            });
        });
    }
    getUserAccount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let accounts = yield account_model_1.Account.find({ user: req.params.user, bank: req.params.bank }).exec();
            res.json({
                content: accounts
            });
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let accountParams = req.body;
            yield req.context.item.updateOne(accountParams);
            res.sendStatus(status_1.Status.NO_CONTENT);
        });
    }
    destroy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let accountParams = req.body;
            yield req.context.item.remove();
            res.sendStatus(status_1.Status.NO_CONTENT);
        });
    }
};
__decorate([
    api_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    api_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "index", null);
__decorate([
    api_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "show", null);
__decorate([
    api_1.Get('/user/:user/bank/:bank'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getUserAccount", null);
__decorate([
    api_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "update", null);
__decorate([
    api_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "destroy", null);
AccountController = __decorate([
    api_1.Api({
        path: '/api/account',
        policies: [
            { use: policy_1.authoriseRequest, only: ['create', 'index', 'show', 'update', 'destroy'] }
        ]
    }),
    __metadata("design:paramtypes", [])
], AccountController);
exports.AccountController = AccountController;
