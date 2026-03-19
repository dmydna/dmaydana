import {Col} from "react-bootstrap";
import React from "react";
import Css from "../assets/css.svg"
import Docker from "../assets/docker.svg"
import Html5 from "../assets/html5.svg"
import Javascript from "../assets/javascript.svg"
import Springboot from "../assets/springboot.svg"
import ReactJS from "../assets/react.svg"
import Bootstrap from "../assets/bootstrap.svg"

function AboutMe(){

    const stack = [Html5, Css, Javascript, Bootstrap, ReactJS, Springboot, Docker]
    const stack2        = ["C", "x86 Assambly", "Haskell","MySQL", "Python", "Algoritmos"]

    return (
        <Col className='p-0' md={12}>
            <div className='pointer island border p-3'>
                <small className='text-muted'>
                    Desarrollador de Software y estudiante de Ciencias de la Computación en la UBA,
                    con sólidos fundamentos en programación de bajo nivel (C, x86 Assembly)
                    y arquitectura de sistemas. Actualmente enfocado en el desarrollo Full-stack,
                    creando interfaces modernas con React y Bootstrap, junto con el desarrollo de APIs RESTful
                    seguras en Spring Boot con JWT. Cuento con experiencia en entornos Linux
                    y containerización con Docker.
                </small>

                <br></br>
                <br></br>
                <small className='text-body-secondary'>Tecnologias:</small>

                <ul className='d-flex flex-wrap gap-3 list-unstyled my-3'>
                    {stack?.map((ico, index) => (
                        <li key={index} className='me-3'>
                            <img width={30} height={30} src={ico} />
                        </li>
                    ))}
                </ul>

                <br></br>

                <small className='text-body-secondary'>Otras tecnologias y fundamentos:</small>

                <ul className='d-flex flex-wrap gap-3 list-unstyled my-3'>
                    {stack2?.map((text, index) => (
                        <li key={index} className='text-body-secondary border p-1 px-2 rounded-3'>
                            <small>{text}</small>
                        </li>
                    ))}
                </ul>

                {/*<br></br>*/}
                {/*<br></br>*/}
                {/*<small className='text-muted'>*/}
                {/*    My profile is hybrid: I enjoy building modern, scalable web interfaces with React and Astro, but I'm equally driven by the technical challenges of low-level programming, exploring C language, memory management, and Linux environments.*/}
                {/*    Whether it's developing a REST API or assembling a 3D-printed bipedal robot, I focus on clean code, logic, and efficient problem-solving.*/}
                {/*</small>*/}
            </div>
        </Col>

    )
}

export default AboutMe;