import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';
import { getProducts, filterProducts } from '../../redux/productSlice';
import './CategoryList.css';
import { Link } from 'react-router-dom';

const CategoryList = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const handleShowAllProducts = () => {
    dispatch(filterProducts(null)); 
  };

  return (
    <div className='category-side'>
      <h4 className='category-head-title'>Categories</h4>
      <Link onClick={handleShowAllProducts}><div className="category-all-products">All Products</div></Link>
      {
        categories?.map((category, i) => (
          <div className='dropdown' key={i}>
            {`${category.name} `} <i className=" angle fa-solid fa-angle-down"></i>
            <div className="drop">
              {
                category.children.map((cat, idx) => (
                  <p className='drop-li' key={idx} onClick={() => setCategory(cat.id)}> {cat.name}</p>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CategoryList;
