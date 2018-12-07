import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express'
import { Message } from './message';
import { JsonWebToken } from './json-web-token';
import { User } from '../model/user.model';
import { MissingTokenError, UnauthorizedError, ValidationError, RecordNotFoundError } from './error';
import { Asset } from '../model/asset.model';
import { Photo } from '../model/photo.model';

export async function authoriseRequest(req:Request, res:Response, next:NextFunction){
    let header = req.get('Authorization');
        let decoded_auth_token
        let user
        try {
            if(!header){
                next( new MissingTokenError() )
            }
            decoded_auth_token = await JsonWebToken.Decode(header); 

            let user = await User.findOne({_id: decoded_auth_token.uid})
            


            if(!user){
                next( new UnauthorizedError() )
            }
            req.context.currentUser = user;
            next()
        } catch (error) {
            console.log(error)
            next(error) 
        }
}

export async function validateUser(req:Request, res:Response, next:NextFunction){
    req.body.email = req.body.username;
    let schema = Joi.object().keys({
        username: Joi.string().email().required(),
        password: Joi.string().required(),
        passwordConfirmation: Joi.string(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string(),
        homePhone: Joi.string(),
        address: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.number(),
        role: Joi.number(),
        assets: Joi.array()

    });
    
    try {
        await Joi.validate(req.body, schema)  
        next()
    } catch (error) {
        next( new ValidationError(error.message.replace(/\"/g, "'")) )
    }
}

export async function validateLoginPayload(req:Request, res:Response, next:NextFunction){
    
    let schema = Joi.object().keys({
        username: Joi.string().email().required(),
        password: Joi.string().required()

    });
    
    try {
        await Joi.validate(req.body, schema)  
        next()
    } catch (error) {
        next( new ValidationError(error.message.replace(/\"/g, "'")) )
    }
}

export async function setUser(req:Request, res:Response, next:NextFunction){
    
    try {
        let user  = await User.findOne({_id: req.params.id}).select('-password').exec(); 
        if(!user){
            next(new RecordNotFoundError()) 
        } 
        req.context.item = user;
        next()
    } catch (error) {
        console.log(error)
        next(new RecordNotFoundError(error.message))
    }
}

export async function validateAsset(req:Request, res:Response, next:NextFunction){
    req.body.email = req.body.username;
    let schema = Joi.object().keys({
        isActive: Joi.boolean(),
        owner: Joi.string(),
        description: Joi.string(),
        houseNo: Joi.string().required(),
        address: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.number(),
        lat: Joi.number(),
        lng: Joi.number(),
        numBedrooms: Joi.number(),
        numBathrooms: Joi.number(),
        yearBuilt: Joi.number(),
        squareFootage: Joi.number(),
        occupancyStatus: Joi.string(),
        lotSize: Joi.number(),
        exteriorDetails: Joi.string(),
        foundationDetails: Joi.string(),
        roofDetails: Joi.string(),
        lotDetails: Joi.string(),
        garageDetails: Joi.string(),
        parkingDetails: Joi.string(),
        photos: Joi.array(),

    });
    
    try {
        await Joi.validate(req.body, schema)  
        next()
    } catch (error) {
        next( new ValidationError(error.message.replace(/\"/g, "'")) )
    }
}


export async function setAsset(req:Request, res:Response, next:NextFunction){
    
    try {
        let item  = await Asset.findOne({_id: req.params.id}); 
        if(!item){
            next(new RecordNotFoundError()) 
        } 
        req.context.item = item;
        next()
    } catch (error) {
        console.log(error)
        next(new RecordNotFoundError(error.message))
    }
}

export async function validatePhoto(req:Request, res:Response, next:NextFunction){
    req.body.email = req.body.username;
    let schema = Joi.object().keys({
        url: Joi.string(),
        thumbnailUrl: Joi.string(),
        originalUrl: Joi.string(),
        altText: Joi.string(),
        title: Joi.string(),
        asset: Joi.string()

    });
    
    try {
        await Joi.validate(req.body, schema)  
        next()
    } catch (error) {
        next( new ValidationError(error.message.replace(/\"/g, "'")) )
    }
}

export async function setPhoto(req:Request, res:Response, next:NextFunction){
    try {
        let item  = await Photo.findOne({_id: req.params.id}); 
        if(!item){
            next(new RecordNotFoundError()) 
        } 
        req.context.item = item;
        next()
    } catch (error) {
        console.log(error)
        next(new RecordNotFoundError(error.message))
    }
}

