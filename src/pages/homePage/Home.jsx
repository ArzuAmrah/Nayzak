import React, { useEffect, useState } from 'react';
import Slider from '../../component/Slider/Slider';
import truck from '../../assets/svg/truck.svg';
import money from '../../assets/svg/money.svg';
import phone from '../../assets/svg/phone.svg';
import ear from '../../assets/svg/earing.svg';
import neck from '../../assets/svg/neck.svg';
import lock from '../../assets/svg/lock.svg';
import message from '../../assets/svg/message.svg';
import './Home.css';
import homegirl from '../../assets/svg/homegirl.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/dataSlice';
import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import CheckoutPage from '../../pages/CheckoutPage/CheckOut'
import MultipleItems from '../../component/MultipleItems/MultipleItems'


const Home = () => {
  
  const products = useSelector(state => state.data.products);
  const [data, setData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const [time, setTime] = useState({ days: 5, hours: 11, minutes: 23, seconds: 2 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products?.results?.length) {
      setVisibleProducts(products.results.length);
    }
  }, [products]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(prevTime => {
        let newTime = { ...prevTime };
        if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
          clearInterval(countdown);
        } else if (newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
          newTime = { days: newTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else if (newTime.minutes === 0 && newTime.seconds === 0) {
          newTime = { ...newTime, hours: newTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (newTime.seconds === 0) {
          newTime = { ...newTime, minutes: newTime.minutes - 1, seconds: 59 };
        } else {
          newTime = { ...newTime, seconds: newTime.seconds - 1 };
        }
        return newTime;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {/* <CheckoutPage/> */}
    {/* <MultipleItems/> */}
      <Slider />
      {/* <section className="rings">
        <div className="container rings-all">
          <div className="rings__title">
            <h4>Latest Arrivals</h4>
          </div>
          <MultipleItems products={products} />
        </div>
      </section> */}

      <div className="join">
        <div className="join-main">
          <h1 className='join-title'>Join Our Newsletter</h1>
          <p className='join-text'>Big discounts and right to your inbox.</p>
          <div className="add-email-join">
            <span><img src={message} alt="" /></span>
            <input className='email-join' type="email" placeholder='Email address' />
            <span className="sign-join"><Link to='/SignUp'>Signup</Link></span>
          </div>
        </div>
      </div>

      <div className="forward-shop-side">
        <div className="forward-all">
          <div className="shop-ear">
            <div className="earphoto"><img src={ear} alt="" /></div>
            <div className="earings">Earrings</div>
            <div className="forward-link">
              <span><Link to='/Shop'>See Collection</Link></span><i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="shop-ear">
            <div className="earphoto"><img src={neck} alt="" /></div>
            <div className="earings">Necklaces</div>
            <div className="forward-link">
              <span><Link to='/Shop'>See Collection</Link></span><i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="discount">
        <div className="discount-left"><img className='discount-left-photo' src={homegirl} alt="" /></div>
        <div className="discount-right">
          <div className="discount-right-text">
            <div className="discount-name">EXCLUSIVE</div>
            <h1 className="discount-percent">50% OFF</h1>
            <div className="discount-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
            <div className='counter'>{`${time.days}d : ${time.hours.toString().padStart(2, '0')}h : ${time.minutes.toString().padStart(2, '0')}m : ${time.seconds.toString().padStart(2, '0')}s`}</div>
            <button className="discount-shop"><Link to='/Shop'>Shop Now</Link></button>
          </div>
        </div>
      </div>

      <div className="shipping-side">
        {[
          { icon: truck, title: 'Free Shipping', text: 'Orders above $200' },
          { icon: money, title: 'Money-back', text: '30 day Guarantee' },
          { icon: phone, title: 'Premium Support', text: 'Phone and email support' },
          { icon: lock, title: 'Secure Payments', text: 'Secured by Stripe' },
        ].map((info, index) => (
          <div className="about-shipping-side" key={index}>
            <div className="about_icon"><img src={info.icon} alt="" /></div>
            <div className="icon_title">{info.title}</div>
            <div className="icon_text">{info.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
