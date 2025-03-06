import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ProductDetails() {
  const { id } = useParams();  // Extract product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);  // Cart count state

  // Fetch product data on component mount or when product ID changes
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch product: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  // Handle product deletion
  const deleteProduct = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert('Product deleted successfully!');
        window.location.href = '/products'; // Redirect to products list after deletion
      })
      .catch((error) => {
        setError(`Failed to delete product: ${error.message}`);
      });
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h3>
          <Spinner animation="border" variant="info" className="me-2" role="status" />
          Loading Product...
        </h3>
      </Container>
    );
  }

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Container className="text-center mt-4">
      <Card style={{ width: '24rem', margin: 'auto' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
          
          {/* Buttons */}
          <Button variant="info" href="/products" className="mb-2">Back to Products</Button>
          
          {/* Cart Button */}
          <Button 
            variant="primary" 
            className="mb-2" 
            onClick={() => setCount(count + 1)}
          >
            Add to Cart. You now have {count} items in your cart.
          </Button>

          {/* Delete Button */}
          <Button variant="danger" onClick={deleteProduct}>Delete the Product</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
