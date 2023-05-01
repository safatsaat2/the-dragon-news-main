import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGooglePlusG, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Log in with</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGooglePlusG /> Log in with Google</Button>
            <Button className='mb-2' variant="outline-secondary"> <FaGithub /> Log in with Github</Button>

            <div>
                <h4>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;