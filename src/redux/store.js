import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import wishlistSlice from './wishlistSlice'

export default configureStore({
  reducer: {
    data: dataSlice,
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    wishlist: wishlistSlice
   },
})