import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ProductList() {
  const [products, setProducts] = useState([]);     
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch products: ${error.message}`);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h3>
          <Spinner animation="border" variant="info" className="me-2" role="status" />
          Loading Products...
        </h3>
      </Container>
    );
  }

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Container>
      <h3 className="text-center mb-4">Products List</h3>
      <Row className="justify-content-center">
        {products.map(product => (
          <Col key={product.id} md={4} lg={3} className="mb-4">
            <Card style={{ width: '18rem' }} className="text-center">
              <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <Link to={`/products/${product.id}`}>
                  <Button variant="primary">Click to learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
