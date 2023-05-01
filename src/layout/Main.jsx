// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/leftNav/LeftNav';
import RightNav from '../pages/shared/rightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><h2>Main Content is coming...</h2></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;