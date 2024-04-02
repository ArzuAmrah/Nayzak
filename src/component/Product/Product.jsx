import React from 'react';
import './Product.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import starrate from '../../assets/svg/ratestar.svg';

const Product = ({ product }) => {
    const { API_IMAGE } = useSelector(state => state.data);

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className="single-product">
            <img src={`${API_IMAGE}${product?.image?.image}`} alt='' />
            <div className="product-details">
            <div className='star-icon-main'>
                    <img className='star-icon' src={starrate} alt="Star Icon" />
                </div>
                <h3>{product?.name}</h3>
                <p>{product?.title}</p>
                <div className="product-prices">
                    <div className='current-price'>${product?.total_price}</div>
                    <div className="last-price ">${product?.price}</div>
               
                </div>
                
            </div>
        </div>
    );
}

export default Product;
