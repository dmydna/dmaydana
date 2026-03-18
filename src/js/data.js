import Img1 from '../assets/image.svg'
import Randbox1 from "../assets/randbox-cap-1.png";
import Randbox2 from "../assets/randbox-cap-2.png";
import Viajecitos1 from '../assets/viajecitos-cap-1.png'
import Viajecitos2 from '../assets/viajecitos-cap-2.png'
import Simpleshop1 from '../assets/simpleshop-cap-1.png'
import Simpleshop2 from '../assets/simpleshop-cap-2.png'
import Fullstack1 from '../assets/fullstack-cap-1.png'
import Fullstack2 from '../assets/fullstack-cap-2.png'
import Fullstack3 from '../assets/fullstack-cap-3.png'
import Fullstack4 from '../assets/fullstack-cap-4.png'



const [Javascript, Html, Css, React, SpringBoot,Docker] = [
    {code: 'Javascript', color:'orange'},
    {code: 'Html', color:'red'},
    {code: 'Css', color:'blue'},
    {code: 'React JS', color:'blue'},
    {code: 'SpringBoot', color:'green'},
    {code: 'Docker', color:'cian'}
]


export const itemsData = [
    {
        title:'randbox',
        description:'Un juego simple de preguntas y respuestas que explora la frecuencia de aparición.',
        stack:[ Javascript, Html, Css ],
        images:[ Randbox1, Randbox2 ],
        liveLink:'https://randbox.netlify.app/',
        codeLink:'https://github.com/dmydna/randbox',
    },
    {
        title: 'ecommerce-fullstack',
        description: 'Un sitio de compra online con Crud de productos, publicaciones, reviews y carrito.Tambien incluye un sistema de registro y login.',
        codeLink: 'https://github.com/dmydna/simple-shop-docker/tree/dev',
        liveLink: '#',
        stack: [ React, SpringBoot, Docker ],
        images:[ Fullstack2, Fullstack1, Fullstack3,  Fullstack4 ]
    },
    {
        title: 'simpleshop',
        description: 'Un sitio web que simula un ecommerce (sin backend) con Crud Basico, ' +
            'busquedas por filtros, publicaciones y review.',
        codeLink: 'https://github.com/dmydna/tp-simple-shop',
        liveLink: 'https://tpsimpleshop.netlify.app/',
        stack: [ React ],
        images:[ Simpleshop1, Simpleshop2 ]
    },
    {
        title: 'viajecitos',
        description: 'Un sitio web statico tipo landing-page sobre viajes y hoteleria con variadas secciones.',
        codeLink: 'https://github.com/dmydna/viajecitos',
        liveLink: 'https://viajecitos.netlify.app/',
        stack: [ Javascript, Html, Css ],
        images:[ Viajecitos1, Viajecitos2 ]
    }
]