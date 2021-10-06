import { Router } from "express";
import PATH from "../Constants/path";
import CategoryController from "../Controllers/Category.controller";

const router = Router();

router.get(PATH.APP.START, CategoryController.GetAllCategoriesController);
router.get(PATH.CATEGORY.PARAMS, CategoryController.GetDetailCategoryController);
router.post(PATH.APP.START, CategoryController.CreateCategoryController);
router.put(PATH.CATEGORY.PARAMS, CategoryController.UpdateCategoryController);
router.delete(PATH.CATEGORY.PARAMS, CategoryController.DeleteCategoryController);

export default router;
