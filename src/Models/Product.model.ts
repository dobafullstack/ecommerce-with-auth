import { Schema, model } from "mongoose";
import TAG_DEFINE from "../Constants/define";

interface Product {
    name: string;
    price: number;
    quantity: number;
    category_id: string;
    rating_point: number;
    description: string;
}

const ProductSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category_id: {
        type: String,
        required: true,
        ref: TAG_DEFINE.SCHEMA.CATEGORY
    },
    rating_point: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: ""
    },
});

const ProductModel = model<Product>(TAG_DEFINE.SCHEMA.PRODUCT, ProductSchema);

export default ProductModel;
