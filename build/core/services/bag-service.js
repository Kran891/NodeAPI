"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BagService = void 0;
class BagService {
    constructor(bagStorage) {
        this.bagStorage = bagStorage;
    }
    createBag(bag) {
        return __awaiter(this, void 0, void 0, function* () {
            const bagSv = yield this.bagStorage.createBag(bag);
            return bagSv;
        });
    }
    deleteBag(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bool = yield this.bagStorage.deleteBag(id);
            if (!bool) {
                throw new Error(`No Bag Found with Id ${id}`);
            }
            return bool;
        });
    }
    update(id, bag) {
        return __awaiter(this, void 0, void 0, function* () {
            const bagSv = yield this.bagStorage.update(id, bag);
            if (!bagSv) {
                throw new Error(`No Bag Found with Id ${id}`);
            }
            return bagSv;
        });
    }
    getAllBags() {
        return __awaiter(this, void 0, void 0, function* () {
            const bags = yield this.bagStorage.getAllBags();
            return bags;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bag = yield this.bagStorage.getById(id);
            if (!bag) {
                throw new Error(`No Bag Found with Id ${id}`);
            }
            return bag;
        });
    }
}
exports.BagService = BagService;
