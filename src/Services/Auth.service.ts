import { Request, Response } from "express";
import Logger from "../Configs/logger";
import UserModel from "../Models/User.model";
import jwt from "jsonwebtoken";
import md5 from "md5";
import RoleModel from "../Models/Role.model";
import CommonFunction from "../Utils/CommonFunction";
import TAG_DEFINE from "../Constants/define";

export default class AuthService {
    //Login
    public static async LoginService(req: Request, res: Response) {
        const { username } = req.body;
        const password = md5(req.body.password);

        try {
            if (!username || !password) {
                return CommonFunction.GetActionResult(400, null, {
                    message: "Bad request",
                });
            }
            const existingUser = await UserModel.findOne({ username });

            if (!existingUser || existingUser.password !== password) {
                return CommonFunction.GetActionResult(403, null, {
                    message: "Username or password is not correct",
                });
            }

            const token = jwt.sign(
                { _id: existingUser?._id, role_id: existingUser.role_id },
                process.env.SECRET_JWT || "hihi",
                { expiresIn: "1 day" }
            );

            return CommonFunction.GetActionResult(200, { token });
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    //Register
    public static async RegisterService(req: Request, res: Response) {
        const admin_role = await RoleModel.findOne({ name: "admin" });

        const token = req.headers["authorization"]?.split(" ")[1] || "";

        if (token) {
            console.log("has token");
            const decode = jwt.decode(token) as DecodeType;

            const role_id: string = decode.role_id;
        } else {
            console.log("has no token");
            const customer_role = await RoleModel.findOne({
                name: "customer",
            });

            req.body.role_id = customer_role?._id;
        }

        try {
            await UserModel.create(req.body);

            return CommonFunction.GetActionResult(201, TAG_DEFINE.RESULT.AUTH.REGISTER.SUCCESS);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
}

interface DecodeType {
    _id: string;
    role_id: string;
    iat: number;
    exp: number;
}
