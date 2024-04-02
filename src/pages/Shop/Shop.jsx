import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import CategoryList from '../../component/CategoryList/CategoryList';
import Products from '../../component/Products/Products';


const Shop = ({ }) => {

    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        console.log(category)
    }, [category])

    return (
        <>
        <div className="contact-img-top">
        <div className="contact-img-text">
          <div className="link">
            Home <i className="fa-solid fa-angle-right angle"></i>
            <Link className='link-item custom-link' to='/Shop'>
              <span className='shop-link'>Shop</span>
            </Link>
          </div>

          <div className="contact-heading">Shop</div>
          <div className="contact-heading-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            <br /> blanditiis voluptatum deleniti.
          </div>
        </div>
      </div>
            <div className="shop-all-data">
                <CategoryList setCategory={setCategory} />
                <Products category={category} />
            </div>
        </>
    );
}

export default Shop;