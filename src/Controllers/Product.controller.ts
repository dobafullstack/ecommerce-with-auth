import { Request, Response } from "express";
import Logger from "../Configs/logger";
import ProductService from "../Services/Product.service";
import { ActionResult } from "../Utils/CommonFunction";

export default class ProductController {
    public static async GetAllProductsController(req: Request, res: Response) {
        try {
            const json: ActionResult = await ProductService.GetAllProductsService(req, res);

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

    public static async GetDetailProductController(
        req: Request,
        res: Response
    ) {
        try {
            const json: ActionResult = await ProductService.GetDetailProductService(req, res);

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

    public static async CreateProductController(req: Request, res: Response) {
        try {
            const json: ActionResult = await ProductService.CreateProductService(req, res);

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

    public static async UpdateProductController(req: Request, res: Response) {
        try {
            const json: ActionResult = await ProductService.UpdateProductService(req, res);

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

    public static async DeleteProductController(req: Request, res: Response) {
        try {
            const json: ActionResult = await ProductService.DeleteProductService(req, res);

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
