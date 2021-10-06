import { Request, Response } from "express";

export default class OrderService {
    public static async GetAllOrdersService(req: Request, res: Response) {}
    public static async GetDetailOrderService(req: Request, res: Response) {}
    public static async CreateOrderService(req: Request, res: Response) {}
    public static async UpdateOrderService(req: Request, res: Response) {}
    public static async DeleteOrderService(req: Request, res: Response) {}
}
