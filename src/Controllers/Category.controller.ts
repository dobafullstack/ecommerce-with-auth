import { Request, Response } from "express";
import Logger from "../Configs/logger";
import CategoryService from "../Services/Category.service";
import { ActionResult } from "../Utils/CommonFunction";


export default class CategoryController {
    public static async GetAllCategoriesController(req: Request, res: Response) {
        try {
            const json: ActionResult = await CategoryService.GetAllCategoriesService(req, res);

            res.status(200).json(json);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
                code: 500,
                result: null,
                error: {
                    message: error.message
                }
            })
        }
    }

    public static async GetDetailCategoryController(req: Request, res: Response) {
        try {
            const json: ActionResult = await CategoryService.GetDetailCategoryService(req, res);

            res.status(200).json(json);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
                code: 500,
                result: null,
                error: {
                    message: error.message
                }
            })
        }
    }

    public static async CreateCategoryController(req: Request, res: Response) {
        try {
            const json: ActionResult = await CategoryService.CreateCategoryService(req, res);

            res.status(200).json(json);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
                code: 500,
                result: null,
                error: {
                    message: error.message
                }
            })
        }
    }

    public static async UpdateCategoryController(req: Request, res: Response) {
        try {
            const json: ActionResult = await CategoryService.UpdateCategoryService(req, res);

            res.status(200).json(json);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
                code: 500,
                result: null,
                error: {
                    message: error.message
                }
            })
        }
    }

    public static async DeleteCategoryController(req: Request, res: Response) {
        try {
            const json: ActionResult = await CategoryService.DeleteCategoryService(req, res);

            res.status(200).json(json);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json({
                code: 500,
                result: null,
                error: {
                    message: error.message
                }
            })
        }
    }

}
