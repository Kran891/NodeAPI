import { NextFunction, Request, Response } from "express"
import { middleware } from "express-openapi-validator"

type Middleware=(req:Request,res:Response,next:NextFunction)=>Promise<void>
const asyncErrorMiddleware=(middleware:Middleware)=>async (req:Request,res:Response,next:NextFunction)=>{
    try{
        await middleware(req,res,next)
       }catch(err){
        next(err)
       } 
}
export default asyncErrorMiddleware
  