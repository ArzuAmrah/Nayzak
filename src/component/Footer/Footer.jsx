import React from 'react'
import './Footer.css'
import logo from '../../assets/image/Branding.png'
import flag from '../../assets/image/flag.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-up">

        <div className="footer-left">
          <div className="log"><img src={logo} alt="" /></div>
          <div className="foot-text">Phosf luorescently engage worldwide method process shopping.</div>
          <div className="icons">
            <div className="icon-media"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="icon-media"><i class="fa-brands fa-instagram"></i></div>
            <div className="icon-media"><i class="fa-brands fa-twitter"></i></div>
            <div className="icon-media"><i class="fa-regular fa-envelope"></i></div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <div className="link-title">Shop</div>
            <ul>
              <div className="list"><Link to="/Account">My account</Link></div>
              <div className="list"><Link to="/SignIn">Login</Link></div>
              <div className="list"><Link to="/Wishlist">Wishlist</Link></div>
              <div className="list"><Link to="/Cart">Cart</Link></div>
            </ul>
          </div>
          <div className="footer-links">
            <div className="link-title">Information</div>
            <ul>
              <div className="list">Shipping Policy</div>
              <div className="list">Returns & Refunds</div>
              <div className="list">Cookies Policy</div>
              <div className="list"><Link to='/FaqMain'>Frequently asked</Link></div>
            </ul>
          </div>
          <div className="footer-links">
            <div className="link-title">Company</div>
            <ul>
              <div className="list"><Link to="/about">About Us</Link></div>
              <div className="list">Privacy Policy</div>
              <div className="list">Terms & Conditions</div>
              <div className="list"><Link to="/ContactSide">Contact Us</Link></div>
            </ul>
          </div>

        </div>

      </div>

      <div className="footer-down">
        <div className="foot-num">© 2088 Nayzak Design</div>
        <div className="foot-detail">
          <div className="lang"><img src={flag} alt="" />  English </div>
          <div className="usd">USD</div>
        </div>
      </div>
    </div>
  )
}

export default Footer