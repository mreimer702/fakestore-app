import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <Row>
        <Col>
          <h1>Hi, Welcome to Martin Reimer's Fake Store</h1>
          <h2>This store sells any fake products that you can access through the Fake Store API</h2>
          <Link to="/products">
            <Button variant="primary" className="mt-3">Product List</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
