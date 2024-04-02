import React from 'react';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pastepht from '../../assets/image/pastepht.png';
import paste from '../../assets/image/paste.png';
import truck from '../../assets/svg/truck.svg';
import money from '../../assets/svg/money.svg';
import phone from '../../assets/svg/phone.svg';
import lock from '../../assets/svg/lock.svg';
import rating1 from '../../assets/svg/rating1.svg';
import rating2 from '../../assets/svg/rating2.svg';
import rating3 from '../../assets/svg/rating3.svg';
import starIcon from '../../assets/svg/star.svg';
import logo1 from '../../assets/svg/Logo1.svg'
import logo2 from '../../assets/svg/Logo2.svg'
import logo3 from '../../assets/svg/Logo3.svg'
import logo4 from '../../assets/svg/Logo4.svg'
import logo5 from '../../assets/svg/Logo5.svg'
import logo6 from '../../assets/svg/Logo6.svg'
import { NavLink } from 'react-router-dom';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  const similarItems = [
    {
      image: rating1,
      name: 'Omar D.',
      stars: 5,
      review: '“Omg! These are adorable. Very comfortable while and fashionable. Brilliant customer support helping with 😍”',
    },
    {
      image: rating2,
      name: 'John F.',
      stars: 4,
      review: '“High quality and great design.”',
    },
    {
      image: rating3,
      name: 'Mandy A.',
      stars: 5,
      review: '“Omg! These are adorable. Very comfortable while and fashionable. Brilliant customer support helping”',
    },
    {
      image: rating2,
      name: 'Omar D.',
      stars: 5,
      review: '“Omg! These are adorable. Very comfortable while and fashionable. Brilliant customer support helping with 😍”',
    },
    {
      image: rating1,
      name: 'Jonah B',
      stars: 3,
      review: 'High quality and great design.',
    },
    {
      image: rating2,
      name:'Sam D' ,
      stars: 5,
      review: '“Omg! These are adorable. Very comfortable while and fashionable. Brilliant customer support helping”',
    },
  
  ];
  return (
    <>
      <div className="img-top">
        <div className="img-text">Hand-picked cultural products <br /> that will make you shine.</div>
      </div>

      <div className="second-about">
        <div className="about-left">
          <h4 className='about-head'>THE COMPANY</h4>
          <div className="about-text">Handmade garments by independent brands</div>
          <div className="about-data">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</div>
          <span className="see"><NavLink to='/Shop'>See collection</NavLink> <i className="fa-solid fa-arrow-right"></i></span>
        </div>

        <div className="about-right">
          <img className='paste-pht' src={pastepht} alt="" />
        </div>
      </div>

      <div className="about-third">
        <div className="brands-side">
          <div className="brands-text">
            <div className="brand-left">
              <h4 className='brand-head'>Lovable brands</h4>
              <div className="brand-data">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu.</div>
              <span className="see"><NavLink to='/Shop'>See collection</NavLink> <i className="fa-solid fa-arrow-right"></i></span>
              <div className='line'></div>
            </div>
          </div>

          <div className="brands">
            <div className="brands-right">
              <img className='logos-pht' src={logo1} alt="logo" />
              <img className='logos-pht' src={logo2} alt="logo" />
              <img className='logos-pht' src={logo3} alt="logo" />
              <img className='logos-pht' src={logo4} alt="logo" />
              <img className='logos-pht' src={logo5} alt="logo" />
              <img className='logos-pht' src={logo6} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="second-about">
        <div className="about-right">
          <img className='paste-pht' src={paste} alt="" />
        </div>

        <div className="fourth-left">
          <h4 className='about-head'>OUR MISSION</h4>
          <div className="about-text">Handmade garments by independent brands</div>
          <div className="about-data">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</div>
          <span className="see">See collection <i className="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>

      <div className="swiper-side-main">
        <div className="swiper-heading">
          <div className="swiper-heading-top">Create your dream shop in a <br /> glance with Nayzak theme.</div>
          <div className="swiper-heading-top-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</div>
        </div>
        <div className="swiper-side">
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {similarItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider_main">
              <div className="slider photo">
                <img className='reviewBoy' src={item.image} alt="" />
              </div>
              <div className="slider_name">{item.name}</div>
              <div className="slider_stars">
                {Array.from({ length: item.stars }).map((_, starIndex) => (
                  <img key={starIndex} src={starIcon} alt="star" />
                ))}
              </div>
              <div className="slider_review">{item.review}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
      <div className="shipping-side">
        {[
          { icon: truck, title: 'Free Shipping', text: 'Orders above $200' },
          { icon: money, title: 'Money-back', text: '30 day Guarantee' },
          { icon: phone, title: 'Premium Support', text: 'Phone and email support' },
          { icon: lock, title: 'Secure Payments', text: 'Secured by Stripe' },
        ].map((info, index) => (
          <React.Fragment key={index}>
            <div className="about-shipping-side">
              <div className="about_icon"><img src={info.icon} alt="" /></div>
              <div className="icon_title">{info.title}</div>
              <div className="title-text">{info.text}</div>
            </div>
          </React.Fragment>
          
        ))}
      </div>
    </>
  );
}

export default About;
