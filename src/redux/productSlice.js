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


export const getProducts = createAsyncThunk("getProducts", async () => {
    try {
        let allProducts = [];
        let nextPage = "http://127.0.0.1:8000/en/products/list/";
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

export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async (category) => {
    const response = await fetch(`http://127.0.0.1:8000/en/products/categories/detail/${category}/`);
    const data = await response.json();
    console.log(data)
    return data.children;
});

export const getDetailProduct = createAsyncThunk("getDetailProduct", async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/en/products/detail/${id}/`);
    const data = await response.json();
    console.log(data)
    return data;
});
export const getSizeProduct = createAsyncThunk("getSizeProduct", async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/en/products/sizes/`);
    const data = await response.json();
    console.log(data)
    return data;
});

const productSlice = createSlice({
    name: "products",
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
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL;
            })

            .addCase(getDetailProduct.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getDetailProduct.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL;
            })


            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL;
            })


            // .addCase(getCategoryProducts.pending, (state, action) => {
            //     state.productsStatus = STATUS.LOADING;
            // })
            // .addCase(getCategoryProducts.fulfilled, (state, action) => {
            //     state.productsStatus = STATUS.SUCCESS;
            //     state.products = action.payload;
            // })
            // .addCase(getCategoryProducts.rejected, (state, action) => {
            //     state.productsStatus = STATUS.FAIL;
            // })
    }
});

export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
