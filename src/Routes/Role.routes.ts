import { Router } from "express";
import PATH from "../Constants/path";
import RoleController from "../Controllers/role.controller";

const router = Router();

router.get(PATH.APP.START, RoleController.GetAllRolesController);
router.get(PATH.ROLE.PARAMS, RoleController.GetDetailRoleController);
router.post(PATH.APP.START, RoleController.CreateRoleController);
router.put(PATH.ROLE.PARAMS, RoleController.UpdateRoleController);
router.delete(PATH.ROLE.PARAMS, RoleController.DeleteRoleController);

export default router;
