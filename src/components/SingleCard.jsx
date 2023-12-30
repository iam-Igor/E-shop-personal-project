import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

const SingleCard = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {items.map((item, index) => {
        const isItemSelected = selectedItem === item.id;

        return (
          <Col
            key={item.id}
            className={`col-6 col-md-3 my-3 ${isItemSelected ? "flip" : ""}`}
          >
            <Card className="rounded-4">
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
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setSelectedItem(isItemSelected ? null : item.id);
                  }}
                >
                  Details
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
