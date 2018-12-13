import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { User, IUserModel, IUser } from '../model/user.model';
import { RecordNotFoundError, AccountExistError } from '../util/error';
import { Message } from '../util/message';
import { ApiError } from '../../paperboat/core/error';
import { AuthenticateUser } from '../auth/authenticate-user';
import { Status } from '../util/status';
import { authoriseRequest, validateUser, setUser } from '../util/policy';


@Api({ 
    path: '/api/seller', 
    policies: [
        // { use: authoriseRequest, except:['create'] },
        { use: validateUser, only:['create'] },
        // { use: setUser, only:['show', 'update', 'destroy'] }
    ] 
})
export class SellerController extends ApiController {
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

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let users: Array<IUserModel> = await User.find({role:1}).select('-password').exec();

        res.json({
            content: users
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        try {
            let user: IUserModel;
            user = await User.findOne({ _id: req.params.id , role:1}).select('-password').populate({
                path: 'assets',
                model: 'Asset',
                populate: [
                    { path: 'photos', model: 'Photo' }
                ]
            }).exec();

            res.json({
                content: user
            });
        } catch (error) {
            next(error)
        }
        
        
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let userParams = req.body
        await req.context.item.updateOne(userParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let userParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }
}
