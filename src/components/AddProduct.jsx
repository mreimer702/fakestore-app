import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

const AddProduct = () => {

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await axios.post('https://fakestoreapi.com/products', formData);
        console.log(response.data);
        setProduct(response.data);  
        setSubmitted(true);
        setError(null);
      } catch (err) {
        setError(`Error submitting the form. Please try again: ${err.message}`);
        setSubmitted(false);
      }
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5">
      <h2>Create A Product</h2>

      {submitted && <Alert variant="success" dismissible>{product?.title} created successfully!</Alert>}
      {error && <Alert variant="danger" dismissible>{error}</Alert>}

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        
        <Row className="mb-3">
          <Col md="12">
            <Form.Group controlId="formTitle">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of your product"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="12">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter your product category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a product category
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="12">
            <FloatingLabel controlId="floatingPrice" label="Price">
              <Form.Control
                type="number"
                placeholder="Enter the price of your product"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a price for your product
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="12">
            <FloatingLabel controlId="floatingDescription" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Enter a description of your product"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                style={{ height: '150px' }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description of your product
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3 mb-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
