import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, useQuery] = useSearchParams()
  
  const getProducts = async() => {
    let searchQuery = query.get("q") || "";
    let url = `http://my-json-server.typicode.com/jun14311/project7_1/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  }

  // useEffect(함수, 배열)
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <>
      <Container className='mt-5'>
        <Row>
            {productList.map((menu) => (
              <Col md={6} lg={3}>
              <ProductCard item={menu} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll