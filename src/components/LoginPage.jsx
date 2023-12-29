import { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Container fluid className="p-0">
        <Row className="vh-100">
          <Col
            className="d-flex justify-content-center py-5"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundSize: "cover",
            }}
          >
            <Row className="flex-column bg-white rounded-4 p-3 my-5 align-items-cente login-form-row">
              <Col>
                <h3 className="text-center">Sign in</h3>
              </Col>
              <Col className="flex-column">
                <Form>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-at fs-3 me-2"></i>

                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      required
                      className="rounded-4"
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-lock fs-3 me-2"></i>

                    <Form.Control
                      className="rounded-4 mt-2"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Form.Check
                    className="mt-3"
                    type="switch"
                    id="custom-switch"
                    label="Remember me"
                  />
                  <div className="text-center mt-3">
                    <Button
                      type="submit"
                      className="rounded-pill w-75"
                      variant="outline-primary"
                    >
                      Login
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col className="mt-3">
                <p>
                  Don't have an account?{" "}
                  <span
                    className="fw-bold link-underline-primary pointer"
                    onClick={handleShow}
                  >
                    Create now!
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>My Shop registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Your name"
              required
              className="my-2"
            />
            <Form.Control type="email" placeholder="Your email" required />
            <Form.Control
              type="password"
              placeholder="Choose a password"
              required
              className="my-2"
            />
            <Form.Check
              label="I accept the terms and agreements"
              name="group1"
              required
            />
            <Button type="submit" className="mt-2 rounded-pill">
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="rounded-4"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginPage;
