import PropTypes from 'prop-types';
import {
    createContext,
    useEffect,
    useReducer,
} from 'react';
import { cartReducer, loadCart, saveCart } from './cartReducer';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

    useEffect(() => {
        saveCart(cart || []);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node,
};

export default CartContext;
