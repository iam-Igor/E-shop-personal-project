import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  const now = new Date();

  const year = now.getFullYear();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center flex-column align-items-center">
        <Col className="col-md-8">
          <ul className="list-unstyled d-flex justify-content-around">
            <li>Contact us</li>
            <li>About</li>
            <li>Faq</li>
            <li>Work with us</li>
          </ul>
        </Col>
        <Col className="col-8 fs-1 d-flex justify-content-center">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook mx-3"></i>
          <i className="bi bi-twitter-x"></i>
        </Col>
        <Col className="col-8 text-center">
          <p>
            © MyShop <span>{year}</span>, all rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
