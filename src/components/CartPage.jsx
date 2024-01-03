import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cartData = useSelector((state) => state.content.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [sumWithDiscount, setSumWithDioscount] = useState(0);
  const [priceChecking, setPriceChecking] = useState(false);
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(true);

  const validPromoCode = "WINTER24";

  let totalSum = cartData.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const checkPromoCode = () => {
    if (promoCode === validPromoCode) {
      setTimeout(() => {
        setPriceChecking(true);
      }, 500);
      const newSum = totalSum * 0.7;
      setPriceChecking(false);
      setSumWithDioscount(newSum);
    } else {
      setIsPromoCodeValid(false);
      setTimeout(() => {
        setIsPromoCodeValid(true);
      }, 1000);
    }
  };

  console.log(totalSum);

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
    <Container fluid className="p-2">
      {cartData.length > 0 ? (
        <Row className="mt-5 flex-column">
          {cartData.map((item, i) => {
            return (
              <Col
                key={item.id}
                className="d-flex align-items-center border border-2 rounded-4 justify-content-between col-md-6  p-2 mb-2 shadow-bottom"
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
                    className="bi bi-bag-x fs-4 pointer ms-2"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: i });
                    }}
                  ></i>
                </div>
              </Col>
            );
          })}
          <Row>
            <Col className="col-md-4 mt-3">
              <Form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  checkPromoCode();
                }}
              >
                <Form.Control
                  className={isPromoCodeValid ? "" : "error"}
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                  }}
                  required
                />
                {priceChecking ? (
                  <div className="success-animation">
                    <svg
                      className="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                  </div>
                ) : (
                  <Button
                    className="rounded-pill btn-success ms-2"
                    type="submit"
                  >
                    Verify
                  </Button>
                )}
              </Form>
              <p className="mt-3">
                Total amount:{" "}
                {sumWithDiscount > 0 ? sumWithDiscount.toFixed(2) : totalSum}$
              </p>
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
