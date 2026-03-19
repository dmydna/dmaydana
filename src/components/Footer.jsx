import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <footer className="mt-auto border-top text-center py-5 mt-5">
            <Container fluid="xl">
                <Row>
                    <Col className='order-2 mt-4' xs={12} md={6}>
                        <div className='d-flex align-items-end justify-content-center justify-content-md-end h-100'>

                        </div>
                    </Col>
                    <Col className="order-1" xs={12} md={6}>
                        <div className='text-center text-md-start  mb-2'>
                            <Logo theme='light' />
                        </div>
                        <div className='border-left d-block'>
                            <p className=" text-body-secondary text-center text-md-start small mb-0">
                                © 2026 creado por dmaydana. Todos los derechos reservados</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;