import React, { ReactElement } from 'react';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Home(): ReactElement {
    return (
        <Container fluid={true} id="home" className="home page">
            <Row>
                <Col>
                    <p className={'home-page'}>
                        Howdy, I&apos;m{' '}
                        <strong className={'home-page'}>Yuki Yamato</strong>
                    </p>
                    <div>
                        I&apos;m a full-stack web/mobile/IoT/interface
                        developer.
                    </div>
                </Col>
            </Row>
            <Row>
                <Button variant="info" size={'lg'} className={'mt-5'}>
                    <Link
                        activeClass="active"
                        to={'about'}
                        spy={true}
                        smooth={true}
                        offset={-56}
                        duration={500}
                    >
                        About Me
                    </Link>
                </Button>
            </Row>
        </Container>
    );
}

export default Home;
