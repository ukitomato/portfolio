import React from 'react';

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
