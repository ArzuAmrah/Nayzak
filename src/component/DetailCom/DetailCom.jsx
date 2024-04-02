import React, { useState, useEffect } from 'react';
import './DetailCom.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { addToWishlist } from '../../redux/wishlistSlice';
import AllProduct from '../../pages/AllProduct/AllProduct';
import { Link } from 'react-router-dom';

const DetailCom = ({ productDetail }) => {
  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlistClicked, setWishlistClicked] = useState(false); // Yeni state
  const { API_IMAGE } = useSelector((state) => state.data);

  useEffect(() => {
    console.log(productDetail);
  }, [productDetail]);

  const increment = () => {
    if (quantity < productDetail?.count) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const addBasket = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    dispatch(
      addToCart({
        id: productDetail?.id,
        size: selectedSize,
        title: productDetail?.title,
        quantity: quantity,
        total_price: productDetail?.total_price,
        totalPrice: productDetail?.total_price * quantity,
        image: productDetail.image[0].image,
      })
    );
  };

  const addToWishlistOnly = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    dispatch(
      addToWishlist({
        id: productDetail.id,
        title: productDetail.title,
        size: selectedSize,
        image: productDetail.image[0].image,
      })
    );

    setWishlistClicked(true); 

    console.log('Item added to wishlist:', {
      id: productDetail.id,
      title: productDetail.title,
      size: selectedSize,
      image: productDetail.image[0].image,
    });
  };

  return (
    <div className='main-detal'>
      <div className="product-details-main">
        <div className="product-detail-all">
          <div className="product-detail-all-left">
            <div className="product-main-photo-detail">
              {productDetail?.image?.map((img, index) => (
                <div className="product-main-little" key={index}>
                  <img className='detail-img-pro' src={`${API_IMAGE}${img.image}`} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="product-detail-all-right">
            <div className="product-detail-all-right-main">
              <div className="product-detail-name">{productDetail?.title}</div>
              <div className="product-detail-name-text">{productDetail?.aditional_info}</div>
              <div className="product-detail-price">
                <div className="product-current-price">$ {productDetail?.total_price}</div>
                <div className="product-last-price">$ {productDetail?.price}</div>
              </div>
              <div className="product-last-count">Count: {productDetail?.count}</div>
              <div className="product-size-side">
                <div className="color-name">Size</div>
                <div className="size-all">
                  {productDetail?.size?.map((size, index) => (
                    <div
                      className={`size-circle ${selectedSize === size ? 'selected' : ''}`}
                      key={index}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="count-cart-add">
                <button onClick={decrement}>-</button>
                {quantity}
                <button onClick={increment}>+</button>
              </div>
              <button className="add-cart-product" onClick={addBasket}>
                Add to Cart
              </button>
              <div className="add-side-data">
                <span className={`wishlist-product ${wishlistClicked ? 'wishlisted' : ''}`} onClick={addToWishlistOnly}>
                  <i className="fa-regular fa-heart"></i>Wishlist
                </span>
                <span className="wishlist-product">
                  <i className="fa-regular fa-circle-question"></i>Ask question
                </span>
                <span className="wishlist-product">
                  <i className="fa-solid fa-share"></i>Share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='all-detail-other'><AllProduct /></div>
    </div>
  );
};

export default DetailCom;
