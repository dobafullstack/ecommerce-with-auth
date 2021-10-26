import { Router } from "express";
import PATH from "../Constants/path";
import BillController from "../Controllers/Bill.controller";
import AuthenticationMiddleware from "../Middlewares/Authentication.middleware";

const router = Router();

router.get(PATH.APP.START, BillController.GetAllBillsController);
router.get(PATH.BILL.PARAMS, BillController.GetDetailBillController);
router.post(
    PATH.APP.START,
    AuthenticationMiddleware,
    BillController.CreateBillController
);
router.put(
    PATH.BILL.PARAMS,
    AuthenticationMiddleware,
    BillController.UpdateBillController
);
router.delete(
    PATH.BILL.PARAMS,
    AuthenticationMiddleware,
    BillController.DeleteBillController
);

export default router;
