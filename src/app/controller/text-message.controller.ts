import { Request, Response, NextFunction } from 'express'
import { Api, Get, Post, Put, Delete, ApiController, BeforeAction } from '../../paperboat/core/api';
import * as plivo from 'plivo';
import { Asset, IAsset, IAssetModel } from '../model/asset.model';

@Api({ 
    path: '/api/text-message', 
    policies: [] 
})
export class TextMessageController extends ApiController {
    public router;

    public static AUTH_ID:string = 'MAMTZLNMIXOTDLYZG3NG';
    public static AUTH_TOKEN:string = 'YjM2MGIwMzlkYWU1OGJhZWFkZTQ1YTZkOTNkMTll';
    public static FROM_NUMBER:string = '+14198777075';

    constructor() {
        super();
  
    }

    @Post('/test')
    async test(req:Request, res:Response, next:NextFunction) {
        let toNumber = '+919542685141'
        try {

            var plivo = require('plivo');
            var client = new plivo.Client(TextMessageController.AUTH_ID,TextMessageController.AUTH_TOKEN);
                client.messages.create(
                    TextMessageController.FROM_NUMBER, // src
                    toNumber, // dst
                    "Hello, how are you? ", // text
                ).then(function (response) {
                    console.log(response);
                    res.json({ content: "OK" })
                }, function (err) {
                    console.error(err);
                    next(err)
                });
            
            
        } catch (error) {
            next(error);
        }
       
    }
    @Post('/in')
    async in(req:Request, res:Response, next:NextFunction) {
        let from = req.body.From;
        let text = req.body.Text;
        let mid = req.body.MessageUUID;

        let asset:IAssetModel = await Asset.findOne( { houseNo: text } )

        let domain = 'https://yesbyowner.herokuapp.com'
        let url = domain + '/asset-view/' + asset._id;
        let toNumber = from;
        try {

            var plivo = require('plivo');
            var client = new plivo.Client(TextMessageController.AUTH_ID,TextMessageController.AUTH_TOKEN);
                client.messages.create(
                    TextMessageController.FROM_NUMBER, // src
                    toNumber, // dst
                    url // text
                ).then(function (response) {
                    console.log(response);
                    res.json({ content: "OK" })
                }, function (err) {
                    console.error(err);
                    next(err)
                });
            
            
        } catch (error) {
            next(error);
        }
       
    }

    
}
