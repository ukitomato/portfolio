import React, { ReactElement } from 'react';

const ColoredLine = (props: {
    color: string;
    className: string;
}): ReactElement => (
    <hr
        className={props.className}
        style={{
            color: props.color,
            backgroundColor: props.color,
        }}
    />
);

export default ColoredLine;
