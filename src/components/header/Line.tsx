import React, { ReactElement } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import ColoredLine from '../ColoredLine';

const Line = (props: { name: string }): ReactElement => {
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
                <ColoredLine color={'white'} className={'indicator-line'} />
            </Link>
        </Nav.Item>
    );
};

export default Line;
