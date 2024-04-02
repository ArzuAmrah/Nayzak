import Carousel from 'react-bootstrap/Carousel';
import Product from '../../component/Product/Product';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MultipleItems() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/en/products/list/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <Carousel>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Product product={product} />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MultipleItems;
