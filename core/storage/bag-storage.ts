import { Bag, BagAttr } from "../models/bag";

interface IBagStorage{
    createBag(bag:BagAttr):Promise<BagAttr>;
    deleteBag(id:string):Promise<boolean>;
    update(id:string,bag:BagAttr):Promise<BagAttr | null>;
    getAllBags():Promise<BagAttr[]>
    getById(id:string):Promise<BagAttr | null>
}
class BagStorage implements IBagStorage{
    async createBag(bag: BagAttr): Promise<BagAttr> {
        const bagDb=Bag.build(bag);
        await bagDb.save();
        return bagDb;
    }
    async deleteBag(id: string): Promise<boolean> {
        const bagDb=await Bag.findByIdAndDelete(id)
        return !!bagDb
    }
    async update(id:string,bag: BagAttr): Promise<BagAttr | null> {
        const bagDb=await Bag.findByIdAndUpdate(id,bag,{new:true});
        return bagDb
    }
    async getAllBags(): Promise<BagAttr[]> {
        const bags=await Bag.find({})
        return bags
    }
    async getById(id: string): Promise<BagAttr | null> {
       const bag=await Bag.findById(id)
       return bag
    }
    
}
export {IBagStorage,BagStorage};