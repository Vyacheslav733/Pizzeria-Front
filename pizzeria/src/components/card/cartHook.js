import { useContext } from 'react';
import CartContext from './CartContext.jsx';
import { cartAdd, cartClear, cartRemove } from './cartReducer';

const useCart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const cartSum = () => {
        return parseFloat(
            cart?.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.count);
            }, 0)
            ?? 0,
        ).toFixed(2);
    };

    return {
        cart,
        getCartSum: () => cartSum(),
        addToCart: (item) => dispatch(cartAdd(item)),
        removeFromCart: (item) => dispatch(cartRemove(item)),
        clearCart: () => dispatch(cartClear()),
    };
};

export default useCart;
