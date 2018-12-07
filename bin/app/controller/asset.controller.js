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
const asset_model_1 = require("../model/asset.model");
const status_1 = require("../util/status");
const policy_1 = require("../util/policy");
let AssetController = class AssetController extends api_1.ApiController {
    constructor() {
        super();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let asset = yield asset_model_1.Asset.create(req.body);
                res.status(status_1.Status.CREATED).json({
                    content: asset
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield asset_model_1.Asset.find().exec();
            res.json({
                content: assets
            });
        });
    }
    show(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let asset = yield asset_model_1.Asset.findOne({ _id: req.params.id }).populate('photos').exec();
            res.json({
                content: asset
            });
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetParams = req.body;
            yield req.context.item.updateOne(assetParams);
            res.sendStatus(status_1.Status.NO_CONTENT);
        });
    }
    destroy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetParams = req.body;
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
], AssetController.prototype, "create", null);
__decorate([
    api_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AssetController.prototype, "index", null);
__decorate([
    api_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AssetController.prototype, "show", null);
__decorate([
    api_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AssetController.prototype, "update", null);
__decorate([
    api_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AssetController.prototype, "destroy", null);
AssetController = __decorate([
    api_1.Api({
        path: '/api/asset',
        policies: [
            { use: policy_1.authoriseRequest, only: ['create', 'update', 'destroy'] },
            { use: policy_1.validateAsset, only: ['create'] },
            { use: policy_1.setAsset, only: ['show', 'update', 'destroy'] }
        ]
    }),
    __metadata("design:paramtypes", [])
], AssetController);
exports.AssetController = AssetController;
