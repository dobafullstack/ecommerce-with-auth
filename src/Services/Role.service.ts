import { Request, Response } from "express";
import Logger from "../Configs/logger";
import RoleModel from "../Models/Role.model";
import lodash from "lodash";

export default class RoleService {
    public static async GetAllRolesService(req: Request, res: Response) {
        try {
            const roles = await RoleModel.find();

            res.status(200).json(roles);
        } catch ({ message }) {
            Logger.error(message);
            res.status(403).json({
                message,
            });
        }
    }

    public static async GetDetailRoleService(req: Request, res: Response) {
        const { role_id } = req.params;
        try {
            const role = await RoleModel.findById(role_id);

            res.status(200).json(role);
        } catch ({ message }) {
            Logger.error(message);
            res.status(403).json({ message });
        }
    }

    public static async CreateRoleService(req: Request, res: Response) {
        try {
            await RoleModel.create(req.body);

            res.status(201).json({ message: "Create role success" });
        } catch ({ message }) {
            Logger.error(message);
            res.status(400).json({ message });
        }
    }

    public static async UpdateRoleService(req: Request, res: Response) {
        const { role_id } = req.params;

        try {
            const role = await RoleModel.findById(role_id);

            lodash.extend(role, req.body);

            res.status(200).json({ message: "Update role success" });
        } catch ({ message }) {
            Logger.error(message);
            res.status(403).json({ message });
        }
    }

    public static async DeleteRoleService(req: Request, res: Response) {
        const { role_id } = req.params;

        try {
            await RoleModel.findByIdAndDelete(role_id);

            res.status(200).json({ message: "Delete role success" });
        } catch ({ message }) {
            Logger.error(message);
            res.status(403).json({ message });
        }
    }
}
