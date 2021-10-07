import { Express, Request, Response } from "express";
import PATH from "../Constants/path";

//Routes
import AuthRoute from "./Auth.routes";
import RoleRoute from "./Role.routes";
import ProductRoute from "./Product.routes";
import CategoryRoute from "./Category.routes";
import BillRoute from "./Bill.routes";
import OrderRoute from "./Order.routes";

//Middlewares
import AuthorizationMiddleware, {
    Strict,
} from "../Middlewares/Authorization.middleware";
import AuthenticationMiddleware from "../Middlewares/Authentication.middleware";

const router = (app: Express) => {
    app.get("/", (req: Request, res: Response) => {
        res.send("Hello world");
    });

    app.use(PATH.AUTH.BASE_URL, AuthenticationMiddleware, AuthRoute);
    app.use(PATH.ROLE.BASE_URL, AuthenticationMiddleware, Strict, RoleRoute);
    app.use(PATH.PRODUCT.BASE_URL, ProductRoute);
    app.use(PATH.CATEGORY.BASE_URL, CategoryRoute);
    app.use(
        PATH.BILL.BASE_URL,
        AuthenticationMiddleware,
        AuthorizationMiddleware,
        BillRoute
    );
    app.use(PATH.ORDER.BASE_URL, AuthenticationMiddleware, OrderRoute);
};

export default router;
