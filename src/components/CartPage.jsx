import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cartData = useSelector((state) => state.content.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);

  const totalSum = cartData.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const getSuggestedProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((products) => {
        setTimeout(() => {
          setProducts(products);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (cartData.length <= 0) {
      getSuggestedProducts();
    }
  });

  return (
    <Container fluid className="p-4">
      {cartData.length > 0 ? (
        <Row className="mt-5 flex-column">
          {cartData.map((item, i) => {
            return (
              <Col
                key={item.id}
                className="d-flex align-items-center border border-2 rounded-4 justify-content-between col-md-6 p-2 mb-2 shadow-bottom"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt="clothing"
                    style={{ width: "10%" }}
                  />
                  <p className="m-0 ms-3">{item.title}</p>
                </div>

                <div className="d-flex align-items-center">
                  <p className="m-0">Price: {item.price}$</p>
                  <i
                    className="bi bi-trash fs-4 pointer ms-2"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: i });
                    }}
                  ></i>
                </div>
              </Col>
            );
          })}
          <Row>
            <Col>
              <p>Total amount: {totalSum}$</p>
              <Button className="rounded-pill">
                <i className="bi bi-credit-card-2-back me-1"></i>
                Checkout
              </Button>
            </Col>
          </Row>
        </Row>
      ) : (
        <Row className="mt-4 ">
          <p className="fs-4">
            Your cart is empty maybe you should like some of these products:
          </p>
          {products && <SingleCard items={products} />}
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
