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
const json_web_token_1 = require("./json-web-token");
const user_model_1 = require("../model/user.model");
const error_1 = require("./error");
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
