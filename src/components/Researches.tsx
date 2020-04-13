import React, { ReactElement } from 'react';
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import acm from '../imgs/acm.png';
import springer from '../imgs/springer.png';
import ColoredLine from './ColoredLine';
import Research from './reserch/Research';

function Researches(): ReactElement {
    return (
        <Container fluid id="research" className="research page">
            <Row className="justify-content-center">
                <Col className="section-heading justify-content-center">
                    <h2 className={'text-left'}>
                        My <strong>Research</strong>
                    </h2>
                    <ColoredLine
                        color={'#52cef6'}
                        className={'research-section-line'}
                    />
                </Col>
            </Row>
            <Research
                name={'A Viewpoint Control Method for 360° Media Using Helmet Touch Interface'}
                img={acm}
                description={
                    'We have developed a helmet touch interface for the viewpoint control of a 360° media. The user of this interface can control the camera in 360° media by touching the surface of the helmet. To detect touch, two micro-controllers and 54 capacitive touch sensor points mounted on the interface surface are used.'
                }
                publish={
                    'Takumi Kitagawa, Yuki Yamato, Buntarou Shizuki, and Shin Takahashi. A Viewpoint Control Method for 360° Media Using Helmet Touch Interface. In Symposium on Spatial User Interaction (SUI \'19), Christoph W. Borst, Arun K. Kulshreshth, Gerd Bruder, Stefania Serafin, Christian Sandor, Kyle Johnsen, Jinwei Ye, Daniel Roth, and Sungchul Jung (Eds.). ACM, New York, NY, USA, Article 33, 2 pages'
                }
                url={'https://dl.acm.org/doi/10.1145/3357251.3360008'}
                type={'User Interface'}
                term={'April 2019 - October 2019'}
                topic={'Virtual Reality, Viewpoint Control, Touch Interface'}
            />

            <Research
                name={'A Mouth Gesture Interface Featuring a Mutual-Capacitance Sensor Embedded in a Surgical Mask'}
                img={springer}
                description={
                    'We developed a mouth gesture interface featuring a mutual-capacitance sensor embedded in a surgical mask. This wearable hands-free interface recognizes non-verbal mouth gestures; others cannot eavesdrop on anything the user does with the user\'s device. The mouth is hidden by the mask; others do not know what the user is doing. We confirm the feasibility of our approach and demonstrate the accuracy of mouth shape recognition. We present two applications. Mouth shape can be used to zoom in or out, or to select an application from a menu.'
                }
                publish={
                    'Yutaro Suzuki, Kodai Sekimori, Yuki Yamato, Yusuke Yamasaki, Buntarou Shizuki, and Shin Takahashi. A Mouth Gesture Interface Featuring a Mutual-Capacitance Sensor Embedded in a Surgical Mask. In Proceedings of 22nd International Conference on Human-Computer Interaction (HCI International 2020), Springer (To appear)'
                }
                url={''}
                type={'User Interface'}
                term={'April 2019 - Present'}
                topic={'Mask-Type Interface, Mutual-Capacitance-Sensor, Mouth Gesture, Hands-Free, Machine Learning'}
            />
            <Research
                name={'Hand Gesture Interaction with a Low-Resolution Infrared Image Sensor on an Inner Wrist'}
                img={acm}
                description={
                    'We propose a hand gesture interaction method using a low-resolution infrared image sensor on an inner wrist. We attach the image sensor into the belt of a wrist-worn device (e.g. smartwatch, activity tracker) on the palmer side and recognize gestures of the opposite hand using machine learning techniques. Since the low-resolution sensor is placed on the inner wrist, the user can naturally control its direction to reduce privacy invasion. Our method can recognize four types of hand gestures: static hand poses, dynamic hand gestures, the movement of the finger, and the relative position of the hand. We developed a prototype using an 8x8 low-resolution infrared image sensor so that it does not invade the privacy of surrounding people. We conducted three experiments to evaluate the recognition accuracies of our prototype. We introduce an implemented map application using our designed hand gestures of both hands.'
                }
                publish={
                    'Yuki Yamato, Yutaro Suzuki, Kodai Sekimori, Buntarou Shizuki, and Shin Takahashi. Hand Gesture Interaction with a Low-Resolution Infrared Image Sensor on an Inner Wrist. In Proceedings of the 2020 International Conference on Advanced Visual Interfaces (AVI \'20) (To appear).'
                }
                url={''}
                type={'User Interaction'}
                term={'April 2019 - Present'}
                topic={'Mobile Interaction, Hand Gesture, Smartwatch, Infrared Sensor, Machine Learning'}
            />
        </Container>
    );
}

export default Researches;
