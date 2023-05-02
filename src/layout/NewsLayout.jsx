import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/rightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/navigationBar/NavigationBar';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;