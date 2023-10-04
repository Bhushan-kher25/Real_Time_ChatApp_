import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, NavDropdown, Container , Button } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/weChat.png";

export default function Navigation() {
  const user = useSelector((state) => state.user);
  const [ logoutUser] = useLogoutUserMutation();
  async function handleLogout(e){
    e.preventDefault();
    await logoutUser(user);
    // redirect to homepage
    window.location.replace("/");

  }
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg-color="dark"
      bg-background-color="dark"
    >
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} style={{ width: 75, height: 75 }} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    <img
                      src={user.picture}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt="user_dp"
                    />
                    {user.name}
                  </>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
