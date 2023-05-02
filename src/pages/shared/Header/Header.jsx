import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from '../navigationBar/NavigationBar';


const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM, Do, YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={100}>
                    Manila airport cancels 40 domestic flights after power outage.
                    Air defence systems repelling Russian missile attacks in Kyiv.
                    Thai PM candidate gives birth two weeks before election.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;