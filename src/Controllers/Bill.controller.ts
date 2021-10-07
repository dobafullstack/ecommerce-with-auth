import { Request, Response } from "express";
import Logger from "../Configs/logger";
import BillService from "../Services/Bill.service";
import { ActionResult } from "../Utils/CommonFunction";

export default class BillController {
    public static async GetAllBillsController(req: Request, res: Response) {
        try {
            const json: ActionResult = await BillService.GetAllBillsService(req, res);

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
    public static async GetDetailBillController(req: Request, res: Response) {
        try {
            const json: ActionResult = await BillService.GetDetailBillService(req, res);

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
    public static async CreateBillController(req: Request, res: Response) {
        try {
            const json: ActionResult = await BillService.CreateBillService(req, res);

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
    public static async UpdateBillController(req: Request, res: Response) {
        try {
            const json: ActionResult = await BillService.UpdateBillService(req, res);

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
    public static async DeleteBillController(req: Request, res: Response) {
        try {
            const json: ActionResult = await BillService.DeleteBillService(req, res);

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
