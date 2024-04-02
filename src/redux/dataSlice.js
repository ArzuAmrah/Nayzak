import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  products: [],
  basket: [],
  wishlist: [],
  categories: [],
  money: "azn",
  API_PRODUCTS: "http://127.0.0.1:8000/en/products/list/",
  API_IMAGE: "http://127.0.0.1:8000",
  API_CATEGORIES: "http://127.0.0.1:8000/en/products/categories/",
  API_BASKET: "http://127.0.0.1:8000/en/basket/<id>",
  API_WISHLIST: "http://127.0.0.1:8000/en/wishlist/",
  API_DETAIL:`http://127.0.0.1:8000/en/products/detail/`,
  lang: localStorage.getItem("language") || "az",
  searchVisible: false,
  expressShipping: false,
  isLogined: false,
  access_token: "",
  filteredProducts: [],
  blog: [],
  productDetail: []
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removefromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    setSearchVisible: (state, action) => {
      state.searchVisible = action.payload;
    },
    setSearchNotVisible: (state) => {
      state.searchVisible = false;
    },
    setExpressShipping: (state, action) => {
      state.expressShipping = action.payload;
    },
    filterProductsByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(product => product.category === action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  }
});


export const { addtoCart, removefromCart, setProducts, setBasket, setWishlist, setMoney, setExpressShipping, setSearchVisible, setSearchNotVisible, filterProductsByCategory, setCategories } = dataSlice.actions;

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(getState().data.API_PRODUCTS);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('fetchProducts Error:', error);
  }
};

export const updateCartItemSubtotal = (payload) => (dispatch, getState) => {
  const { cart } = getState().data;
  const updatedCart = cart.map(item =>
    item.id === payload.id ? { ...item, subtotal: payload.newSubtotal } : item
  );
  dispatch(setBasket(updatedCart));
};



export default dataSlice.reducer;
