import React, { ReactElement } from 'react';
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import gatech from '../imgs/GAtechnologies.gif';
import gluegent from '../imgs/Gluegent.gif';
import yahoo from '../imgs/YahooJAPAN.gif';
import ColoredLine from './ColoredLine';
import Internship from './career/Internship';

function Career(): ReactElement {
    return (
        <Container fluid id="career" className="career page">
            <Row className="justify-content-center">
                <Col className="section-heading justify-content-center">
                    <h2 className={'text-left'}>
                        My <strong>Career</strong>
                    </h2>
                    <ColoredLine
                        color={'#52cef6'}
                        className={'career-section-line'}
                    />
                </Col>
            </Row>
            <Internship
                name={'Gluegent, inc.'}
                img={gluegent}
                description={
                    'Developed and tested prototypes with cloud services such as GCP, AWS, and Azure.\n' +
                    'Designed and developed a workflow management application on Slack.'
                }
                position={'engineer'}
                type={'Long-term internship'}
                term={'July 2017 - Present'}
                topic={'Java NodeJS React GCP Azure AWS Git'}
            />

            <Internship
                name={'GA technologies'}
                img={gatech}
                description={
                    'Designed, implemented and evaluated new models and python scripts to estimate the sales price for each house in machine learning and systems engineering.'
                }
                position={'engineer'}
                type={'Hackathon'}
                term={'3 days, August 2019'}
                topic={'React NodeJS Git LeanXP Agile'}
            />
            <Internship
                name={'Yahoo! JAPAN'}
                img={yahoo}
                description={
                    'Collaborated with senior engineers on the project of a chat-bot management tool with React and offered insight.\n' +
                    'Experienced LeanXP development methodologies on the project to shorten development times and make better designs.'
                }
                position={'engineer'}
                type={'Short-term internship'}
                term={'2 weeks, September 2019'}
                topic={'Machine Learning Python Kaggle GCP'}
            />
        </Container>
    );
}

export default Career;
