import {Col} from "react-bootstrap";
import {useModal} from "../contexts/ModalContext.jsx";
import {useEffect} from "react";
import Img1 from '../assets/image.svg'

function CardItem({title, description, stack, images}) {


    const { openModal } = useModal();


    return (
        <Col className='p-0' md={12} lg={6}>
            <div
                onClick={() => openModal({ title, images })}
                className='card pointer bg-transparent island border p-3 m-1'>
                <div className='mb-2'>
                    <i className="bi bi-journal-code me-2"></i>
                    <small className='small fw-semibold'>{title}</small>
                </div>

                <small className='text-muted'>{description}</small>
                <ul className='d-flex gap-3 list-unstyled my-2'>
                    {stack?.map(({code,color}) => (
                        <li className={`small marker-${color}`}>{code}</li>
                    ))}
                </ul>
            </div>
        </Col>

    )
}

export default CardItem;