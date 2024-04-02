import React, { useState, useEffect } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/Branding.png';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/cartSlice';

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { carts } = useSelector(state => state.carts)

    console.log(carts, "carts");

    const [cartItemCount, setCartItemCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])


    const { itemCount } = useSelector(state => state.carts)
    const [totalCount, setTotalCount] = useState();

    const findCount = () => {
        let totalCount = 0;

        carts.map((cart) => {
            totalCount += cart.quantity
        })
        return totalCount;
    }

    useEffect(() => {
        let counts = findCount();
        setTotalCount(counts)
    }, [carts])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <NavLink to='/'> <img src={logo} alt="logo" /></NavLink>

            </div>

            <div className={`navbar-main-link ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><NavLink to='/homePage'>Home</NavLink></li>
                    <li><NavLink to='/Shop'>Shop</NavLink></li>
                    <li><NavLink to='/Blog'>Blog</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/ContactSide'>Contact</NavLink></li>
                    <li><NavLink to='/Page404'></NavLink></li>
                </ul>
            </div>

            <div className="detail">
            <NavLink to='/Wishlist'><div className="cart"><i class=" detail-icon fa-regular fa-heart"></i></div></NavLink>
                <NavLink to='/Search'><div className="search"><i class="detail-icon fa-solid fa-magnifying-glass"></i></div></NavLink>
                <NavLink to='/SignIn'><div className="cart"><i class="detail-icon fa-regular fa-user"></i></div></NavLink>
                <NavLink to='/Cart'><div onClick={() => navigate("cart")} className="cart"><i class="fa-solid fa-bag-shopping"></i><div className="cart-count">{totalCount}</div></div></NavLink>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className={`fa-solid fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
            </div>
        </div>
    );
}

export default Nav;
