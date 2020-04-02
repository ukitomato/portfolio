import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const ColoredLine = (props: { color: string }) => (
    <hr
        className={'indicator-line'}
        style={{
            color: props.color,
            backgroundColor: props.color,
        }}
    />
);

const Line = (props: { name: string }) => {
    return (
        <Nav.Item className={'indicator-item'}>
            <Link
                activeClass="active"
                to={props.name}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <ColoredLine color={'white'} />
            </Link>
        </Nav.Item>
    );
};

export default Line;
