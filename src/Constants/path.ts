const PATH = {
    APP: {
        START: "/",
        PARAMS: "/:id",
    },
    AUTH: {
        BASE_URL: "/auth",
        LOGIN: "/login",
        REGISTER: "/register",
    },
    ROLE: {
        BASE_URL: "/role",
        PARAMS: "/:role_id",
    },
    CATEGORY: {
        BASE_URL: "/category",
        PARAMS: "/:category_id",
    },
    PRODUCT: {
        BASE_URL: "/product",
        PARAMS: "/:product_id",
    },
    ORDER: {
        BASE_URL: "/order",
        PARAMS: "/:order_id",
    },
    BILL: {
        BASE_URL: "/bill",
        PARAMS: "/:bill_id",
    },
};

export default PATH;
