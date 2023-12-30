import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  Badge,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  const navigator = useNavigate();

  const goTo = (param) => {
    navigator("/Categories/" + param);
  };

  return (
    <Navbar
      expand="md"
      className={
        location.pathname === "/Login"
          ? "d-none"
          : "bg-body-tertiary shadow-bottom sticky-top"
      }
    >
      <Container fluid>
        <Navbar.Brand onClick={() => navigator("/")}>My shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigator("/")}>Home</Nav.Link>
            <Nav.Link href="#link">Promo</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  goTo("men's clothing");
                }}
              >
                Man
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  goTo("women's clothing");
                }}
              >
                Woman
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  goTo("jewelery");
                }}
              >
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="mt-3 mt-md-0 me-4">
            <Row>
              <Col xs="8" className="pe-0">
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col xs="2">
                <Button type="submit" variant="outline-primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="d-flex flex-md-row mt-2 mt-md-0">
            <Dropdown>
              <Navbar.Brand
                id="dropdown-basic"
                as={DropdownToggle}
                variant="outline-primary"
              >
                <img
                  src="https://i.pinimg.com/564x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="user-img"
                />
              </Navbar.Brand>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <i className="bi bi-person-circle me-1"></i>
                  Account
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <i className="bi bi-bag-dash-fill me-1"></i>
                  Your orders
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <i className="bi bi-headset me-1"></i>
                  Assistance
                </Dropdown.Item>
                <NavDropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    navigator("/Login");
                  }}
                >
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary">
              <i className="bi bi-cart-check me-1"></i>{" "}
              <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
