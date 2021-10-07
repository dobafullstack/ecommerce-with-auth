import { Request, Response } from "express";
import lodash from "lodash";
import Logger from "../Configs/logger";
import TAG_DEFINE from "../Constants/define";
import CategoryModel from "../Models/Category.model";
import CommonFunction from "../Utils/CommonFunction";

export default class CategoryService {
    public static async GetAllCategoriesService(req: Request, res: Response) {
        try {
            const categories = await CategoryModel.find();

            return CommonFunction.GetActionResult(200, categories);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async GetDetailCategoryService(req: Request, res: Response) {
        const { category_id } = req.params;

        try {
            const category = await CategoryModel.findById(category_id);

            return CommonFunction.GetActionResult(200, category);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async CreateCategoryService(req: Request, res: Response) {
        try {
            await CategoryModel.create(req.body);

            return CommonFunction.GetActionResult(
                201,
                TAG_DEFINE.RESULT.CATEGORY.CREATE.SUCCESS
            );
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async UpdateCategoryService(req: Request, res: Response) {
        const { category_id } = req.params;

        try {
            const category = await CategoryModel.findById(category_id);

            lodash.extend(category, req.body);
            category?.save();

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.CATEGORY.UPDATE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async DeleteCategoryService(req: Request, res: Response) {
        const { category_id } = req.params;

        try {
            await CategoryModel.findByIdAndDelete(category_id);

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.CATEGORY.DELETE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
}
