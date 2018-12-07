import { PaperBoat, IRoutable} from '../paperboat'
import { UserController } from './controller/user.controller';
import * as express from 'express';
import { AuthenticationController } from './controller/authentication.controller';
import { AssetController } from './controller/asset.controller';
import { PhotoController } from './controller/photo.controller';
import { TextMessageController } from './controller/text-message.controller';
// import { swaggerConfig } from './config/swagger-config';

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
        let assetCtrl = new AssetController();
        let photoCtrl = new PhotoController();
        let textMessageCtrl = new TextMessageController();
        
        this.express.use('/', userCtrl.router);
        this.express.use('/', authCtrl.router);
        this.express.use('/', assetCtrl.router);
        this.express.use('/', photoCtrl.router);
        this.express.use('/', textMessageCtrl.router);

        this.express.use('/', router);
    }

}
