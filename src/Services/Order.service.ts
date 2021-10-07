import { Request, Response } from "express";
import lodash from "lodash";
import Logger from "../Configs/logger";
import TAG_DEFINE from "../Constants/define";
import OrderModel from "../Models/Order.model";
import CommonFunction from "../Utils/CommonFunction";

export default class OrderService {
    public static async GetAllOrdersService(req: Request, res: Response) {
        try {
            const orders = await OrderModel.find();

            return CommonFunction.GetActionResult(200, orders);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async GetDetailOrderService(req: Request, res: Response) {
        const { order_id } = req.params;

        try {
            const order = await OrderModel.findById(order_id);

            return CommonFunction.GetActionResult(200, order);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async CreateOrderService(req: Request, res: Response) {
        try {
            await OrderModel.create(req.body);

            return CommonFunction.GetActionResult(201, TAG_DEFINE.RESULT.ORDER.CREATE.SUCCESS);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async UpdateOrderService(req: Request, res: Response) {
        const {order_id} = req.params;
        try {
            const order= await OrderModel.findById(order_id);

            lodash.extend(order, req.body);
            order?.save();

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.ORDER.UPDATE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
    public static async DeleteOrderService(req: Request, res: Response) {
        const {order_id} = req.params;
        try {
            await OrderModel.findByIdAndDelete(order_id);

            return CommonFunction.GetActionResult(200, TAG_DEFINE.RESULT.ORDER.DELETE.SUCCESS)
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
}
