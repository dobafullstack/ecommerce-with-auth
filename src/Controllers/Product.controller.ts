import { Request, Response } from "express";

export default class ProductController {
    public static async GetAllProductsController(req: Request, res: Response) {}
    public static async GetDetailProductController(
        req: Request,
        res: Response
    ) {}
    public static async CreateProductController(req: Request, res: Response) {}
    public static async UpdateProductController(req: Request, res: Response) {}
    public static async DeleteProductController(req: Request, res: Response) {}
}
