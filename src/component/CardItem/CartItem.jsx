import React from 'react';
import trash from '../../assets/svg/trash.svg';
import './CartItem.css';
import { removeFromCart, handleDecreaseQuantity, handleIncreaseQuantity } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';



const CartItem = ({ cart }) => {
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
        <div className="cart-product-detail" key={cart?.id}>
            <div className="product-incart-pht">
                <div className="cart-in-img">
                    {cart.image && cart.image.length > 0 && (
                        <img src={`${API_IMAGE}${cart?.image}`} alt='' />
                    )}
                </div>
                <div className="cart-data-photo">
                    <div className="cart-product-name">{cart?.title}</div>
                    <div className="cart-product-size">Size: {cart?.size}, Color: {cart?.color}</div>
                    <div className="cart-remove-product" onClick={handleRemove}>
                        <img src={trash} alt="" />
                        Remove
                    </div>
                </div>
            </div>
            <div className="cart-add-product">
                <div className="cart-count-product">
                    <button onClick={handleDecrease}>-</button>
                    <span>{cart?.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <div className="cart-in-price">$ {cart?.total_price}</div>
                <div className="cart-in-price-subtotal">$ {totalPrice}</div>
            </div>
        </div>
    );
}

export default CartItem;
