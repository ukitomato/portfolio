import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="text-center footer">
            <small>
                <a href="/">
                    Copyright (C) 2020 Yuki Yamato All Rights Reserved.
                </a>
            </small>
        </Container>
    );
}

export default Footer;
