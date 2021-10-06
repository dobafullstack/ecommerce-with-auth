import { Router } from "express";
import PATH from "../Constants/path";
import ProductController from "../Controllers/Product.controller";

const router = Router();

router.get(PATH.APP.START, ProductController.GetAllProductsController);
router.get(PATH.PRODUCT.PARAMS, ProductController.GetDetailProductController);
router.post(PATH.APP.START, ProductController.CreateProductController);
router.put(PATH.PRODUCT.PARAMS, ProductController.UpdateProductController);
router.delete(PATH.PRODUCT.PARAMS, ProductController.DeleteProductController);

export default router;
