import React from 'react';
import trash from '../../assets/svg/trash.svg';
import './WishlistItem.css';
import { removeFromWishlist } from '../../redux/wishlistSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const WishlistItem = ({ wishlist }) => {
    const dispatch = useDispatch();
    const { API_IMAGE } = useSelector(state => state.data);

    const handleRemoveFromWishlist = () => {
        dispatch(removeFromWishlist(wishlist.id));
    };

    return (
      <div className="wishlist-product-detail" key={wishlist?.id}>
            <div className="product-inwishlist-pht">
                <div className="wishlist-in-img">
                    {wishlist.image && wishlist.image.length > 0 && (
                        <img src={`${API_IMAGE}${wishlist?.image}`} alt='' />
                    )}
                </div>
                <div className="wishlist-data-photo">
                    <div className="wishlist-product-name">{wishlist?.title}</div>
                    <div className="wishlist-product-size">Size: {wishlist?.size}, Color: {wishlist?.color}</div>
                    <div className="wishlist-remove-product" onClick={handleRemoveFromWishlist}>
                        <img src={trash} alt="" />
                        Remove
                    </div>
                </div>
                <div className="wishlist-price">{wishlist?.total_price}</div>

                <div className="wishlist-add-option">Select options</div>
            </div>
           
        </div>
    );
};

export default WishlistItem;
