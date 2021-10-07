const TAG_DEFINE = {
    SCHEMA: {
        USER: "User",
        ROLE: "Role",
        CATEGORY: "Category",
        PRODUCT: "Product",
        ORDER: "Order",
        BILL: "Bill",
    },
    RESULT: {
        AUTH: {
            REGISTER: {
                SUCCESS: "Đăng ký tài khoản thành công",
                FAIL: "Đăng ký tài khoản thất bại",
            },
        },
        BILL: {
            CREATE: {
                SUCCESS: "Tạo hóa đơn thành công",
                FAIL: "Tạo hóa đơn thất bại",
            },
            UPDATE: {
                SUCCESS: "Cập nhật hóa đơn thành công",
                FAIL: "Cập nhật hóa đơn thất bại",
            },
            DELETE: {
                SUCCESS: "Xóa hóa đơn thành công",
                FAIL: "Xóa hóa đơn thất bại",
            },
        },
        CATEGORY: {
            CREATE: {
                SUCCESS: "Tạo danh mục thành công",
                FAIL: "Tạo danh mục thất bại",
            },
            UPDATE: {
                SUCCESS: "Cập nhật danh mục thành công",
                FAIL: "Cập nhật danh mục thất bại",
            },
            DELETE: {
                SUCCESS: "Xóa danh mục thành công",
                FAIL: "Xóa danh mục thất bại",
            },
        },
        ORDER: {
            CREATE: {
                SUCCESS: "Tạo đơn hàng thành công",
                FAIL: "Tạo đơn hàng thất bại",
            },
            UPDATE: {
                SUCCESS: "Cập nhật đơn hàng thành công",
                FAIL: "Cập nhật đơn hàng thất bại",
            },
            DELETE: {
                SUCCESS: "Xóa đơn hàng thành công",
                FAIL: "Xóa đơn hàng thất bại",
            },
        },
        PRODUCT: {
            CREATE: {
                SUCCESS: "Tạo sản phẩm thành công",
                FAIL: "Tạo sản phẩm thất bại",
            },
            UPDATE: {
                SUCCESS: "Cập nhật sản phẩm thành công",
                FAIL: "Cập nhật sản phẩm thất bại",
            },
            DELETE: {
                SUCCESS: "Xóa sản phẩm thành công",
                FAIL: "Xóa sản phẩm thất bại",
            },
        },
    },
};

export default TAG_DEFINE;
