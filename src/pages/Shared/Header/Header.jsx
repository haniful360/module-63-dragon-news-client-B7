import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container className='text-center'>
            <div>
                <img src={logo} alt="" />
                <p>Journalism Without Fear o    r Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex bg-light p-2 rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    <span className='fw-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;