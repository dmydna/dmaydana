import {Col} from "react-bootstrap";
import React from "react";


function AboutMe(){

    return (
        <Col className='p-0' md={12}>
            <div className='pointer island border p-3'>
                <small className='text-muted'>
                    I'm a Software Developer and Systems Engineering student (UAI) based in Buenos Aires, Argentina.
                    My approach to software goes beyond writing code; I'm passionate about understanding how things work under the hood.
                </small>
                <br></br>
                <br></br>
                <small className='text-muted'>
                    My profile is hybrid: I enjoy building modern, scalable web interfaces with React and Astro, but I'm equally driven by the technical challenges of low-level programming, exploring C language, memory management, and Linux environments.
                    Whether it's developing a REST API or assembling a 3D-printed bipedal robot, I focus on clean code, logic, and efficient problem-solving.
                </small>
            </div>
        </Col>

    )
}

export default AboutMe;