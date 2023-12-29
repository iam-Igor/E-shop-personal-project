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
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <Navbar
      expand="md"
      className={
        location.pathname === "/" ? "d-none" : "bg-body-tertiary shadow-bottom"
      }
    >
      <Container fluid>
        <Navbar.Brand href="#home">My shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Promo</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Man</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Woman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
                  navigator("/");
                }}
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form className="mt-3 mt-md-0">
            <Row>
              <Col xs="8">
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col xs="2">
                <Button type="submit" variant="outline-primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
