import { Router } from "express";
import PATH from "../Constants/path";
import OrderController from "../Controllers/Order.controller";

const router = Router();

router.get(PATH.APP.START, OrderController.GetAllOrdersController);
router.get(PATH.ORDER.PARAMS, OrderController.GetDetailOrderController);
router.post(PATH.APP.START, OrderController.CreateOrderController);
router.put(PATH.ORDER.PARAMS, OrderController.UpdateOrderController);
router.delete(PATH.ORDER.PARAMS, OrderController.DeleteOrderController);

export default router;
