import { createSlice } from '@reduxjs/toolkit';

export const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id);
            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        const tempQty = item.quantity + action.payload.quantity;
                        const tempTotalPrice = tempQty * item.price;
                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice
                        };
                    } else {
                        return item;
                    }
                });
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                const newCartItem = {
                    ...action.payload,
                    totalPrice: action.payload.quantity * action.payload.price
                };
                state.carts.push(newCartItem);
                storeInLocalStorage(state.carts);
            }
        },

        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            storeInLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = []
            storeInLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice;
            }, 0);
            state.itemCount = state.carts.length;
        },

        handleDecreaseQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload);
            if (state.carts[itemIndex].quantity > 1) {
                state.carts[itemIndex].quantity -= 1;
                state.carts[itemIndex].totalPrice -= state.carts[itemIndex].price;
            }
            storeInLocalStorage(state.carts);
        },

        handleIncreaseQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload);
            state.carts[itemIndex].quantity += 1;
            state.carts[itemIndex].totalPrice += state.carts[itemIndex].price;
            storeInLocalStorage(state.carts);
        }
    }
});

export const { addToCart, removeFromCart, clearCart, getCartTotal, handleDecreaseQuantity, handleIncreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
