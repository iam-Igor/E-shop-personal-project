import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const Categories = () => {
  const urlParams = useParams();

  const [products, setProducts] = useState(null);

  const setPageTitle = () => {
    switch (urlParams.category) {
      case "women's clothing":
        return "Women's Clothing";

      case "men's clothing":
        return "Men's Clothing";

      case "jewelery":
        return "Accessories";

      default:
        return null;
    }
  };

  const getProductsByCategoryName = () => {
    fetch("https://fakestoreapi.com/products/category/" + urlParams.category)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in fetching data");
        }
      })
      .then((prod) => {
        console.log(prod);
        setTimeout(() => {
          setProducts(prod);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsByCategoryName();
  }, [urlParams]);

  return (
    <Container>
      <Row className="mt-4">
        <h1>{setPageTitle()}</h1>
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

export default Categories;
