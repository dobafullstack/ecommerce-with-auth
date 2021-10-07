import { Request, Response } from "express";
import Logger from "../Configs/logger";
import OrderService from "../Services/Order.service";
import { ActionResult } from "../Utils/CommonFunction";

export default class OrderController {
    public static async GetAllOrdersController(req: Request, res: Response) {
        try {
            const json: ActionResult = await OrderService.GetAllOrdersService(req, res);

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

    public static async GetDetailOrderController(req: Request, res: Response) {
        try {
            const json: ActionResult = await OrderService.GetDetailOrderService(req, res);

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

    public static async CreateOrderController(req: Request, res: Response) {
        try {
            const json: ActionResult = await OrderService.CreateOrderService(req, res);

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

    public static async UpdateOrderController(req: Request, res: Response) {
        try {
            const json: ActionResult = await OrderService.UpdateOrderService(req, res);

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

    public static async DeleteOrderController(req: Request, res: Response) {
        try {
            const json: ActionResult = await OrderService.DeleteOrderService(req, res);

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
