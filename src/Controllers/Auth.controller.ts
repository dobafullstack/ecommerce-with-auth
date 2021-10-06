import { Request, Response } from "express";
import Logger from "../Configs/logger";
import AuthService from "../Services/Auth.service";

export default class AuthController {
    public static async LoginController(req: Request, res: Response) {
        try {
            await AuthService.LoginService(req, res);
        } catch ({ message }) {
            Logger.error(message)
            res.status(500).json({
                message: message,
            });
        }
    }
    
    public static async RegisterController(req: Request, res: Response) {
        try {
            await AuthService.RegisterService(req, res);
        } catch ({ message }) {
            Logger.error(message)
            res.status(500).json({
                message: message,
            });
        }
        
    }
}
