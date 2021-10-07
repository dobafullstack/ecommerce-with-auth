import { Request, Response } from "express";
import Logger from "../Configs/logger";
import RoleService from "../Services/Role.service";

export default class RoleController {
    public static async GetAllRolesController(req: Request, res: Response) {
        try {
            const json = await RoleService.GetAllRolesService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                code: 500,
                result: null,
                message
            });
        }
    }

    public static async GetDetailRoleController(req: Request, res: Response) {
        try {
            const json = await RoleService.GetDetailRoleService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                code: 500,
                result: null,
                message
            });
        }
    }

    public static async CreateRoleController(req: Request, res: Response) {
        try {
            const json = await RoleService.CreateRoleService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                code: 500,
                result: null,
                message
            });
        }
    }

    public static async UpdateRoleController(req: Request, res: Response) {
        try {
            const json = await RoleService.UpdateRoleService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                code: 500,
                result: null,
                message
            });
        }
    }

    public static async DeleteRoleController(req: Request, res: Response) {
        try {
            const json = await RoleService.DeleteRoleService(req, res);

            res.status(200).json(json);
        } catch ({ message }) {
            Logger.error(message);
            res.status(500).json({
                code: 500,
                result: null,
                message
            });
        }
    }
}
