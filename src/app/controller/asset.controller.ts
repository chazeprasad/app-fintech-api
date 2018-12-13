import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Asset, IAssetModel, IAsset } from '../model/asset.model';
import { RecordNotFoundError, AccountExistError } from '../util/error';
import { Message } from '../util/message';
import { ApiError } from '../../paperboat/core/error';
import { Status } from '../util/status';
import { authoriseRequest, validateAsset, setAsset } from '../util/policy';


@Api({ 
    path: '/api/asset', 
    policies: [
        { use: authoriseRequest, only: [ 'create', 'update', 'destroy']},
        { use: validateAsset, only:['create'] },
        { use: setAsset, only:['show', 'update', 'destroy'] }
    ] 
})
export class AssetController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let asset: IAssetModel = await Asset.create(req.body)
            
            res.status(Status.CREATED).json({
                content: asset
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let assets: Array<IAssetModel> = await Asset.find().exec();

        res.json({
            content: assets
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        let asset:IAssetModel = await Asset.findOne({_id: req.params.id}).populate('photos owner').exec();
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
