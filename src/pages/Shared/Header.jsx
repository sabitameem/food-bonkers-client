import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar
        className="d-flex align-items-center"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fs-2 fw-bold" href="/">
            food <span className="fst-italic">Bonkers</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex align-items-center gap-2">
              <Link className="text-white text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-white text-decoration-none" to="/blog">
                Blog
              </Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {/* <Image src="https://via.placeholder.com/30" roundedCircle /> */}
              {/* <Nav.Link eventKey={2} href="#memes">
            <button type="button" class="btn btn-light">Login</button>
            </Nav.Link> */}
              {user ? (
                <Button onClick={handleLogOut} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
