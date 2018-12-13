"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paperboat_1 = require("../paperboat");
const user_controller_1 = require("./controller/user.controller");
const express = require("express");
const authentication_controller_1 = require("./controller/authentication.controller");
const asset_controller_1 = require("./controller/asset.controller");
const photo_controller_1 = require("./controller/photo.controller");
const text_message_controller_1 = require("./controller/text-message.controller");
const seller_controller_1 = require("./controller/seller.controller");
// import { swaggerConfig } from './config/swagger-config';
class Application extends paperboat_1.PaperBoat {
    constructor() {
        super();
    }
    init() {
        this.configureMiddleware();
        this.configureRoutes();
        this.configErrorHandling();
    }
    configureRoutes() {
        // swaggerConfig.setup(this.express);
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hi..!!'
            });
        });
        let userCtrl = new user_controller_1.UserController();
        let sellerCtrl = new seller_controller_1.SellerController();
        let authCtrl = new authentication_controller_1.AuthenticationController();
        let assetCtrl = new asset_controller_1.AssetController();
        let photoCtrl = new photo_controller_1.PhotoController();
        let textMessageCtrl = new text_message_controller_1.TextMessageController();
        this.express.use('/', userCtrl.router);
        this.express.use('/', sellerCtrl.router);
        this.express.use('/', authCtrl.router);
        this.express.use('/', assetCtrl.router);
        this.express.use('/', photoCtrl.router);
        this.express.use('/', textMessageCtrl.router);
        this.express.use('/', router);
    }
}
exports.Application = Application;
