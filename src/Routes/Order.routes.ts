import { Router } from "express";
import PATH from "../Constants/path";
import OrderController from "../Controllers/Order.controller";
import AuthenticationMiddleware from "../Middlewares/Authentication.middleware";

const router = Router();

router.get(PATH.APP.START, OrderController.GetAllOrdersController);
router.get(PATH.ORDER.PARAMS, OrderController.GetDetailOrderController);
router.post(
    PATH.APP.START,
    AuthenticationMiddleware,
    OrderController.CreateOrderController
);
router.put(
    PATH.ORDER.PARAMS,
    AuthenticationMiddleware,
    OrderController.UpdateOrderController
);
router.delete(
    PATH.ORDER.PARAMS,
    AuthenticationMiddleware,
    OrderController.DeleteOrderController
);

export default router;
