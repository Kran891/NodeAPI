import { BagService, IBagService } from "../../core/services/bag-service";
import { BagStorage, IBagStorage } from "../../core/storage/bag-storage";
import { BagHandler, IBagHandler } from "../handlers/bag-handler";
import asyncErrorMiddleware from "../middlewares/async-error-middleware";

const bagStorage:IBagStorage=new BagStorage();
const bagService:IBagService=new BagService(bagStorage)
const bagHandler:IBagHandler=new BagHandler(bagService);
const getBagsAsync=asyncErrorMiddleware(bagHandler.getAllBags.bind(bagHandler))
const deleteBagAsync=asyncErrorMiddleware(bagHandler.deleteBag.bind(bagHandler))
const updateBagAsync=asyncErrorMiddleware(bagHandler.update.bind(bagHandler))
const createBagAsync=asyncErrorMiddleware(bagHandler.createBag.bind(bagHandler))
const getBagByIdAsync=asyncErrorMiddleware(bagHandler.getById.bind(bagHandler))
export {getBagsAsync,deleteBagAsync,updateBagAsync,createBagAsync,getBagByIdAsync}