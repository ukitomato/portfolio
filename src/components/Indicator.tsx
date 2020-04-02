import React, { Component } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Line from './header/Line';

class Indicator extends Component {
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    render(): React.ReactElement {
        return (
            <Navbar className={'indicator'}>
                <Container>
                    <Row>
                        <Col>
                            <Line name={'home'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Line name={'about'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Line name={'skill'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Line name={'career'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Line name={'contact'} />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default Indicator;
