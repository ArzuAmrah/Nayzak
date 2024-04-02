import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
    filteredProducts: [],
}


export const getSearchProducts = createAsyncThunk("searchProducts", async (keyword) => {
    try {
        let allProducts = [];
        let nextPage = `http://127.0.0.1:8000/en/products/list/`;
        while (nextPage) {
            const response = await axios.get(nextPage);
            const responseData = response.data;
            allProducts = [...allProducts, ...responseData.results];
            nextPage = responseData.next;
        }
        console.log(allProducts)
        return allProducts;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
});


const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        filterProducts(state, action) {
            state.filteredProducts = state.products.filter((prod) => {
                console.log(prod.category.id)
                console.log(action.payload)
                return prod.category.id === action.payload;
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
    }
});

export const { filterProducts } = productSlice.actions;

export default searchSlice.reducer;
