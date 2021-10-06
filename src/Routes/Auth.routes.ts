import { Router } from "express"; 
import PATH from "../Constants/path";
import AuthController from "../Controllers/auth.controller";

const router = Router();

router.post(PATH.AUTH.LOGIN, AuthController.LoginController);
router.post(PATH.AUTH.REGISTER, AuthController.RegisterController);

export default router;