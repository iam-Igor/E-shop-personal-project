import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState(null);
  const navigator = useNavigate();

  const goTo = (param) => {
    navigator("/Categories/" + param);
  };

  const getSuggestedProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((products) => setProducts(products))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSuggestedProducts();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col
          className="home-page-main-column align-items-center justify-content-center d-flex"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundPositionY: "20%",
          }}
        >
          <Row className="flex-column home-page-text">
            <Col>
              <p className="fw-bold">AUTUMN/WINTER COLLECTION 2023</p>
            </Col>
            <Col>
              <h1>Get up to 30% off</h1>
              <h1>New arrivals</h1>
            </Col>
            <Col>
              <Button variant="primary" className="rounded-4">
                Shop Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center flex-column flex-md-row">
        <Col className="col-md-3">
          <Card
            onClick={() => {
              goTo("women's clothing");
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Text>Women</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-3 my-3 my-md-0">
          <Card
            onClick={() => {
              goTo("men's clothing");
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Text>Men</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-3">
          <Card
            onClick={() => {
              goTo("jewelery");
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Text>Accessories</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        {products ? <SingleCard items={products} /> : <Col></Col>}
      </Row>
    </Container>
  );
};

export default HomePage;
