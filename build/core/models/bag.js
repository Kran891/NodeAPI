"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bagSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true,
    },
    noOfReviews: {
        type: Number,
        required: true,
        default: 0
    },
    spectifications: {
        type: Array
    },
    tumbnails: {
        type: Array
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});
bagSchema.statics.build = (bag) => {
    return new Bag(bag);
};
const Bag = mongoose_1.default.model('bag', bagSchema);
exports.Bag = Bag;
