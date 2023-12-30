import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ items }) => {
  const navigator = useNavigate();

  return (
    <>
      {items.map((item, index) => {
        return (
          <Col key={item.id} className="col-6 col-md-3 my-3">
            <Card
              className="rounded-4 shadow-bottom  py-3"
              onClick={() => {
                navigator("/Product/" + item.id);
              }}
            >
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="product-image"
                />
              </div>
              <Card.Body style={{ height: "160px" }}>
                <Card.Title className="truncate-text">{item.title}</Card.Title>
                <Card.Text>{item.price}$</Card.Text>
                <Button variant="outline-success me-2">
                  <i className="bi bi-cart-check me-1"></i>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default SingleCard;
