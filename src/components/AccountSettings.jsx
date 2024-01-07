import { useEffect, useState } from "react";
import { Col, Container, Row, Tabs, Tab, Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import bgImg from "../assets/media/img/stacked-waves-haikei.png";

const AccountSettings = () => {
  const urlParams = useParams();
  console.log(urlParams.accountId);

  const [userData, setUserData] = useState({});

  console.log(userData);

  const getUserData = () => {
    fetch("https://fakestoreapi.com/users/" + urlParams.accountId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in fetching user data.");
        }
      })
      .then((user) => {
        console.log(user);
        setUserData(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (urlParams.accountId !== "undefined") {
      getUserData();
    }
  }, []);

  return (
    <Container fluid>
      {Object.keys(userData).length > 0 &&
      urlParams.accountId !== "undefined" ? (
        <Row className="mt-5">
          <Col>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="General" title="General">
                <Row>
                  <Col>
                    <h5 className="mb-4">Edit your general info</h5>
                    <Form>
                      Email
                      <Form.Control
                        type="email"
                        placeholder="email"
                        className="my-2"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                      Username
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        className="my-2"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
                      Password
                      <Form.Control
                        type="password"
                        placeholder="password"
                        className="my-2"
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                      />
                      First name
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        className="my-2"
                        value={userData.name.firstname}
                        onChange={(e) =>
                          setUserData({
                            ...userData.name,
                            firstname: e.target.value,
                          })
                        }
                      />
                      Last name
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        className="my-2"
                        value={userData.name.lastname}
                        onChange={(e) =>
                          setUserData({
                            ...userData.name,
                            lastname: e.target.value,
                          })
                        }
                      />
                      <Button className="rounded-pill mt-3">Save</Button>
                    </Form>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="Address" title="Address">
                <Form>
                  City
                  <Form.Control
                    type="text"
                    placeholder="City"
                    className="my-2"
                    value={userData.address.city}
                    onChange={(e) =>
                      setUserData({ ...userData.address, city: e.target.value })
                    }
                  />
                  Address number
                  <Form.Control
                    type="phone"
                    placeholder="Username"
                    className="my-2"
                    value={userData.address.number}
                    onChange={(e) =>
                      setUserData({
                        ...userData.address,
                        number: e.target.value,
                      })
                    }
                  />
                  Street
                  <Form.Control
                    type="text"
                    placeholder="street"
                    className="my-2"
                    value={userData.address.street}
                    onChange={(e) =>
                      setUserData({
                        ...userData.address,
                        street: e.target.value,
                      })
                    }
                  />
                  Zip Code
                  <Form.Control
                    type="phone"
                    placeholder="zip-code"
                    className="my-2"
                    value={userData.address.zipcode}
                    onChange={(e) =>
                      setUserData({
                        ...userData.address,
                        zipcode: e.target.value,
                      })
                    }
                  />
                  Phone
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    className="my-2"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        phone: e.target.value,
                      })
                    }
                  />
                  <Button className="rounded-pill mt-3">Save</Button>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      ) : (
        <Row className="mt-5">
          <h5>
            You are not logged in,please <Link to="/Login">log in</Link> with
            your account
          </h5>
        </Row>
      )}
    </Container>
  );
};

export default AccountSettings;
