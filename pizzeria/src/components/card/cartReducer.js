const setCartCount = (cart, item, value) => {
    return cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            return { ...cartItem, count: cartItem.count + value };
        }
        return cartItem;
    });
};

const addToCart = (cart, item) => {
    const existsItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existsItem !== undefined) {
        return setCartCount(cart, item, 1);
    }
    return [...cart, { ...item, count: 1 }];
};

const removeFromCart = (cart, item) => {
    const existsItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existsItem !== undefined && existsItem.count > 1) {
        return setCartCount(cart, item, -1);
    }
    return cart.filter((cartItem) => cartItem.id !== item.id);
};

const CART_KEY = 'localCart';
const CART_ADD = 'cart/add';
const CART_REMOVE = 'cart/remove';
const CART_CLEAR = 'cart/clear';

export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const loadCart = (initialValue = []) => {
    const cartData = localStorage.getItem(CART_KEY);
    if (cartData) {
        return JSON.parse(cartData);
    }
    return initialValue;
};

export const cartReducer = (cart, action) => {
    const { item } = action;
    switch (action.type) {
        case CART_ADD: {
            return addToCart(cart, item);
        }
        case CART_REMOVE: {
            return removeFromCart(cart, item);
        }
        case CART_CLEAR: {
            return [];
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
};

export const cartAdd = (item) => ({
    type: CART_ADD, item,
});

export const cartRemove = (item) => ({
    type: CART_REMOVE, item,
});

export const cartClear = () => ({
    type: CART_CLEAR,
});
