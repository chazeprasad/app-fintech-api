import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express'
import { Message } from './message';
import { JsonWebToken } from './json-web-token';
import { User } from '../model/user.model';
import { MissingTokenError, UnauthorizedError, ValidationError, RecordNotFoundError } from './error';


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
