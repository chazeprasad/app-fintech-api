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
var TextMessageController_1;
const api_1 = require("../../paperboat/core/api");
const asset_model_1 = require("../model/asset.model");
let TextMessageController = TextMessageController_1 = class TextMessageController extends api_1.ApiController {
    constructor() {
        super();
    }
    test(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // let toNumber = '+919542685141'
            let toNumber = TextMessageController_1.FROM_NUMBER;
            try {
                var plivo = require('plivo');
                var client = new plivo.Client(TextMessageController_1.AUTH_ID, TextMessageController_1.AUTH_TOKEN);
                client.messages.create(
                // TextMessageController.FROM_NUMBER, // src
                '+14195143173', // src
                toNumber, // dst
                "4417").then(function (response) {
                    console.log(response);
                    res.json({ content: "OK" });
                }, function (err) {
                    console.error(err);
                    next(err);
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    incoming(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                let from = req.body.From;
                let text = req.body.Text;
                let mid = req.body.MessageUUID;
                console.log(text);
                console.log(process.env.MONGODB_URI);
                let asset = yield asset_model_1.Asset.findOne({ houseNo: text });
                let domain = process.env.DOMAIN || 'http://127.0.0.1:8080';
                let url;
                let toNumber = from;
                let plivo = require('plivo');
                let client = new plivo.Client(TextMessageController_1.AUTH_ID, TextMessageController_1.AUTH_TOKEN);
                if (asset) {
                    console.log(asset);
                    url = domain + '/#/asset-view/' + asset._id;
                    client.messages.create(TextMessageController_1.FROM_NUMBER, // src
                    toNumber, // dst
                    url // text
                    ).then(function (response) {
                        console.log(response);
                        res.json({ content: "OK" });
                    }, function (err) {
                        console.error(err);
                        next(err);
                    });
                }
                else {
                    console.log(asset);
                    url = 'RECORD NOT FOUND';
                    client.messages.create(TextMessageController_1.FROM_NUMBER, // src
                    toNumber, // dst
                    url // text
                    ).then(function (response) {
                        console.log(response);
                        res.json({ content: "OK" });
                    }, function (err) {
                        console.error(err);
                        next(err);
                    });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
};
TextMessageController.AUTH_ID = 'MAMTZLNMIXOTDLYZG3NG';
TextMessageController.AUTH_TOKEN = 'YjM2MGIwMzlkYWU1OGJhZWFkZTQ1YTZkOTNkMTll';
TextMessageController.FROM_NUMBER = '+14198777075';
__decorate([
    api_1.Post('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], TextMessageController.prototype, "test", null);
__decorate([
    api_1.Post('/in'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], TextMessageController.prototype, "incoming", null);
TextMessageController = TextMessageController_1 = __decorate([
    api_1.Api({
        path: '/api/text-message',
        policies: []
    }),
    __metadata("design:paramtypes", [])
], TextMessageController);
exports.TextMessageController = TextMessageController;
