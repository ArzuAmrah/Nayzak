import React from 'react'
import Faq from '../../component/Faq/Faq'
import './FaqMain.css'
import { Link } from 'react-router-dom';

const FaqMain = () => {
    return (
        <>
       <div className="contact-img-top">
        <div className="contact-img-text">
          <div className="link">
            Home <i className="fa-solid fa-angle-right angle"></i>
            <Link className='link-item custom-link' to='/ContactSide'>
              <span className='shop-link'>Faq</span>
            </Link>
          </div>

          <div className="contact-heading">Faq</div>
          <div className="contact-heading-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            <br /> blanditiis voluptatum deleniti.
          </div>
        </div>
      </div>
        <div className="faq-shopping">
        <h2 className='faq_head'>Shopping</h2>
        <Faq />
        </div>
        <div className="faq-shopping">
        <h2 className='faq_head'>Payment</h2>
        <Faq />
        </div>
        </>
    )
}
export default FaqMain