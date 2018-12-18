import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { User, IUserModel, IUser } from '../model/user.model';
import { RecordNotFoundError, AccountExistError } from '../util/error';
import { Message } from '../util/message';
import { ApiError } from '../../paperboat/core/error';
import { AuthenticateUser } from '../auth/authenticate-user';
import { Status } from '../util/status';
import { authoriseRequest } from '../util/policy';


@Api({ 
    path: '/api/user', 
    policies: [
        { use: authoriseRequest, except:['create'] },
    ] 
})
export class UserController extends ApiController {
    public router;

    constructor() {
        super();
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let exist = await User.findOne({username: req.body.username})
            if(exist){
                throw new AccountExistError();
            }
            let user: IUserModel = await User.create(req.body)

            let token = await new AuthenticateUser(req.body.username, req.body.password).execute();
            
            res.status(Status.CREATED).json({
                token: token,
                message: Message.ACCOUNT_CREATED
            })
        } catch (error) {
            next(error);
        }
       
    }
   
    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        res.json({
            content: req.context.item
        });
    }

}
