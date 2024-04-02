import './App.css';
import SignUp from '../src/pages/SignUp/SignUp'
import SignIn from '../src/pages/SignIn/SignIn'
import ContactSide from './pages/ContactSide/ContactSide'
import About from '../src/pages/About_Section/About'
import Page404 from '../src/pages/Page404/Page404'
import Account from './pages/Account_Pages/Account'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/homePage/Home';
import CheckOut from './pages/CheckoutPage/CheckOut';
import { Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop';
import AllProduct from './pages/AllProduct/AllProduct';
import { useEffect } from 'react';
import MainLayout from './layout/mainLayout/MainLayout';
import FaqMain from './pages/FaqPage/FaqMain';
import Cart from './pages/Cart/Cart'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Product from './component/Product/Product';
import Nav from './component/NavBar/Nav';
import CartItem from './component/CardItem/CartItem'
import Detail from './pages/Detail/Detail'
import Search from './component/Search/Search'
import FirstPage from './pages/FirstPage/FirstPage';
import Blog from './pages/Blog/Blog';
import Wishlist from './pages/Wishlist/Wishlist';
import WishlistItem from './component/WishlistItem/WishlistItem';
import ChartData from './pages/ChartData/ChartData';


function App() {
  const [cartItems, setCartItems] = useState([]);
  <Nav cartItems={cartItems} />
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`http://127.0.0.1:8000/en/products/list/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_PRODUCT",
          payload: data,
        });
        console.log(data.results);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Shop" element={<Shop />} >
            
          </Route>
          <Route path="/Product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactSide" element={<ContactSide />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/FaqMain" element={<FaqMain />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/homePage" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          {/* <Route path="*" element={<Page404 />} /> */}
          <Route path='/AllProduct' element={<AllProduct />} />
          <Route path="/Shop/products/:id" element={<Detail />} />
          <Route path="/Detail/productDetail/:id" element={<WishlistItem />} />
          <Route path="/products/:search" element={<Search />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ChartData" element={<ChartData />} />

        </Route>
        <Route index element={<FirstPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
