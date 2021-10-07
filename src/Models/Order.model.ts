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
    name: string;
    phone: string;
    address: string;
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
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
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

OrderSchema.pre<Order>("save", function(next) {
    const order = this;

    order.updatedAt = new Date();

    next();
})

const OrderModel = model<Order>(TAG_DEFINE.SCHEMA.ORDER, OrderSchema);

export default OrderModel;
