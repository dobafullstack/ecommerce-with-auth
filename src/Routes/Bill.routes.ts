import { Router } from "express";
import PATH from "../Constants/path";
import BillController from "../Controllers/Bill.controller";

const router = Router();

router.get(PATH.APP.START, BillController.GetAllBillsController);
router.get(PATH.BILL.PARAMS, BillController.GetDetailBillController);
router.post(PATH.APP.START, BillController.CreateBillController);
router.put(PATH.BILL.PARAMS, BillController.UpdateBillController);
router.delete(PATH.BILL.PARAMS, BillController.DeleteBillController);

export default router;
