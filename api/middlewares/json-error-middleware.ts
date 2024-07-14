import { NextFunction, Request,Response } from "express";
import { BadRequest } from "express-openapi-validator/dist/openapi.validator";

const jsonErrorMiddleware=(err:Error,req:Request,res:Response,_next:NextFunction)=>{
    if(err instanceof BadRequest)
        res.status(400).json(err.message)
    res.status(409).json(err.message)
}
export default jsonErrorMiddleware;