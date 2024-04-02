import { createSlice } from '@reduxjs/toolkit';

export const fetchFromLocalStorage = () => {
    let wishlist = localStorage.getItem('wishlist');
    if (wishlist) {
        return JSON.parse(wishlist);
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('wishlist', JSON.stringify(data))
}

const initialState = {
    wishlist: fetchFromLocalStorage()
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const { id, title, size, image } = action.payload;
            const isItemInWishlist = state.wishlist.find(item => item.id === id);
            if (!isItemInWishlist) {
                state.wishlist.push({ id, title, size, image });
                storeInLocalStorage(state.wishlist);
            }
        },
        
        removeFromWishlist: (state, action) => {
            const idToRemove = action.payload;
            state.wishlist = state.wishlist.filter(item => item.id !== idToRemove);
            storeInLocalStorage(state.wishlist);
        },
        
        clearWishlist: (state) => {
            state.wishlist = [];
            storeInLocalStorage(state.wishlist);
        }
    }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
