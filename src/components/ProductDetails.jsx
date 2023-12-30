import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const urlParams = useParams();
  const navigator = useNavigate();

  const [singleProduct, setSingleProduct] = useState();
  const [starsArray, setStarsArray] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

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
          seIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        seIsLoading(false);
      });
  };

  const setProductRating = () => {
    const rating = Math.floor(singleProduct.rating.rate);
    const stars = [];
    console.log("rating" + rating);

    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg viewBox="0 0 576 512" width="20" title="star" fill="orange">
          <path
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
          103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25
          -145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
      );

      setStarsArray(stars);
      console.log(starsArray);
    }
  };
  useEffect(() => {
    getProductDetails();

    if (singleProduct) {
      setProductRating();
    }
  }, [isLoading]);

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
              <div className="d-flex mb-2">{starsArray}</div>
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
              <div className="spinner">
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
