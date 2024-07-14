import mongoose from "mongoose";


const bagSchema = new mongoose.Schema({
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
})
interface BagAttr {
    title: string,
    description: string,
    price: number,
    noOfReviews: number,
    spectifications: string[],
    tumbnails: string[],
    id?: string
}
interface BagDoc extends mongoose.Document {
    title: string,
    description: string,
    price: number,
    noOfReviews: number,
    spectifications: string[],
    tumbnails: string[],
    id?: string
}
interface BagModel extends mongoose.Model<BagDoc> {
    build(bag: BagAttr): BagDoc;
}

bagSchema.statics.build = (bag: BagAttr) => {
    return new Bag(bag);
}

const Bag = mongoose.model<BagDoc, BagModel>('bag', bagSchema);

export { Bag, BagAttr }