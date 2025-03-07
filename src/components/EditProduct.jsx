import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setFormData({
          title: response.data.title,
          price: response.data.price,
          description: response.data.description,
          category: response.data.category,
        });
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch product: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, formData);
      setSubmitted(true);
      setError(null);

      setTimeout(() => navigate(`/products/${id}`), 2000);
    } catch (err) {
      setError(`Error updating the product. Please try again: ${err.message}`);
      setSubmitted(false);
    }
  };

  if (loading) return <p>Loading product data...</p>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-5">
      <h2>Edit Product</h2>

      {submitted && <Alert variant="success">Product updated successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="8">
            <FloatingLabel controlId="floatingTitle" label="Product Title" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter product title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <FloatingLabel controlId="floatingPrice" label="Price" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <FloatingLabel controlId="floatingCategory" label="Category" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <FloatingLabel controlId="floatingDescription" label="Description" className="mb-3">
              <Form.Control
                as="textarea"
                style={{ height: '150px' }}
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
