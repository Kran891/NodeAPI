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
exports.BagHandler = void 0;
class BagHandler {
    constructor(bagSerive) {
        this.bagSerive = bagSerive;
    }
    createBag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const bag = yield this.bagSerive.createBag(body);
            res.status(201).json(bag);
        });
    }
    deleteBag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const bool = yield this.bagSerive.deleteBag(id);
            res.json(202).json(`Successfully deleted the Bag with Id ${id}`);
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            const bag = yield this.bagSerive.update(id, body);
            res.json(bag);
        });
    }
    getAllBags(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const bags = yield this.bagSerive.getAllBags();
            res.json(bags);
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const bag = yield this.bagSerive.getById(req.params.id);
            res.json(bag);
        });
    }
}
exports.BagHandler = BagHandler;
