import React, { ReactHTMLElement } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const ColoredLine = (props: { color: string; className: string }) => (
    <hr
        className={props.className}
        style={{
            color: props.color,
            backgroundColor: props.color,
        }}
    />
);

export default ColoredLine;
