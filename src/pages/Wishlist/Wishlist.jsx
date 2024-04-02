import React, { useState, useEffect } from 'react';
import './Wishlist.css';
import WishlistItem from '../../component/WishlistItem/WishlistItem';
import {  fetchFromLocalStorage } from '../../redux/wishlistSlice';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const wishlistItems = fetchFromLocalStorage();
        setWishlist(wishlistItems)
    },[])
    return (
        <div className="wishlist-product-all">
             <div className="cart-main">
                <div className="cart-header">Wishlist</div>
                
            </div>
            {
                wishlist?.length > 0 ?
                    wishlist?.map((wishlist, i) => (
                        <WishlistItem key={i} wishlist={wishlist} />
                    ))
                    :
                    <div className='wishlist-empty'>
                        Wishlist is empty...
                    </div>
            }
        </div>
    );
};

export default Wishlist;
