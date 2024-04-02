import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../../component/Faq/Faq';
import './ContactSide.css';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const ContactSide = () => {
  return (
    <>
      <div className="contact-img-top">
        <div className="contact-img-text">
          <div className="link">
            Home <i className="fa-solid fa-angle-right angle"></i>
            <Link className='link-item custom-link' to='/ContactSide'>
              <span className='shop-link'>Contact</span>
            </Link>
          </div>

          <div className="contact-heading">Contact us</div>
          <div className="contact-heading-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            <br /> blanditiis voluptatum deleniti.
          </div>
        </div>
      </div>
      <div className="contact-input-side">
        <div className="contact-inp">
          {['Full name', 'Email address'].map((label, index) => (
            <div key={index} className="inp-side">
              <label className='label-name' htmlFor="">{label}</label>
              <input className='inpName' type={index === 1 ? 'email' : 'text'} placeholder={label} />
            </div>
          ))}

          <div className="inp-side">
            <label className='label-name' htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              style={{ resize: 'none' }}
            ></textarea>
          </div>

          <div className="send-button">Send message</div>
        </div>


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6001667159367!2d49.844978275865344!3d40.37338917144653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d319a7aeb4d%3A0x53d6e9d0752061d1!2sBaku%20Code%20School!5e0!3m2!1sen!2saz!4v1707766497244!5m2!1sen!2saz"
          width="570"
          height="555"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="location-side-all">
        <div className="location-side">
          <div className="location-text">
            <div className="location-head">Our locations</div>
            <div className="location-title">Come for a coffee, we’d love to chat!</div>
            <div className="location-title-text">
              All good things start with a homepage. Get inspired without breaking your wallet with premium Figma and Sketch templates.
            </div>
            <Link  to='/homePage'><span className="link-more">  Learn-more <i className="fa-solid fa-arrow-right learn"></i></span></Link>
          </div>

          <div className="location-address">
            <div className="location-wrap">
              {[
                { country: 'Netherlands', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
                { country: 'Netherlands', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
                { country: 'Japan', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
                { country: 'Japan', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
                { country: 'United States', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
                { country: 'United States', city: 'Suite 101 Nayzak Street\nLondon REU UK' },
              ].map((location, index) => (
                <div key={index} className="wrap-data">
                  <div className="country-city">{location.country}</div>
                  <div className="city-side">
                    {location.city.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.city.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div />
        <h1 className='contact-head-frequent'>Frequently asked</h1>
        <Faq />
      </div>
    </>
  );
};

export default ContactSide;
