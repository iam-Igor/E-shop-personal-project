import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import CarouselTest from "./CarouselTest";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import bgImg from "../assets/media/img/pexels-mikhail-nilov-6836213.jpg";
import fgImg from "../assets/media/img/pexels-mikhail-nilov-6836213-removebg.png";

const HomePage = () => {
  const [products, setProducts] = useState(null);
  const navigator = useNavigate();
  const userData = useSelector((state) => state.content.user);

  console.log(userData);

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
    getSuggestedProducts();

    if (userData.length < 0) {
      toast("Welcome " + userData[0].username, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  return (
    <Container fluid>
      {userData.length > 0 && (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <ToastContainer />
        </>
      )}

      <Row className="mt-4">
        <Col className="p-0">
          <ParallaxBanner
            layers={[
              { image: bgImg, speed: -20 },
              { image: fgImg, speed: -20 },
            ]}
            className="aspect-[2/1] py-4"
          >
            <div className="position-relative inset-0 flex items-center justify-center p-md-5">
              <Row className="flex-column home-page-text p-5 text-center">
                <Col>
                  <p className="fw-bold">AUTUMN/WINTER COLLECTION 2024</p>
                </Col>
                <Col>
                  <h1>Get up to 30% off</h1>
                  <h1>New arrivals</h1>
                </Col>
                <Col>
                  <Button variant="primary" className="rounded-4">
                    ENTER PROMO CODE "WINTER24" IN CHECKOUT
                  </Button>
                </Col>
              </Row>
            </div>
          </ParallaxBanner>
        </Col>
      </Row>
      <Parallax speed={4}>
        <Row className="mt-2 justify-content-center flex-column flex-md-row">
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
      </Parallax>
      <Parallax speed={10}>
        <Row className="d-flex py-3 justify-content-center">
          <h1 className="text-center">Suggested products</h1>
          {products && <CarouselTest items={products} />}
        </Row>
      </Parallax>

      <Row className="mt-4">
        <h1 className="text-center">You may also like..</h1>
        {products ? (
          <SingleCard items={products} />
        ) : (
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
        )}
      </Row>
    </Container>
  );
};

export default HomePage;
