import { Col, Container, Row } from "react-bootstrap";
import notfoundImg from "../assets/media/img/shutterstock_479042983.jpg";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="text-center">
            <img src={notfoundImg} alt="not-found" style={{ width: "100%" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
