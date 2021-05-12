import React from "react";
import { Navbar, Nav, Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import logoIcon from "../images/logo.png";

const ShadowContainer = styled.div`
  box-shadow: 0px 0px 5px 1px #ccc;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 2;
`;
const Logo = styled.img``;

const NavLink = styled(Nav.Link)`
  font-size: 13px;
  margin: 0 20px;
`;

const QuizNavigationBar = () => {
  const authToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <ShadowContainer>
      <Container>
        <Navbar className="my-4" expand="lg">
          <Navbar.Brand href="/">
            <Logo src={logoIcon} alt="Company Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about-us">ABOUT US</NavLink>
            </Nav>
            <Form inline>
              {authToken ? (
                <Button
                  onClick={handleLogout}
                  variant="outline-primary"
                  className="px-4"
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  as="a"
                  href="/signin"
                  variant="outline-primary"
                  className="px-4"
                >
                  Sign in
                </Button>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </ShadowContainer>
  );
};
export default QuizNavigationBar;
