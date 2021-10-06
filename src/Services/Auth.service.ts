import { Request, Response } from "express";
import Logger from "../Configs/logger";
import UserModel from "../Models/User.model";
import jwt from "jsonwebtoken";
import md5 from "md5";
import RoleModel from "../Models/Role.model";

export default class AuthService {
    //Login
    public static async LoginService(req: Request, res: Response) {
        const { username } = req.body;
        const password = md5(req.body.password);

        try {
            if (!username || !password) {
                res.status(400).json({
                    message: "Bad request",
                });
                return;
            }
            const existingUser = await UserModel.findOne({ username });

            if (!existingUser || existingUser.password !== password) {
                res.status(403).json({
                    message: "Username or password is not correct!",
                });
                return;
            }

            const token = jwt.sign(
                { _id: existingUser?._id, role_id: existingUser.role_id },
                process.env.SECRET_JWT || "hihi",
                { expiresIn: "1 day" }
            );

            res.status(200).json({
                token,
            });
        } catch (error: any) {
            Logger.error(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    }

    //Register
    public static async RegisterService(req: Request, res: Response){
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

            res.status(201).json({
                message: "Register successful",
            });
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
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
