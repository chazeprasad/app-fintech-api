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
const payment_model_1 = require("../model/payment.model");
const account_model_1 = require("../model/account.model");
let PaymentController = class PaymentController extends api_1.ApiController {
    constructor() {
        super();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.refereneceNo = this.randomRange(11111111, 99999999);
                // req.body.date = Date.now();
                let amount = req.body.amount;
                let payment = yield payment_model_1.Payment.create(req.body);
                let fromAccount = yield account_model_1.Account.findOne({ _id: req.body.fromAccount });
                let toAccount = yield account_model_1.Account.findOne({ _id: req.body.toAccount });
                fromAccount.balance -= amount;
                toAccount.balance += amount;
                yield fromAccount.save();
                yield toAccount.save();
                res.status(status_1.Status.CREATED).json({
                    content: payment
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let payments = yield payment_model_1.Payment.find().populate('bank user fromAccount toAccount').sort('-date').exec();
            res.json({
                content: payments
            });
        });
    }
    show(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let payment = yield payment_model_1.Payment.findOne({ _id: req.params.id }).populate('bank user fromAccount toAccount').exec();
            res.json({
                content: payment
            });
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let paymentParams = req.body;
            yield req.context.item.updateOne(paymentParams);
            res.sendStatus(status_1.Status.NO_CONTENT);
        });
    }
    destroy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let paymentParams = req.body;
            yield req.context.item.remove();
            res.sendStatus(status_1.Status.NO_CONTENT);
        });
    }
    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
__decorate([
    api_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "create", null);
__decorate([
    api_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "index", null);
__decorate([
    api_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "show", null);
__decorate([
    api_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "update", null);
__decorate([
    api_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "destroy", null);
PaymentController = __decorate([
    api_1.Api({
        path: '/api/payment',
        policies: [
            { use: policy_1.authoriseRequest, only: ['create', 'index', 'show', 'update', 'destroy'] }
        ]
    }),
    __metadata("design:paramtypes", [])
], PaymentController);
exports.PaymentController = PaymentController;
