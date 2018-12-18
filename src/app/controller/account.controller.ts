import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Status } from '../util/status';
import { authoriseRequest} from '../util/policy';
import { Account, IAccountModel } from '../model/account.model';
;


@Api({ 
    path: '/api/account', 
    policies: [
        { use: authoriseRequest, only: [ 'create', 'index', 'show', 'update', 'destroy'] }
    ] 
})
export class AccountController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let account: IAccountModel = await Account.create(req.body)
            
            res.status(Status.CREATED).json({
                content: account
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let accounts: Array<IAccountModel> = await Account.find().exec();

        res.json({
            content: accounts
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        let account:IAccountModel = await Account.findOne({_id: req.params.id}).exec();
        res.json({
            content: account
        });
    }
    @Get('/user/:user/bank/:bank')
    async getUserAccount(req:Request, res:Response, next:NextFunction) {
        
        let accounts:Array<IAccountModel> = await Account.find({user: req.params.user, bank: req.params.bank}).exec();
        res.json({
            content: accounts
        });
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let accountParams = req.body
        await req.context.item.updateOne(accountParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let accountParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }
}
