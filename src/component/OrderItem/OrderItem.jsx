import React from 'react';
import trash from '../../assets/svg/trash.svg';
import './OrderItem.css';
import { removeFromCart, handleDecreaseQuantity, handleIncreaseQuantity } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';



const OrderItem = ({ cart }) => {
    const { API_IMAGE } = useSelector(state => state.data);

    const dispatch = useDispatch();
    console.log(cart)
    const totalPrice = cart.quantity * cart.total_price;

    const handleRemove = () => {
        dispatch(removeFromCart(cart.id));
    };

    const handleDecrease = () => {
        dispatch(handleDecreaseQuantity(cart.id));
    };

    const handleIncrease = () => {
        dispatch(handleIncreaseQuantity(cart.id));
    };

    return (
        <div className="order-product-detail" key={cart?.id}>
            <div className="product-inorder-pht">
                <div className="cart-in-img">
                    {cart.image && cart.image.length > 0 && (
                        <img src={`${API_IMAGE}${cart?.image}`} alt='' />
                    )}
                </div>
                <div className="order-data-photo">
                    <div className="cart-product-name">{cart?.title}</div>
                    <div className="cart-remove-product" onClick={handleRemove}>
                        <img src={trash} alt="" />
                        Remove
                    </div>
                </div>
            </div>
            <div className="order-add-product">
                <div className="cart-count-product">
                    <button onClick={handleDecrease}>-</button>
                    <span>{cart?.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <div className="cart-in-price-subtotal">$ {totalPrice}</div>
            </div>
        </div>
    );
}

export default OrderItem;
