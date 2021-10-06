import { Express, Request, Response } from "express";
import PATH from "../Constants/path";

//Routes
import AuthRoute from "./auth.routes";
import RoleRoute from "./role.routes";
import ProductRoute from './Product.routes';
import CategoryRoute from './Category.routes';
import BillRoute from './Bill.routes';
import OrderRoute from './Order.routes';

//Middlewares
import authorizationMiddleware, { Strict } from "../Middlewares/authorization.middleware";

const router = (app: Express) => {
    app.get("/", (req: Request, res: Response) => {
        res.send("Hello world");
    });

    app.use(PATH.AUTH.BASE_URL, AuthRoute);
    app.use(PATH.ROLE.BASE_URL, Strict, RoleRoute);
    app.use(PATH.PRODUCT.BASE_URL, ProductRoute);
    app.use(PATH.CATEGORY.BASE_URL, CategoryRoute);
    app.use(PATH.BILL.BASE_URL, BillRoute);
    app.use(PATH.ORDER.BASE_URL, OrderRoute);
};

export default router;
