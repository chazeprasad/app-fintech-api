import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Status } from '../util/status';
import { authoriseRequest} from '../util/policy';
import { IActivityModel, Activity } from '../model/activity.model';


@Api({ 
    path: '/api/activity', 
    policies: [
        { use: authoriseRequest, only: [ 'create', 'index', 'show', 'update', 'destroy'] }
    ] 
})
export class ActivityController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let asset: IActivityModel = await Activity.create(req.body)
            
            res.status(Status.CREATED).json({
                content: asset
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let assets: Array<IActivityModel> = await Activity.find().populate('user bank').sort('-date').exec();

        res.json({
            content: assets
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        let asset:IActivityModel = await Activity.findOne({_id: req.params.id}).exec();
        res.json({
            content: asset
        });
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let assetParams = req.body
        await req.context.item.updateOne(assetParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let assetParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }
}
