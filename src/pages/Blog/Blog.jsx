import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Blog.css'
import blog1 from '../../assets/svg/Blog1.svg'
import blog2 from '../../assets/svg/Blog2.svg'
import blog3 from '../../assets/svg/Blog3.svg'
import blog4 from '../../assets/svg/Blog4.svg'
import blog5 from '../../assets/svg/Blog5.svg'
import blog6 from '../../assets/svg/Blog6.svg'
import blog7 from '../../assets/svg/Blog7.svg'
import blog8 from '../../assets/svg/Blog8.svg'
import blog9 from '../../assets/svg/Blog9.svg'
import blog10 from '../../assets/svg/Blog10.svg'
import blog11 from '../../assets/svg/Blog11.svg'
import blog12 from '../../assets/svg/Blog12.svg'

const Blog = () => {
  return (
    <>
           <div className="contact-img-top">
        <div className="contact-img-text">
          <div className="link">
            Home <i className="fa-solid fa-angle-right angle"></i>
            <Link className='link-item custom-link' to='/Shop'>
              <span className='shop-link'>Blog</span>
            </Link>
          </div>

          <div className="contact-heading">Nayzak Blog</div>
          <div className="contact-heading-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            <br /> blanditiis voluptatum deleniti.
          </div>
          <div className="blog-inp-side"><input className='blog-inp' type="text" placeholder='Search' /></div>
        </div>
      </div>

      <div className="blog-data-side">

        <div className="blog-flex-wrap-side">
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog1} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog2} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">What’s The First Light Jacket You Wear Come Fall?</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog3} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">Take Your Bed With you: 3 Cozy People Style Quilted Clothes</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog4} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">7 Printed Pants Recipes for Fall</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog5} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">I Asked 3 Beauty Experts to Help Me Create a Minimalist Skincare Routine</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog6} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">Advice: Am I The Only One Who Doesn’t Want To Look Like Glass?</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog7} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">You Look Moist: A Graphic Designer’s Cheap & Simple Approach to Dewy Skin</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog8} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">The Outnet Sale Just Made Me Really, Really Excited for Fall</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog9} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">The Outnet Sale Just Made Me Really, Really Excited for Fall</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog10} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">Blog Post Title</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog11} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">Advice: Am I The Only One Who Doesn’t Want To Look Like Glass?</div>
        </div>
        <div className="blog-data-single">
          <div className="blog-img"><img src={blog12} alt=""/></div>
          <div className="blog-date">October 12, 2024</div>
          <div className="blog-title">You Look Moist: Team Repeller’s Marisa Lifschutz’s K-Beauty-Inspired Routine</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Blog