import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './CheckOut.css';
import paypal from '../../assets/svg/paypal.svg';
import gpay from '../../assets/svg/GPay.svg';
import union from '../../assets/svg/Union.svg';
import vector from '../../assets/svg/Afterpay.svg';
import OrderItem from '../../component/OrderItem/OrderItem';

const CheckOut = () => {
    const dispatch = useDispatch();
    const { carts } = useSelector(state => state.carts);

    const totalPrice = carts.reduce((acc, cart) => {
        return acc + (cart.quantity * cart.total_price);
    }, 0);

    return (
        <div>
            <div className="checkout-main-div">
                <div className="checkout-title">Checkout</div>
                <div className="checkout-main">
                    <div className="checkout-left">
                        <div className="return">Returning customer? <NavLink to='/SignIn'>Click here to login</NavLink></div>
                        <div className="express">
                            <div className="pay"><img src={paypal} alt="PayPal" /></div>
                            <div className="pay-g"><img src={gpay} alt="GooglePay" /></div>
                        </div>
                        <div className="or"><span className='chk-line'></span><span>or</span><span className='chk-line'></span></div>

                        <div className="checkout-contact-information">
                            <div className="contact-check-title">Contact infromation</div>
                            <div className="checkout-name-side">
                                <div className="check-name">
                                    <label htmlFor="">First name</label>
                                    <input className='chk-inp' type="text" placeholder='First name' />
                                </div>
                                <div className="check-name">
                                    <label htmlFor="">Last name</label>
                                    <input className='chk-inp' type="text" placeholder='Last name' />
                                </div>
                            </div>
                            <div className="checkout-email-side">
                                <label htmlFor="">Email address</label>
                                <input className='chk-inp' type="email" placeholder='Email address' />
                            </div>
                        </div>

                        <div className="checkout-shipping">
                            <div className="shipping-title">Shipping address</div>
                            <div className="check-name shipping-inp">
                                <label htmlFor="">Street address *</label>
                                <input className='chk-inp-ship' type="text" placeholder='Street address *' />
                            </div>
                            <div className="check-name shipping-inp">
                                <label htmlFor="">Country  *</label>
                                <input className='chk-inp-ship' type="text" placeholder='Country  *' />
                            </div>
                            <div className="check-name shipping-inp">
                                <label htmlFor="">Town / City  *</label>
                                <input className='chk-inp-ship' type="text" placeholder='Country  *' />
                            </div>
                            <div className="checkout-name-side">
                                <div className="check-name shipping-inp">
                                    <label htmlFor="">State</label>
                                    <input className='chk-inp' type="text" placeholder='State' />
                                </div>
                                <div className="check-name shipping-inp">
                                    <label htmlFor="">Zip code</label>
                                    <input className='chk-inp' type="number" placeholder='Zip code' />
                                </div>
                            </div>
                            <div className="checkbox">
                                <input className='chk-inp-box' type="checkbox" />
                                <span className='box-inp'>Use a different billing address (optional)</span>
                            </div>
                        </div>

                        <div className="shipping-method">
                            <div className="shipping-title">Shipping method</div>
                            <div className="method">
                                <input className='radio' type="radio" /><span className="free-name">Free shipping</span>
                                <span className="free">$0.00</span>
                            </div>
                            <div className="method">
                                <input className='radio' type="radio" /><span className="free-name">Express shipping</span>
                                <span className="free">$+15.00</span>
                            </div>
                        </div>
                        <div className="payment-inform">
                            <div className="shipping-title">Payment information</div>
                            <div className="method">
                                <input className='radio' type="radio" /><span className="free-name">Pay by card</span>
                                <img className='free' src={union} alt="" />
                            </div>
                            <div className="card-data-side">
                                <div className="check-name shipping-inp">
                                    <label htmlFor="">Card number</label>
                                    <input className='chk-inp-number' type="number" placeholder='1234 1234 1234' />
                                </div>
                                <div className="card-security">
                                    <div className="check-date">
                                        <div className="expiry">
                                            <label htmlFor="">Expiry date</label>
                                            <input className='chk-date' type="date" />
                                        </div>
                                    </div>
                                    <div className="check-date">
                                        <div className="code">
                                            <label htmlFor="">CVC</label>
                                            <input className='chk-date' type="text" placeholder='CVC code' />
                                        </div>
                                    </div>
                                </div>
                                <div className="afterpay-main">
                                    <div className="method afterpay">
                                        <input className='radio' type="radio" /><span className="free-name">$10 monthly installment</span>
                                        <img className='free' src={vector} alt="" />
                                    </div>
                                    <div className="method afterpay">
                                        <input className='radio' type="radio" /><span className="free-name">PayPal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pay-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</div>
                        <button className='checkout-btn'>Place order</button>
                    </div>
                    <div className="checkout-right">
                        <div className="checkout-right-data">
                            <div className="order-summary-check">Order Summary</div>
                            <div className="cart-item-side">
                                {carts.map((cart, i) => (
                                    <OrderItem cart={cart} key={i} />
                                ))}
                            </div>
                            <div className="coupon-input-checkout">
                                <input className='coupon-checkout' type="text" placeholder='Add coupon' />
                                <button className="checkout-app">Apply</button>
                            </div>
                            <div className="order-shipping">
                                <div className="order-ship">Shipping</div>
                                <div className="order-ship ship-total">Free</div>
                            </div>
                            <div className="order-shipping">
                                <div className="order-ship ship-total">Total</div>
                                <div className="order-ship ship-total">${totalPrice.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
