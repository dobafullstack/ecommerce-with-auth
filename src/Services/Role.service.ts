import { Request, Response } from "express";
import Logger from "../Configs/logger";
import RoleModel from "../Models/Role.model";
import lodash from "lodash";
import CommonFunction from "../Utils/CommonFunction";

export default class RoleService {
    public static async GetAllRolesService(req: Request, res: Response) {
        try {
            const roles = await RoleModel.find();

            return CommonFunction.GetActionResult(200, roles);
        } catch ({ message }) {
            Logger.error(message);
            return CommonFunction.GetActionResult(403, null, { message });
        }
    }

    public static async GetDetailRoleService(req: Request, res: Response) {
        const { role_id } = req.params;
        try {
            const role = await RoleModel.findById(role_id);

            return CommonFunction.GetActionResult(200, role);
        } catch ({ message }) {
            Logger.error(message);
            return CommonFunction.GetActionResult(403, null, { message });
        }
    }

    public static async CreateRoleService(req: Request, res: Response) {
        try {
            await RoleModel.create(req.body);

            return CommonFunction.GetActionResult(201, {
                message: "Create role success",
            });
        } catch ({ message }) {
            Logger.error(message);
            return CommonFunction.GetActionResult(400, null, {
                message,
            });
        }
    }

    public static async UpdateRoleService(req: Request, res: Response) {
        const { role_id } = req.params;

        try {
            const role = await RoleModel.findById(role_id);

            lodash.extend(role, req.body);
            role?.save();

            return CommonFunction.GetActionResult(200, {
                message: "Update role success",
            });
        } catch ({ message }) {
            Logger.error(message);
            return CommonFunction.GetActionResult(400, null, {
                message,
            });
        }
    }

    public static async DeleteRoleService(req: Request, res: Response) {
        const { role_id } = req.params;

        try {
            await RoleModel.findByIdAndDelete(role_id);

            return CommonFunction.GetActionResult(200, {
                message: "Delete role success",
            });
        } catch ({ message }) {
            Logger.error(message);
            return CommonFunction.GetActionResult(400, null, {
                message,
            });
        }
    }
}
