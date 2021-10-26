import { Router } from "express";
import PATH from "../Constants/path";
import ProductController from "../Controllers/Product.controller";
import AuthenticationMiddleware from "../Middlewares/Authentication.middleware";

const router = Router();

router.get(PATH.APP.START, ProductController.GetAllProductsController);
router.get(PATH.PRODUCT.PARAMS, ProductController.GetDetailProductController);
router.post(
    PATH.APP.START,
    AuthenticationMiddleware,
    ProductController.CreateProductController
);
router.put(
    PATH.PRODUCT.PARAMS,
    AuthenticationMiddleware,
    ProductController.UpdateProductController
);
router.delete(
    PATH.PRODUCT.PARAMS,
    AuthenticationMiddleware,
    ProductController.DeleteProductController
);

export default router;
