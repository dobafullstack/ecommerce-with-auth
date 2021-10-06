import md5 from "md5";
import { model, Schema } from "mongoose";
import Logger from "../Configs/logger";
import TAG_DEFINE from "../Constants/define";

interface User {
    username: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    role_id: string;
}

var validateEmail = function (email: string) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        min: [6, "username must be at least 6 character"],
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validateEmail,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        required: true,
    },
    role_id:{
        type: String,
        ref: TAG_DEFINE.SCHEMA.ROLE,
        required: true,
    }
});

UserSchema.pre<User>("save", function (next) {
    const user = this;

    user.password = md5(this.password);

    next();
});

UserSchema.post("save", function (error: any, doc: any, next: any) {
    if (error.code === 11000 || error.name === "MongoServerError") {
        const key = error.keyValue;

        if (key.username !== undefined) {
            next(new Error("Username already existed"));
        }

        if (key.email !== undefined) {
            next(new Error("Email already existed"));
        }
    }

    next();
});

const UserModel = model<User>(TAG_DEFINE.SCHEMA.USER, UserSchema);

export default UserModel;
