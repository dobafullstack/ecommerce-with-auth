import { Schema, model } from "mongoose";
import TAG_DEFINE from "../Constants/define";

interface Category {
    name: string;
}

const CategorySchema = new Schema<Category>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const CategoryModel = model<Category>(TAG_DEFINE.SCHEMA.CATEGORY, CategorySchema);

export default CategoryModel;
