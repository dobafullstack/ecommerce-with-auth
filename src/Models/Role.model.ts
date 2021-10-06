import { Schema, model } from "mongoose";
import TAG_DEFINE from "../Constants/define";

interface Role {
    name: string;
}

const RoleSchema = new Schema<Role>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const RoleModel = model<Role>(TAG_DEFINE.SCHEMA.ROLE, RoleSchema);

export default RoleModel;