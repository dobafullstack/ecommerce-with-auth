import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import RoleModel from "../Models/Role.model";

//Admin & Staff can access
export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1] || "";
        const role = await RoleModel.findOne({
            name: { $in: ["admin", "staff"] },
        });

        const decode: any = jwt.decode(token);
        const role_id = decode.role_id;

        if (!role?._id.equals(role_id)) {
            res.status(401).json({
                message: "You are not have permission to access this route",
            });
            return;
        } else {
            return next();
        }
    } catch ({message}) {
        res.status(500).json({message});
        return;
    }
};


//Only admin role can access
export const Strict = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1] || "";
        const role = await RoleModel.findOne({
            name: 'admin',
        });

        const decode: any = jwt.decode(token);
        const role_id = decode.role_id;

        if (!role?._id.equals(role_id)) {
            res.status(401).json({
                message: "You are not have permission to access this route",
            });
            return;
        } else {
            return next();
        }
    } catch ({ message }) {
        res.status(500).json({ message });
        return;
    }
}
