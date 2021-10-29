import * as React from "react"
import PropTypes from "prop-types"
import { Container, Nav, Navbar } from "react-bootstrap"
import GatsbyNavLink from "./navs"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className={"pb-3"}>
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <GatsbyNavLink to="/page-2/">Features</GatsbyNavLink>
            </Nav.Item>
            <Nav.Item>
              <GatsbyNavLink to="/using-typescript/">TypeScript</GatsbyNavLink>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
