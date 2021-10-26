import { Router } from "express";
import PATH from "../Constants/path";
import CategoryController from "../Controllers/Category.controller";
import AuthenticationMiddleware from "../Middlewares/Authentication.middleware";

const router = Router();

router.get(PATH.APP.START, CategoryController.GetAllCategoriesController);
router.get(
    PATH.CATEGORY.PARAMS,
    CategoryController.GetDetailCategoryController
);
router.post(
    PATH.APP.START,
    AuthenticationMiddleware,
    CategoryController.CreateCategoryController
);
router.put(
    PATH.CATEGORY.PARAMS,
    AuthenticationMiddleware,
    CategoryController.UpdateCategoryController
);
router.delete(
    PATH.CATEGORY.PARAMS,
    AuthenticationMiddleware,
    CategoryController.DeleteCategoryController
);

export default router;
