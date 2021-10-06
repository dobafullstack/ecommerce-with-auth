import { Request, Response } from "express";
import Logger from "../Configs/logger";
import RoleService from "../Services/Role.service";

export default class RoleController {
    public static async GetAllRolesController(req: Request, res: Response) {
        try {
            await RoleService.GetAllRolesService(req, res);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                message,
            });
        }
    }

    public static async GetDetailRoleController(req: Request, res: Response) {
        try {
            await RoleService.GetDetailRoleService(req, res);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({ message });
        }
    }

    public static async CreateRoleController(req: Request, res: Response) {
        try {
            await RoleService.CreateRoleService(req, res);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({ message });
        }
    }

    public static async UpdateRoleController(req: Request, res: Response) {
        try {
            await RoleService.UpdateRoleService(req, res);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({ message });
        }
    }

    public static async DeleteRoleController(req: Request, res: Response) {
        try {
            await RoleService.DeleteRoleService(req, res);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({ message });
        }
    }
}
