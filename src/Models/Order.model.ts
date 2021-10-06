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

interface Order {
    user_id: string;
    products: typeof ProductsField[];
    totalPrice: number;
    status: string;
    createdAt: Date;
    updatedAt?: Date;
}

const OrderSchema = new Schema<Order>({
    user_id: {
        type: String,
        ref: TAG_DEFINE.SCHEMA.USER,
        required: true,
    },
    products: {
        type: [ProductsField],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
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
    status: {
        type: String,
        default: "pending",
    },
});

const OrderModel = model<Order>(TAG_DEFINE.SCHEMA.ORDER, OrderSchema);

export default OrderModel;
