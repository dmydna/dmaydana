import Img1 from '../assets/image.svg'
import Randbox1 from "../assets/live-preview/randbox-cap-1.png";
import Randbox2 from "../assets/live-preview/randbox-cap-2.png";
import Viajecitos1 from '../assets/live-preview/viajecitos-cap-1.png'
import Viajecitos2 from '../assets/live-preview/viajecitos-cap-2.png'
import Simpleshop1 from '../assets/live-preview/simpleshop-cap-1.png'
import Simpleshop2 from '../assets/live-preview/simpleshop-cap-2.png'
import Fullstack1 from '../assets/live-preview/fullstack-cap-1.png'
import Fullstack2 from '../assets/live-preview/fullstack-cap-2.png'
import Fullstack3 from '../assets/live-preview/fullstack-cap-3.png'
import Fullstack4 from '../assets/live-preview/fullstack-cap-4.png'



const [Javascript, Html, Css, React, SpringBoot,Docker] = [
    {code: 'Javascript', color:'js'},
    {code: 'Html', color:'html5'},
    {code: 'Css', color:'css'},
    {code: 'React JS', color:'reactjs'},
    {code: 'SpringBoot', color:'springboot'},
    {code: 'Docker', color:'docker'}
]


export const itemsData = [
    {
        title:'Randbox-game',
        description:
            'Un juego iteractivo desarrollado integramente con JavasScript Vanilla(ES6+).'+
            'Cuenta con una arquitectura propia para la gestion de estados y flujo de eventos.' +
            '',
        stack:[ Javascript, Html, Css ],
        images:[ Randbox1, Randbox2 ],
        liveLink:'https://randbox.netlify.app/',
        codeLink:'https://github.com/dmydna/randbox',
    },
    {
        title: 'simpleshop-fullstack',
        description:
            'Es un ecommerce completo. Implementa una api restful con ' +
            'autentificacion mediante JWT (JSON Web Tokens), paginacion desde el servidor, ' +
            'manejo de bases de datos relacionales y '+
            'persistencia real de usuarios y pedidos.',
        codeLink: 'https://github.com/dmydna/simple-shop-docker/tree/dev',
        liveLink: '#',
        stack: [ React, SpringBoot, Docker ],
        images:[ Fullstack2, Fullstack1, Fullstack3,  Fullstack4 ]
    },
    {
        title: 'simpleshop-frontend',
        description:
            'Es una aplicacion de e-commerce moderna. ' +
            'Implementa funcialidades complejas como carrito de Compras, Crud de productos, busqueda por filtros ' +
            'y simulacion de login.',
        codeLink: 'https://github.com/dmydna/tp-simple-shop',
        liveLink: 'https://tpsimpleshop.netlify.app/',
        stack: [ React ],
        images:[ Simpleshop1, Simpleshop2 ]
    },
    {
        title: 'viajecitos',
        description:
            'Es un sitio web estatico tipo landing-page, cuenta con varias secciones ' +
            'con  diseño adaptable a dispositivos moviles.',
        codeLink: 'https://github.com/dmydna/viajecitos',
        liveLink: 'https://viajecitos.netlify.app/',
        stack: [ Javascript, Html, Css ],
        images:[ Viajecitos1, Viajecitos2 ]
    }
]