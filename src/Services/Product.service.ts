import { Request, Response } from "express";

export default class ProductService {
    public static async GetAllProductsService(req: Request, res: Response) {}
    public static async GetDetailProductService(req: Request, res: Response) {}
    public static async CreateProductService(req: Request, res: Response) {}
    public static async UpdateProductService(req: Request, res: Response) {}
    public static async DeleteProductService(req: Request, res: Response) {}
}
