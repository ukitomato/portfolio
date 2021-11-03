import * as React from "react"
import { Component } from "react"
import PropTypes from "prop-types"
import { Container, Nav, Navbar } from "react-bootstrap"
import GatsbyNavLink from "../components/navs"

class Header extends Component {
  siteTitle = ""
  state = {
    bg: "transparent",
  }

  constructor({ siteTitle }) {
    super()
    this.siteTitle = siteTitle
  }

  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ bg: "dark" })
    } else {
      this.setState({ bg: "transparent" })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    return (
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg={this.state.bg}
          variant="dark"
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand href="#">{this.siteTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Item>
                  <GatsbyNavLink to="#about">About</GatsbyNavLink>
                </Nav.Item>
                <Nav.Item>
                  <GatsbyNavLink to="#skill">Skill</GatsbyNavLink>
                </Nav.Item>
                <Nav.Item>
                  <GatsbyNavLink to="#career">Career</GatsbyNavLink>
                </Nav.Item>
                <Nav.Item>
                  <GatsbyNavLink to="#research">Research</GatsbyNavLink>
                </Nav.Item>
                <Nav.Item>
                  <GatsbyNavLink to="#contact">Contact</GatsbyNavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
