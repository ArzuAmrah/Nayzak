import React, { useState, useEffect } from 'react';
import './Products.css'
import { getProducts} from '../../redux/productSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../component/Product/Product';
import Loading from '../../component/Loading/Loading'
import { filterProducts } from '../../redux/productSlice';

const Products = ({ category }) => {

    const dispatch = useDispatch()
    const { products, productsStatus, filteredProducts } = useSelector(state => state.products)
    console.log(products, 'products');


    const [visibleProducts, setVisibleProducts] = useState(4);
    useEffect(() => {
        console.log(category)
        if (category) {
            dispatch(filterProducts(category))
            console.log(products)
        } else {
            dispatch(getProducts())
        }
    }, [dispatch, category])

    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
    };

    return (
        <div className='data-api-all'>
            {
                productsStatus === "LOADING" ? <Loading /> :
                    <div className='products-all-data-api'>
                        {
                            filteredProducts.length > 0 ? filteredProducts?.slice(0, visibleProducts).map((product, i) => (
                                <Product key={i} product={product} />
                            )) : products?.slice(0, visibleProducts).map((product, i) => (
                                <Product key={i} product={product} />
                            ))
                        }
                    </div>
            }
            {visibleProducts < (filteredProducts.length > 0 ? filteredProducts.length : products.length) && (
                <button className='more-button' onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default Products;
