import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { Tooltip } from "bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [showTooltip, setShowTooltip] = useState(false);
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
              <div className="container">
                <div className="row">
                  <div className="col-md-4 offset-md-4 w-50 d-flex justify-content-center align-items-center">
                    <div className="profile">
                      {user && (
                        <img
                          src={user.photoURL}
                          className="img-fluid rounded-circle"
                          alt="User Profile"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

           

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
