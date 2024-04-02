import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import sliderPhoto from '../../assets/svg/slider-truck.svg';
import './Cart.css';
import CartItem from '../../component/CardItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, fetchFromLocalStorage } from '../../redux/cartSlice';

const Cart = (cart) => {
    const cartItems = useSelector(state => state.cart);
    const [expressShipping, setExpressShipping] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    const [cartItemCount, setCartItemCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    useEffect(() => {
        dispatch(getCartTotal())
        calculateSubtotal()
        console.log(carts)
    }, [dispatch])

    const handleExpressShippingChange = () => {
        setExpressShipping(!expressShipping);
    };


    const calculateTotal = () => {
        let total = calculateSubtotal();
        if (expressShipping) {
            total += 15;
        }
        return total;
    };


    const calculateSubtotal = () => {
        if (!carts || carts.length === 0) {
            return 0;
        }
        let total = carts.reduce((total, item) => total + item.total_price * item.quantity, 0);
        console.log(total)
        return total
    };

    useEffect(() => {
        calculateSubtotal()
        console.log(fetchFromLocalStorage())
    }, [])
    


    return (
        <>
            <div className="cart-main">
                <div className="cart-header">Cart</div>
                <div className="cart-title-text">Shop for $34 more to enjoy <b className='bold'>FREE Shipping</b></div>
                <div className="slider-truck-img">
                    <img className='slider-photo' src={sliderPhoto} alt="" />
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-product-header">
                    <div className="cart-product-header-1">
                        <h1 className='cart-product'>Product</h1>
                    </div>
                    <div className="cart-product-header-2">
                        <h1 className='cart-product'>Quantity</h1>
                        <h1 className='cart-product'>Price</h1>
                        <h1 className='cart-product'>Subtotal</h1>
                    </div>
                </div>
                <div className="cart-product-all">
                    {
                        carts?.length > 0 ?
                            carts?.map((cart, i) => (
                                <CartItem key={i} cart={cart} />
                            ))
                            :
                            <div className='cart-empty'>
                                Cart is empty...
                            </div>
                    }
                </div>
            </div>
            <div className="cart-summary-side">
                <div className="summary-all-side">
                    <div className="coupon-side">
                        <div className="coupon-title">Have a coupon?</div>
                        <div className="coupon-text">Add your code for an instant cart discount</div>
                        <div className="coupon-input">
                            <input className='coupon' type="text" placeholder='Add coupon' />
                            <span className="apply">Apply</span>
                        </div>
                    </div>
                    <div className="summary-side">
                        <div className="summary-title">Cart summary</div>
                        <div className="shipping-method-cart">
                            <div className="method-cart">
                                <input className='radio' type="radio" onChange={handleExpressShippingChange} checked={!expressShipping} /><span className="free-name">Free shipping</span>
                                <span className="free">$0.00</span>
                            </div>
                            <div className="method-cart">
                                <input className='radio' type="radio" onChange={handleExpressShippingChange} checked={expressShipping} /><span className="free-name">Express shipping</span>
                                <span className="free">$+15.00</span>
                            </div>
                        </div>
                        <div className="total-side">
                            <div className="total-data main-total">
                                <span className='total-name'>Subtotal</span>
                                <span className='price-total'>${calculateSubtotal().toFixed(2)}</span> 
                            </div>
                            <div className="total-data">
                                <span className='total-name'>Total</span>
                                <span className='price-total'>${calculateTotal().toFixed(2)}</span>
                            </div>
    
                           
                            <NavLink to='/CheckOut'><button className='checkout-btn'>Checkout</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Cart;
