import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Status } from '../util/status';
import { authoriseRequest} from '../util/policy';
import { IPaymentModel, Payment } from '../model/payment.model';
import * as Faker from 'faker'
import { IAccount, Account, IAccountModel } from '../model/account.model';

@Api({ 
    path: '/api/payment', 
    policies: [
        { use: authoriseRequest, only: [ 'create', 'index', 'show', 'update', 'destroy'] }
    ] 
})
export class PaymentController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            req.body.refereneceNo = this.randomRange(11111111, 99999999)
            // req.body.date = Date.now();
            let amount = req.body.amount
            let payment: IPaymentModel = await Payment.create(req.body)
            let fromAccount:IAccountModel = await Account.findOne({_id: req.body.fromAccount})
            let toAccount:IAccountModel = await Account.findOne({_id: req.body.toAccount})

            fromAccount.balance -= amount
            toAccount.balance += amount

            await fromAccount.save();
            await toAccount.save();
            
            res.status(Status.CREATED).json({
                content: payment
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let payments: Array<IPaymentModel> = await Payment.find().populate('bank user fromAccount toAccount').sort('-date').exec();

        res.json({
            content: payments
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        let payment:IPaymentModel = await Payment.findOne({_id: req.params.id}).populate('bank user fromAccount toAccount').exec();
        res.json({
            content: payment
        });
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let paymentParams = req.body
        await req.context.item.updateOne(paymentParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let paymentParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }

    randomRange(min,max): number // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
