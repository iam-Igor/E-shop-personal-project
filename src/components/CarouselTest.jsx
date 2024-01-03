import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CarouselTest = ({ items }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        deviceType="desktop"
        renderDotsOutside
        className="pb-1"
      >
        {items.map((item, i) => {
          return (
            <div key={item.id} className="">
              <Card className="rounded-4 shadow-bottom  py-3 me-4">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="product-image"
                    onClick={() => {
                      navigator("/Product/" + item.id);
                    }}
                  />
                </div>
                <Card.Body style={{ height: "160px" }}>
                  <Card.Title className="truncate-text">
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.price}$</Card.Text>
                  <Button
                    variant="outline-success me-2"
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: item });
                    }}
                  >
                    <i className="bi bi-cart-check me-1"></i>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselTest;
