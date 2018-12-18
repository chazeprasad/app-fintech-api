"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paperboat_1 = require("../paperboat");
const user_controller_1 = require("./controller/user.controller");
const bank_controller_1 = require("./controller/bank.controller");
const account_controller_1 = require("./controller/account.controller");
const payment_controller_1 = require("./controller/payment.controller");
const activity_controller_1 = require("./controller/activity.controller");
const express = require("express");
const authentication_controller_1 = require("./controller/authentication.controller");
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
        let authCtrl = new authentication_controller_1.AuthenticationController();
        let bankCtrl = new bank_controller_1.BankController();
        let accountCtrl = new account_controller_1.AccountController();
        let paymentCtrl = new payment_controller_1.PaymentController();
        let activitytCtrl = new activity_controller_1.ActivityController();
        this.express.use('/', userCtrl.router);
        this.express.use('/', authCtrl.router);
        this.express.use('/', bankCtrl.router);
        this.express.use('/', accountCtrl.router);
        this.express.use('/', paymentCtrl.router);
        this.express.use('/', activitytCtrl.router);
        this.express.use('/', router);
    }
}
exports.Application = Application;
