import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Modal,
  Alert,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigator = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [users, setUSers] = useState(null);
  const [loginError, setLoginError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getAllUsers = () => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in fetching users data");
        }
      })
      .then((users) => {
        setUSers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkCredentials = (email, password) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        console.log("login ok");
        dispatch({ type: "SAVE_USER_LOGIN", payload: users[i] });
        navigator("/");
        setLoginError(false);
        return;
      }
    }
    setLoginError(true);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
                {loginError && (
                  <Alert variant="danger">Username or password wrong!</Alert>
                )}
              </Col>
              <Col className="flex-column">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkCredentials(email, password);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-at fs-3 me-2"></i>

                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      required
                      className="rounded-4"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-lock fs-3 me-2"></i>

                    <Form.Control
                      className="rounded-4 mt-2"
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
