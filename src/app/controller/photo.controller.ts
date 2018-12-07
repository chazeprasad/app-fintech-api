import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import { Photo, IPhotoModel, IPhoto } from '../model/photo.model';
import { RecordNotFoundError, AccountExistError } from '../util/error';
import { Message } from '../util/message';
import { ApiError } from '../../paperboat/core/error';
import { Status } from '../util/status';
import { authoriseRequest, validatePhoto, setPhoto } from '../util/policy';


@Api({ 
    path: '/api/photo', 
    policies: [
        authoriseRequest,
        { use: validatePhoto, only:['create'] },
        { use: setPhoto, only:['show', 'update', 'destroy'] }
    ] 
})
export class PhotoController extends ApiController {
    public router;

    constructor() {
        super();
        
    }

    @Post('/')
    async create(req:Request, res:Response, next:NextFunction) {
        try {
            
            let photo: IPhotoModel = await Photo.create(req.body)
            
            res.status(Status.CREATED).json({
                content: photo
            })
        } catch (error) {
            next(error);
        }
       
    }

    @Get('/')
    async index(req:Request, res:Response, next:NextFunction) {
        let photos: Array<IPhotoModel> = await Photo.find().select('-password').exec();

        res.json({
            content: photos
        });

    }

    @Get('/:id')
    async show(req:Request, res:Response, next:NextFunction) {
        
        res.json({
            content: req.context.item
        });
    }

    @Put('/:id')
    async update(req:Request, res:Response, next:NextFunction) {
        let photoParams = req.body
        await req.context.item.updateOne(photoParams)
        res.sendStatus(Status.NO_CONTENT);
    }

    @Delete('/:id')
    async destroy(req:Request, res:Response, next:NextFunction) {
        let photoParams = req.body
        await req.context.item.remove()
        res.sendStatus(Status.NO_CONTENT);
    }
}
