import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Logger from "../Configs/logger";

export default async (req: Request, res: Response, next: NextFunction) => {
    if (req.path.includes("auth") || req.path.includes("product")) {
        return next();
    }

    const token = req.headers["authorization"]?.split(" ")[1] || "";

    try {
        await jwt.verify(token, process.env.SECRET_JWT || "hihi");
    } catch ({message}) {
        Logger.error(message);
        res.status(401).json({
            message
        })
        return;
    }

    next();
};
