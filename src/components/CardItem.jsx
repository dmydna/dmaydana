import {Col} from "react-bootstrap";
import {useModal} from "../contexts/ModalContext.jsx";
import {useEffect} from "react";
import Img1 from '../assets/image.svg'

function CardItem({itemData}) {


    const {
        title,
        description,
        codeLink,
        codeLive ,
        liveLink,
        stack,
        images } = itemData

    const { openModal } = useModal();


    return (
        <Col className='p-0' md={12} lg={6}>
            <div
                style={{height: '-webkit-fill-available'}}
                onClick={() => openModal({ title, images, codeLink, liveLink })}
                className='card pointer bg-transparent island border p-3 m-1'>
                <div className='mb-2'>
                    <div>
                        <i className="bi bi-journal-code me-2"></i>
                        <small className='small fw-semibold'>{title}</small>
                    </div>
                    <i style={{top: '12px', right:'12px'}} className="position-absolute bi bi-three-dots-vertical"></i>
                </div>

                <small className='text-muted mb-3 flex-fill'>{description}</small>
                <ul className='d-flex gap-3 list-unstyled m-0'>
                    {stack?.map(({code,color},index) => (
                        <li key={index} className={`small marker-${color}`}>{code}</li>
                    ))}
                </ul>
            </div>
        </Col>

    )
}

export default CardItem;