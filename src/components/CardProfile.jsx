import React, {useEffect} from "react";
import { Card, Col } from "react-bootstrap";
import userpic from "../assets/profile.svg"
import CopyButton from "./CopyButton.jsx";


function CardProfile({ name, image, children, className, imgSize }) {

    const profile = {
        name: 'Daniel Maydana',
        email: 'danimaydana9@gmail.com'
    }

    return (
        <Card  className={`bg-transparent mx-0 mx-md-4  border-0  text-start flex-row flex-md-column`}>
            <div className="d-block position-relative">
                <Card.Img

                    className="text-body d-none d-lg-block perfil-img p-0 m-0" src={profile?.image || userpic}
                          style={{
                              objectFit: 'cover',
                              height: imgSize || '100%',
                              width: imgSize || '100%',
                              padding: "1rem",
                              borderRadius: "100%",
                              marginInline: "auto",
                              opacity: '.5'
                          }}
                />
                <Card.Img className="d-inline-block d-lg-none perfil-img p-0" src={profile?.image || userpic}
                          style={{
                              objectFit: 'cover',
                              height: imgSize || '100px',
                              width: imgSize || '100px',
                              padding: "1rem",
                              borderRadius: "100%",
                              marginInline: "auto",
                              opacity: '.5'
                          }}
                />
            </div>


            <Card.Body style={{lineHeight: '1.5px'}} className="rounded my-md-1 px-4 px-md-0">
                <Card.Title className='fs-5'>
                    { profile?.name || "N/A"}
                </Card.Title>
                <Card.Text className='d-flex justify-content-between align-items-center pointer'>
                    <div>
                        <i className="bi bi-envelope-check me-2 fs-4"></i>
                        <small className="small text-body-secondary">
                            {  profile?.email || 'user@mail.com' }
                        </small>
                    </div>
                    <CopyButton message={profile?.email} ></CopyButton>
                </Card.Text>
                <Card.Text >
                <span className="text-secondary fs-6">
                    {  profile?.role }
                </span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProfile;