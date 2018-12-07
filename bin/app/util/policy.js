"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const json_web_token_1 = require("./json-web-token");
const user_model_1 = require("../model/user.model");
const error_1 = require("./error");
const asset_model_1 = require("../model/asset.model");
const photo_model_1 = require("../model/photo.model");
function authoriseRequest(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let header = req.get('Authorization');
        let decoded_auth_token;
        let user;
        try {
            if (!header) {
                next(new error_1.MissingTokenError());
            }
            decoded_auth_token = yield json_web_token_1.JsonWebToken.Decode(header);
            let user = yield user_model_1.User.findOne({ _id: decoded_auth_token.uid });
            if (!user) {
                next(new error_1.UnauthorizedError());
            }
            req.context.currentUser = user;
            next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
}
exports.authoriseRequest = authoriseRequest;
function validateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.email = req.body.username;
        let schema = Joi.object().keys({
            username: Joi.string().email().required(),
            password: Joi.string().required(),
            passwordConfirmation: Joi.string(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string(),
            homePhone: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.number(),
            role: Joi.number(),
            assets: Joi.array()
        });
        try {
            yield Joi.validate(req.body, schema);
            next();
        }
        catch (error) {
            next(new error_1.ValidationError(error.message.replace(/\"/g, "'")));
        }
    });
}
exports.validateUser = validateUser;
function validateLoginPayload(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let schema = Joi.object().keys({
            username: Joi.string().email().required(),
            password: Joi.string().required()
        });
        try {
            yield Joi.validate(req.body, schema);
            next();
        }
        catch (error) {
            next(new error_1.ValidationError(error.message.replace(/\"/g, "'")));
        }
    });
}
exports.validateLoginPayload = validateLoginPayload;
function setUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield user_model_1.User.findOne({ _id: req.params.id }).select('-password').exec();
            if (!user) {
                next(new error_1.RecordNotFoundError());
            }
            req.context.item = user;
            next();
        }
        catch (error) {
            console.log(error);
            next(new error_1.RecordNotFoundError(error.message));
        }
    });
}
exports.setUser = setUser;
function validateAsset(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.email = req.body.username;
        let schema = Joi.object().keys({
            isActive: Joi.boolean(),
            owner: Joi.string(),
            description: Joi.string(),
            houseNo: Joi.string().required(),
            address: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.number(),
            lat: Joi.number(),
            lng: Joi.number(),
            numBedrooms: Joi.number(),
            numBathrooms: Joi.number(),
            yearBuilt: Joi.number(),
            squareFootage: Joi.number(),
            occupancyStatus: Joi.string(),
            lotSize: Joi.number(),
            exteriorDetails: Joi.string(),
            foundationDetails: Joi.string(),
            roofDetails: Joi.string(),
            lotDetails: Joi.string(),
            garageDetails: Joi.string(),
            parkingDetails: Joi.string(),
            photos: Joi.array(),
        });
        try {
            yield Joi.validate(req.body, schema);
            next();
        }
        catch (error) {
            next(new error_1.ValidationError(error.message.replace(/\"/g, "'")));
        }
    });
}
exports.validateAsset = validateAsset;
function setAsset(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let item = yield asset_model_1.Asset.findOne({ _id: req.params.id });
            if (!item) {
                next(new error_1.RecordNotFoundError());
            }
            req.context.item = item;
            next();
        }
        catch (error) {
            console.log(error);
            next(new error_1.RecordNotFoundError(error.message));
        }
    });
}
exports.setAsset = setAsset;
function validatePhoto(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.email = req.body.username;
        let schema = Joi.object().keys({
            url: Joi.string(),
            thumbnailUrl: Joi.string(),
            originalUrl: Joi.string(),
            altText: Joi.string(),
            title: Joi.string(),
            asset: Joi.string()
        });
        try {
            yield Joi.validate(req.body, schema);
            next();
        }
        catch (error) {
            next(new error_1.ValidationError(error.message.replace(/\"/g, "'")));
        }
    });
}
exports.validatePhoto = validatePhoto;
function setPhoto(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let item = yield photo_model_1.Photo.findOne({ _id: req.params.id });
            if (!item) {
                next(new error_1.RecordNotFoundError());
            }
            req.context.item = item;
            next();
        }
        catch (error) {
            console.log(error);
            next(new error_1.RecordNotFoundError(error.message));
        }
    });
}
exports.setPhoto = setPhoto;
