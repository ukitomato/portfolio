import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../logo.svg';
import NavItem from './header/NavItem';

class Header extends Component {
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    render(): React.ReactElement {
        return (
            <Navbar bg="dark" variant="dark" fixed={'top'}>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link
                        color="FFFFFF"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        UKITOMATO
                    </Link>
                </Navbar.Brand>
                <NavItem name={'home'} />
                <NavItem name={'about'} />
                <NavItem name={'skill'} />
                <NavItem name={'career'} />
                <NavItem name={'contact'} />
            </Navbar>
        );
    }
}

export default Header;
