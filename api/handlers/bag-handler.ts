import { NextFunction, Request, Response } from "express";
import { BagAttr } from "../../core/models/bag";
import { IBagService } from "../../core/services/bag-service";
import { IBagStorage } from "../../core/storage/bag-storage";

interface IBagHandler{
    createBag(req:Request,res:Response,next:NextFunction):Promise<void>;
    deleteBag(req:Request,res:Response,next:NextFunction):Promise<void>;
    update(req:Request,res:Response,next:NextFunction):Promise<void>;
    getAllBags(req:Request,res:Response,next:NextFunction):Promise<void>
    getById(req:Request,res:Response,next:NextFunction):Promise<void>
}
class BagHandler implements IBagHandler{
    constructor(private bagSerive:IBagService){
    }
    async createBag(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {body}=req
        const bag=await this.bagSerive.createBag(body)
        res.status(201).json(bag)
    }
    async deleteBag(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id}=req.params
        const bool=await this.bagSerive.deleteBag(id)
        res.json(202).json(`Successfully deleted the Bag with Id ${id}`)
    }
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id}=req.params
        const {body}=req
        const bag=await this.bagSerive.update(id,body)
        res.json(bag)
    }
    async getAllBags(req: Request, res: Response, next: NextFunction): Promise<void> {
        const bags=await this.bagSerive.getAllBags()
        res.json(bags)
    }
    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        const bag=await this.bagSerive.getById(req.params.id)
        res.json(bag);
    }
    
}
export {IBagHandler,BagHandler}