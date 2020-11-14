import React, { ReactElement } from 'react';
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import gatech from '../imgs/GAtechnologies.gif';
import gluegent from '../imgs/Gluegent.gif';
import yahoo from '../imgs/YahooJAPAN.gif';
import starprince from '../imgs/StarPrince.png';
import dmm from '../imgs/dmm.jpg';
import recruit from '../imgs/recruit.png';
import accenture from '../imgs/accenture.png';
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
                name={'SIOS Technology, Inc (Gluegent, inc.)'}
                img={gluegent}
                description={
                    'Developed and tested prototypes with cloud services such as GCP, AWS, and Azure.\n' +
                    'Designed and developed a workflow management application on Slack.'
                }
                position={'engineer'}
                type={'Long-term internship'}
                term={'July 2017 - Current'}
                topic={'Java NodeJS React GCP Azure AWS Git'}
            />
            <Internship
                name={'Star Prince, LLC.'}
                img={starprince}
                description={
                    'Developed chat applications on Android/iOS using Java/Objective-C.\n' +
                    'Experienced both of frontend(mobile) and backend(flask) development in a middle-size team.'
                }
                position={'engineer'}
                type={'Long-term internship'}
                term={'April 2020 - Current'}
                topic={'Java ObjectiveC Python Android iOS Flask AWS Git'}
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
                name={'Yahoo Japan Corporation'}
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
            <Internship
                name={'DMM.com LCC'}
                img={dmm}
                description={
                    '\tExperienced developments in many areas such as mobile, business improvement tools, CI, etc.'
                }
                position={'engineer'}
                type={'Short-term internship'}
                term={'2 weeks, September 2020'}
                topic={
                    'Nodejs, Go, AWS, SlackAPI, Shell Script, Kotlin, CircleCI'
                }
            />
            <Internship
                name={'Recruit Holdings Co., Ltd.'}
                img={recruit}
                description={
                    "Experienced the flow from issue creation to release through Zexy's iOS app development."
                }
                position={'engineer'}
                type={'Short-term internship'}
                term={'1,5 months, October - November 2020'}
                topic={'iOS Swift ObjectiveC Scrum Adobe-SiteCatalyst'}
            />
            <Internship
                name={'Accenture Japan Ltd.'}
                img={accenture}
                description={
                    'Experienced a series of engineer work from analysis to requirement definition and construction through application development as a team.'
                }
                position={'engineer'}
                type={'Short-term internship'}
                term={'4 days, November 2020'}
                topic={
                    'Data-Analysis Team-Development Group-Work JavaScript Python'
                }
            />
        </Container>
    );
}

export default Career;
