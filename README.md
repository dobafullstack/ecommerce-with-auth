# Eccomerce App With Auth

## Path

[Click here](http://localhost:4000)

## Installation

### `yarn`

### `yarn start`

# Routes

## Auth

### `Login`

[/auth/login](http://localhost:4000/auth/login)

```bash
    {
        method: "POST",
        body: {
            username: string,
            password: string
        }
    }
```

### `Register`

[/auth/register](http://localhost:4000/auth/register)

```bash
    {
        method: "POST",
        body: {
            username: string,
            name: string,
            password: string
            email: string
            phone: string
        }
    }
```

## Roles

### `Create a role`

[/role](http://localhost:4000/role)

```bash
    {
        method: "POST",
        body: {
            name: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get all roles`

[/role](http://localhost:4000/role)

```bash
    {
        method: "GET",
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get detail role`

[/role/:id](http://localhost:4000/role/:id)

```bash
    {
        method: "GET",
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Update a role`

[/role/:id](http://localhost:4000/role/:id)

```bash
    {
        method: "PUT",
        body: {
            name: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Delete a role`

[/role/:id](http://localhost:4000/role/:id)

```bash
    {
        method: "DELETE",
        headers: {
            Authorization: Bearer token
        }
    }
```

## Category

### `Create a category`

[/category](http://localhost:4000/category)

```bash
    {
        method: "POST",
        body: {
            name: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get all categories`

[/category](http://localhost:4000/category)

```bash
    {
        method: "GET",
    }
```

### `Get detail category`

[/category/:id](http://localhost:4000/category/:id)

```bash
    {
        method: "GET",
    }
```

### `Update a category`

[/category/:id](http://localhost:4000/category/:id)

```bash
    {
        method: "PUT",
        body: {
            name: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Delete a category`

[/category/:id](http://localhost:4000/category/:id)

```bash
    {
        method: "DELETE",
        headers: {
            Authorization: Bearer token
        }
    }
```

## Product

### `Create a product`

[/product](http://localhost:4000/product)

```bash
    {
        method: "POST",
        body: {
            name: string,
            category_id: : string,
            price: number,
            rating_point: number,
            quantity: number
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get all products`

[/product](http://localhost:4000/product)

```bash
    {
        method: "GET",
    }
```

### `Get detail product`

[/product/:id](http://localhost:4000/product/:id)

```bash
    {
        method: "GET",
    }
```

### `Update a product`

[/product/:id](http://localhost:4000/product/:id)

```bash
    {
        method: "PUT",
        body: {
            name: string,
            category_id: : string,
            price: number,
            rating_point: number,
            quantity: number
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Delete a product`

[/product/:id](http://localhost:4000/product/:id)

```bash
    {
        method: "DELETE",
        headers: {
            Authorization: Bearer token
        }
    }
```

## Order

### `Create a order`

[/order](http://localhost:4000/order)

```bash
    {
        method: "POST",
        body: {
            user_id: string,
            products: [
                {
                    product_id: string,
                    count: number
                }
            ],
            totalPrice: number,
            name: string,
            phone: string,
            address: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get all orders`

[/order](http://localhost:4000/order)

```bash
    {
        method: "GET",
    }
```

### `Get detail order`

[/order/:id](http://localhost:4000/order/:id)

```bash
    {
        method: "GET",
    }
```

### `Update a order`

[/order/:id](http://localhost:4000/order/:id)

```bash
    {
        method: "PUT",
        body: {
            user_id: string,
            products: [
                {
                    product_id: string,
                    count: number
                }
            ],
            totalPrice: number,
            name: string,
            phone: string,
            address: string
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Delete a order`

[/order/:id](http://localhost:4000/order/:id)

```bash
    {
        method: "DELETE",
        headers: {
            Authorization: Bearer token
        }
    }
```

## Bill

### `Create a bill`

[/bill](http://localhost:4000/bill)

```bash
    {
        method: "POST",
        body: {
            user_id: string,
            products: [
                {
                    product_id: string,
                    count: number
                }
            ],
            totalPrice: number
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Get all bills`

[/bill](http://localhost:4000/bill)

```bash
    {
        method: "GET",
    }
```

### `Get detail bill`

[/bill/:id](http://localhost:4000/bill/:id)

```bash
    {
        method: "GET",
    }
```

### `Update a bill`

[/bill/:id](http://localhost:4000/bill/:id)

```bash
    {
        method: "PUT",
        body: {
            user_id: string,
            products: [
                {
                    product_id: string,
                    count: number
                }
            ],
            totalPrice: number
        },
        headers: {
            Authorization: Bearer token
        }
    }
```

### `Delete a bill`

[/bill/:id](http://localhost:4000/bill/:id)

```bash
    {
        method: "DELETE",
        headers: {
            Authorization: Bearer token
        }
    }
```
