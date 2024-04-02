import React from 'react'
import { Link } from 'react-router-dom';

const ContactImg = () => {
  return (
    <div>
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
    </div>
  )
}

export default ContactImg