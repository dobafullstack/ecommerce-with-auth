import lodash from "lodash";
import { Request, Response } from "express";
import Logger from "../Configs/logger";
import TAG_DEFINE from "../Constants/define";
import BillModel from "../Models/Bill.model";
import CommonFunction from "../Utils/CommonFunction";

export default class BillService {
    public static async GetAllBillsService(req: Request, res: Response) {
        try {
            const bills = await BillModel.find().populate({
                path: "products",
                populate: {
                    path: "product_id"
                }
            });

            return CommonFunction.GetActionResult(200, bills, null);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async GetDetailBillService(req: Request, res: Response) {
        const { bill_id } = req.params;
        try {
            const bill = await BillModel.find({ _id: bill_id }).populate({
                path: "products",
                populate: {
                    path: "product_id"
                }
            });

            return CommonFunction.GetActionResult(200, bill, null);
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async CreateBillService(req: Request, res: Response) {
        try {
            await BillModel.create(req.body);

            return CommonFunction.GetActionResult(
                201,
                TAG_DEFINE.RESULT.BILL.CREATE.SUCCESS
            );
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async UpdateBillService(req: Request, res: Response) {
        const { bill_id } = req.params;

        try {
            const bill = await BillModel.findById(bill_id);

            lodash.extend(bill, req.body);
            bill?.save();

            return CommonFunction.GetActionResult(
                200,
                TAG_DEFINE.RESULT.BILL.UPDATE.SUCCESS
            );
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }

    public static async DeleteBillService(req: Request, res: Response) {
        const { bill_id } = req.params;

        try {
            await BillModel.findByIdAndDelete(bill_id);

            return CommonFunction.GetActionResult(
                200,
                TAG_DEFINE.RESULT.BILL.DELETE.SUCCESS
            );
        } catch (error: any) {
            Logger.error(error.message);
            return CommonFunction.GetActionResult(400, null, {
                message: error.message,
            });
        }
    }
}
