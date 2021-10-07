import { Request, Response } from "express";
import lodash from "lodash";
import Logger from "../Configs/logger";
import TAG_DEFINE from "../Constants/define";
import ProductModel from "../Models/Product.model";
import CommonFunction from "../Utils/CommonFunction";

export default class ProductService {
    public static async GetAllProductsService(req: Request, res: Response) {
        try {
            const products = await ProductModel.find().populate("category_id");

            return CommonFunction.GetActionResult(200, products);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async GetDetailProductService(req: Request, res: Response) {
        const { product_id } = req.params;

        try {
            const product = await ProductModel.findById(product_id).populate("category_id");

            return CommonFunction.GetActionResult(200, product);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async CreateProductService(req: Request, res: Response) {
        try {
            await ProductModel.create(req.body);

            return CommonFunction.GetActionResult(
                201,
                TAG_DEFINE.RESULT.PRODUCT.CREATE.SUCCESS
            );
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async UpdateProductService(req: Request, res: Response) {
        const { product_id } = req.params;
        try {
            const product= await ProductModel.findById(product_id);

            lodash.extend(product, req.body);
            product?.save();

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.PRODUCT.UPDATE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async DeleteProductService(req: Request, res: Response) {
        const { product_id } = req.params;
        try {
            await ProductModel.findByIdAndDelete(product_id);

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.PRODUCT.DELETE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
}
