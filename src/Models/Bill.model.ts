import { Schema, model } from "mongoose";
import TAG_DEFINE from "../Constants/define";

const ProductsField = {
    _id: false,
    product_id: {
        type: String,
        ref: TAG_DEFINE.SCHEMA.PRODUCT,
        required: true,
    },
    count: {
        type: Number,
        default: 1,
    },
};

interface Bill {
    user_id: string;
    products: typeof ProductsField[];
    totalPrice: number;
    createdAt: Date;
    updatedAt?: Date;
}

const BillSchema = new Schema<Bill>({
    user_id: {
        type: String,
        required: true,
    },
    products: {
        type: [ProductsField],
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: null,
    },
});

BillSchema.pre<Bill>('save', function(next){
    const bill = this;

    bill.updatedAt = new Date();

    next();
})

const BillModel = model<Bill>(TAG_DEFINE.SCHEMA.BILL, BillSchema);

export default BillModel;
