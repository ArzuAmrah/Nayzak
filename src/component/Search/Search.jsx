import React, { useState, useEffect } from 'react';
import './Search.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");
    const [myData, setMyData] = useState([]);
    const { API_IMAGE } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    useEffect(() => {
        dispatch(getProducts()).then((data) => {
            setMyData(data.payload);
            console.log(data.payload);
        }).catch(error => {
            console.error('Fetch Error:', error);
        });
    }, [dispatch]);

    const searchData = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    const handleProductClick = (productId) => {
        navigate(`/Shop/products/${productId}`); 
    };

    const filteredData = myData.filter(result =>
        result.title &&
        (result.title.toLowerCase().includes(search))
    );

    return (
        <div className='search-flex'>
            <div className="data-side">
                <input className='search-input' onChange={searchData} type="text" placeholder='Search' />
            </div>
            <div className="characters">
                {filteredData.length > 0 ? (
                    filteredData.map((a, i) => (
                        <div key={i} className='side' onClick={() => handleProductClick(a.id)}>
                            <img className='search-img' src={`${API_IMAGE}${a.image.image}`} alt="" />
                            <h1 className='search-title'>{a.title}</h1>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
