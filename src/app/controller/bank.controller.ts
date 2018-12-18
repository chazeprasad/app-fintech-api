import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Status } from '../util/status';
import { authoriseRequest} from '../util/policy';
import { IBankModel, Bank } from '../model/bank.model';


@Api({ 
    path: '/api/bank', 
    policies: [
        { use: authoriseRequest, only: [ 'create', 'index', 'show', 'update', 'destroy'] }
    ] 
})
export class BankController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let bank: IBankModel = await Bank.create(req.body)
            
            res.status(Status.CREATED).json({
                content: bank
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let banks: Array<IBankModel> = await Bank.find().exec();

        res.json({
            content: banks
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        let bank:IBankModel = await Bank.findOne({_id: req.params.id}).exec();
        res.json({
            content: bank
        });
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let bankParams = req.body
        await req.context.item.updateOne(bankParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let bankParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }
}
