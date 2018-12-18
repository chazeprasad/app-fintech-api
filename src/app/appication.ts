import { PaperBoat, IRoutable} from '../paperboat'
import { UserController } from './controller/user.controller';
import { BankController } from './controller/bank.controller';
import { AccountController } from './controller/account.controller';
import { PaymentController } from './controller/payment.controller';
import { ActivityController } from './controller/activity.controller';
import * as express from 'express';
import { AuthenticationController } from './controller/authentication.controller';


export class Application extends PaperBoat implements IRoutable {
    constructor() {
        super();
    }

    public init(): void {
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

        let userCtrl = new UserController();
        let authCtrl = new AuthenticationController();
        let bankCtrl = new BankController();
        let accountCtrl = new AccountController();
        let paymentCtrl = new PaymentController();
        let activitytCtrl = new ActivityController();
        
        this.express.use('/', userCtrl.router);
        this.express.use('/', authCtrl.router);
        this.express.use('/', bankCtrl.router);
        this.express.use('/', accountCtrl.router);
        this.express.use('/', paymentCtrl.router);
        this.express.use('/', activitytCtrl.router);
        this.express.use('/', router);
    }

}
