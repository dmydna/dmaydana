import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {Col, Row, Container} from "react-bootstrap";
import CardProfile from "./components/CardProfile.jsx";
import CardItem from "./components/CardItem.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Social from "./components/Social.jsx";
import Projects from "./components/Proyects.jsx"
import Footer from "./components/Footer.jsx"
import {UIWrapper} from "./contexts/UIWrapper.jsx";

function App() {


  return (
          <main className={`bd-masthead bg-dark
       flex-grow-1 p-3 px-0`} data-bs-theme="dark">
              <UIWrapper>
              <Container fluid="xl">
                  <Row>
                      <Col className='p-0' md={12} lg={3}>
                          <CardProfile/>
                          <Social />
                      </Col>
                      <Col md={12} lg={9}>
                          <Row className='mb-5'>
                              <p className='h5 my-4 px-2 text-body-emphasis'>About Me</p>
                              <AboutMe />
                              <p className='h5 my-4 px-2 text-body-emphasis'>Proyectos</p>
                              <Projects/>
                          </Row>
                      </Col>

                  </Row>
              </Container>
               <Footer/>
              </UIWrapper>
          </main>
  )
}

export default App;
