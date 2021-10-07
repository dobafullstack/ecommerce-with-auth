import { Request, Response } from "express";
import Logger from "../Configs/logger";
import AuthService from "../Services/Auth.service";
import { ActionResult } from "../Utils/CommonFunction";

export default class AuthController {
    public static async LoginController(req: Request, res: Response) {
        try {
            const json: ActionResult = await AuthService.LoginService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message)
            res.status(500).json({
                code: 500,
                result: null,
                message: message,
            });
        }
    }
    
    public static async RegisterController(req: Request, res: Response) {
        try {
            const json: ActionResult = await AuthService.RegisterService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message)
            res.status(500).json({
                code: 500,
                result: null,
                message: message,
            });
        }
        
    }
}
