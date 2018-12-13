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
        // let toNumber = '+919542685141'
        let toNumber = TextMessageController.FROM_NUMBER
        try {

            var plivo = require('plivo');
            var client = new plivo.Client(TextMessageController.AUTH_ID,TextMessageController.AUTH_TOKEN);
                client.messages.create(
                    // TextMessageController.FROM_NUMBER, // src
                    '+14195143173', // src
                    toNumber, // dst
                    "4417", // text
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
    async incoming(req:Request, res:Response, next:NextFunction) {
        try {
            console.log(req.body)
            let from = req.body.From;
            let text = req.body.Text;
            let mid = req.body.MessageUUID;

            console.log(text)
            console.log(process.env.MONGODB_URI)

            let asset:IAssetModel = await Asset.findOne({houseNo: text});
            let domain = process.env.DOMAIN || 'http://127.0.0.1:8080'
            let url;
            let toNumber = from;
            let plivo = require('plivo');
            let client = new plivo.Client(TextMessageController.AUTH_ID,TextMessageController.AUTH_TOKEN);

            if(asset){
                console.log(asset)
                url = domain + '/#/asset-view/' + asset._id;
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
            } else {
                console.log(asset)
                url = 'RECORD NOT FOUND';
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
            }
    } catch (error) {
        next(error);
    }
       
    }

    
}
