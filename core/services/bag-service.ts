import { BagAttr } from "../models/bag";
import { IBagStorage } from "../storage/bag-storage";

interface IBagService{
    createBag(bag:BagAttr):Promise<BagAttr>;
    deleteBag(id:string):Promise<boolean>;
    update(id:string,bag:BagAttr):Promise<BagAttr | null>;
    getAllBags():Promise<BagAttr[]>
    getById(id:string):Promise<BagAttr | null>
}
class BagService implements IBagService{
    constructor(private bagStorage:IBagStorage){}
    async createBag(bag: BagAttr): Promise<BagAttr> {
        const bagSv=await this.bagStorage.createBag(bag);
        return bagSv
    }
    async deleteBag(id: string): Promise<boolean> {
        const bool=await this.bagStorage.deleteBag(id);
        if(!bool){
            throw new Error(`No Bag Found with Id ${id}`)
        }
        return bool
    }
    async update(id: string, bag: BagAttr): Promise<BagAttr | null> {
        const bagSv=await this.bagStorage.update(id,bag);
        if(!bagSv){
           throw new Error(`No Bag Found with Id ${id}`)
        }
        return bagSv
    }
    async getAllBags(): Promise<BagAttr[]> {
        const bags=await this.bagStorage.getAllBags()
        return bags
    }
    async getById(id: string): Promise<BagAttr | null> {
        const bag=await this.bagStorage.getById(id);
        if(!bag){
           throw new Error(`No Bag Found with Id ${id}`)
        }
        return bag
    }
    
}
export {IBagService,BagService}