import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const urlParams = useParams();
  const navigator = useNavigate();

  const [singleProduct, setSingleProduct] = useState(null);

  const getProductDetails = () => {
    fetch("https://fakestoreapi.com/products/" + urlParams.productId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in fetching data.");
        }
      })
      .then((product) => {
        console.log(product);
        setTimeout(() => {
          setSingleProduct(product);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <Container>
        {singleProduct ? (
          <Row className="flex-column flex-md-row border border-2 rounded-4 mt-5 shadow-bottom p-3">
            <Col className="col-12 col-md-4">
              <img
                src={singleProduct.image}
                alt="clothing-img"
                style={{ width: "100%" }}
              />
            </Col>
            <Col className="col-12 col-md-8">
              <h1>{singleProduct.title}</h1>
              <h4>{singleProduct.description}</h4>
              <p>Category: {singleProduct.category}</p>
              <p>Price: {singleProduct.price}$</p>
              <Button
                className="me-3 rounded-pill"
                onClick={() => {
                  navigator("/Home");
                }}
              >
                <i className="bi bi-house me-1"></i>
                Back home
              </Button>
              <Button className="rounded-pill" variant="success">
                <i className="bi bi-cart-check me-1"></i>
                Add to cart
              </Button>
            </Col>
          </Row>
        ) : (
          <Row className="d-flex mt-5">
            <Col className="col-12 d-flex align-items-center justify-content-center mt-5">
              <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
