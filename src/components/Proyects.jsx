import CardItem from "./CardItem.jsx";
import React from "react";
import Img1 from '../assets/image.svg'

function Proyects(){


   const [Javascript, Html, Css, React, SpringBoot,Docker] = [
      {code: 'Javascript', color:'orange'},
      {code: 'Html', color:'red'},
      {code: 'Css', color:'blue'},
      {code: 'React JS', color:'blue'},
      {code: 'SpringBoot', color:'green'},
      {code: 'Docker', color:'cian'}
   ]


    return (
   <>
       <CardItem
           title={'randbox'}
           description={'Un juego simple de preguntas y respuestas que explora la frecuencia de aparición.'}
           stack={[ Javascript, Html, Css ]}
           images={[Img1, Img1]}
       ></CardItem>
       <CardItem
           title={'ecommerce-fullstack'}
           description={
          'Un sitio de compra online con Crud de productos, publicaciones, reviews y carrito.' +
          ' Tambien incluye un sistema de registro y login.'
           }
           images={[Img1]}
           stack={[ React, SpringBoot, Docker ]}
       ></CardItem>
       <CardItem
           title={'simpleshop'}
           description={'Un sitio web que simula un ecommerce (sin backend) con Crud Basico, ' +
              'busquedas por filtros, publicaciones y review.'}
           stack={[ React ]}
           images={[Img1]}
       ></CardItem>
       <CardItem
           title={'viajecitos'}
           description={'Un sitio web statico tipo landing-page sobre viajes y hoteleria con variadas secciones.'}
           stack={[ Javascript, Html, Css ]}
           images={[Img1]}
       ></CardItem>
   </>

    )
}
export default Proyects