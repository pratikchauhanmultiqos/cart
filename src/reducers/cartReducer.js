import { toast } from "react-toastify";

const Products = [
    {
        id: 1,
        title: "Nonummy nibh",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product1-150x150.jpg",
        price: "10",
        category: ["category-1", "category-2", "category-3"],
        brand: "Apple",
    },
    {
        id: 2,
        title: "Claritatem",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product12-150x150.jpg",
        price: "20",
        category: ["category-2", "category-3"],
        brand: "clothsV",
    },
    {
        id: 3,
        title: "Consequat",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product3-150x150.jpg",
        price: "5",
        category: ["category-3"],
        brand: "Apple",
    },
    {
        id: 4,
        title: "Euismod tincidunt",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product4-150x150.jpg",
        price: "899",
        category: ["category-3"],
        brand: "Apple",
    },
    {
        id: 5,
        title: "Imperdiet doming",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product5-150x150.jpg",
        price: "20",
        category: ["category-2"],
        brand: "Rings",
    },
    {
        id: 6,
        title: "Videntur parum",
        thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product12-150x150.jpg",
        price: "157",
        category: ["category-1", "category-4"],
        brand: "AdI",
    },
];

const initialState = {
    productlist: Products,
    cartItems: [
        {
            id: 1,
            title: "Nonummy nibh",
            thumb_url: "http://opencart.templatemela.com/OPC07/OPC070156/OPC1/image/cache/catalog/demo/product/product1-150x150.jpg",
            price: "10",
            category: ["category-1", "category-2", "category-3"],
            brand: "Apple",
            total: 2
        },
    ],
    watchList: [1, 3, 4]
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ALL_PRODUCT": return {
            ...state
        }
        case "ADD_CART":
            const item = state.productlist.find((item) => item.id === payload)
            const cartitem = state.cartItems.find((item) => item.id === payload);

            toast.success("Product added");

            if (cartitem) {
                cartitem.total = cartitem.total + 1
                return {
                    ...state,
                    cartItems: [...state.cartItems]
                };
            } else {
                item.total = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }

        case "REMOVE_CART_DEC":
            const cartitem_ = state.cartItems.find((item) => item.id === payload)
            if (cartitem_) {
                cartitem_.total = cartitem_.total > 1 ? cartitem_.total - 1 : cartitem_.total;
                return {
                    ...state,
                    cartItems: [...state.cartItems]
                };
            } else {
                return { ...state }
            }
        case "REMOVE_CART":
            toast.success("Remove product from your cart");
            return {
                ...state,
                cartItems: [...state.cartItems.filter(item => item.id !== payload)]
            }
        case "WATCH_LIST": return {
            ...state
        }
        case "ADD_WATCH_LIST":
            if (state.watchList.includes(payload)) {
                return {
                    ...state,
                    watchList: [...state.watchList]
                }
            } else {
                return {
                    ...state,
                    watchList: [...state.watchList, payload]
                }
            }
        case "REMOVE_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList.filter(item => item !== payload)]
            }
        case "UPDATE_CART":
            const cart_items = state.cartItems.find((item) => item.id === payload);


            if (cart_items) {
                cart_items.total = cart_items.total + 1
                return {
                    ...state,
                    cartItems: [...state.cartItems]
                };
            } else {
                item.total = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }


        default: return state;
    }
}

export default cartReducer;
