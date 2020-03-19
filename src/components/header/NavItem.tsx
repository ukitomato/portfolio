import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-scroll";


const NavItem = (props: { name: string }) => {
    return (
        <Nav.Item className={'navItem'}>
            <Link activeClass="active"
                  to={props.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
            >
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </Link>
        </Nav.Item>
    );
};

export default NavItem;
