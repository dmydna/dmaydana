import React, { useContext, useEffect, useState } from "react";
import { Button, Modal,Card, Container, ButtonGroup } from "react-bootstrap";
import Img1 from '../assets/image.svg'
import Javascript from '../assets/javascript.svg'
import Html5 from '../assets/html5.svg'
import Css from '../assets/css.svg'
import CarouselImages from "./CarrouselImages.jsx";

function ProyectModal({show, closeModal, openModal, content}) {


    return (
        <Modal
            className='bg-blur'
            data-bs-theme="dark"
            show={show}
            backdrop="static"
            onHide={closeModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="p-3 " >
                <div className='d-flex justify-content-between'>
                    <p className='h6 text-capitalize text-body-emphasis'>
                        {content?.title}
                    </p>
                    <i onClick={closeModal} className="bi bi-x-lg pointer"></i>
                </div>

                <CarouselImages
                    className='my-4'
                    images={content?.images}
                    order={1}
                    col={1}
                 />

                <div className='d-flex gap-3 justify-content-center text-center'>
                    <a target="_blank" rel="noopener noreferrer" href={content?.codeLink}>
                        <Button
                            className='small border rounded-3' variant='outline-light'>
                            <i className="bi bi-code me-2"></i>
                            ver codigo
                        </Button>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href={content?.liveLink}>
                    <Button className='small border rounded-3' variant='light'>
                        <i className="bi bi-eye me-2"></i>
                        ver demo
                    </Button>
                    </a>
                </div>

            </Modal.Body>
        </Modal>
    );
}

export default ProyectModal;