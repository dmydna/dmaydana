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
import Fullstack5 from '../assets/live-preview/fullstack-cap-5.png'
import Spring from '../assets/live-preview/spring.png'

export const GITHUB_URL = 'https://github.com/dmydna'
export const LINKEDIN_URL = '#'

const [Javascript, Html, Css, React, SpringBoot,Docker, Bootstrap] = [
    {code: 'Javascript', color:'js'},
    {code: 'Html', color:'html5'},
    {code: 'Css', color:'css'},
    {code: 'React JS', color:'reactjs'},
    {code: 'SpringBoot', color:'springboot'},
    {code: 'Docker', color:'docker'},
    {code: 'Bootstrap', color:'bootstrap'}
]

export const itemsData = [
    {
        title:'randbox-game',
        description:
            'Un juego iteractivo desarrollado integramente con JavasScript Vanilla(ES6+).'+
            'Cuenta con una arquitectura propia para la gestion de estados y flujo de eventos.' +
            '',
        stack:[ Javascript, Html, Css ],
        images:[ Randbox1, Randbox2 ],
        liveLink:'https://randbox.netlify.app/',
        codeLink: GITHUB_URL + '/randbox',
    },
    {
        title: 'simpleshop-backend',
        description:
            'Implementa una api restful con ' +
            'autentificacion mediante JWT (JSON Web Tokens) + Cookies, ' +
            'paginacion desde el servidor, manejo de bases de datos (MySQL) ' +
            'relacionales y persistencia real de usuarios y pedidos.',
        codeLink: GITHUB_URL + '/simpleshop-backend',
        liveLink: null,
        stack: [ React, SpringBoot, Docker ],
        images:[ Spring ]
    },
    {
        title: 'simpleshop-frontend',
        description:
            'Implementa un frontend (e-commerce) con funcialidades complejas '+
            'como carrito de Compras, Dashboard con Metricas, Crud de varias entidades,' +
            'Panel de usuario logeado con secciones tematicas, '+
            'Pagina Home basadas en estadisticas, busqueda por filtros. ',
        codeLink: GITHUB_URL + '/simpleshop-frontend',
        liveLink: 'https://simpleshop-mock.netlify.app/',
        stack: [ React, Bootstrap ],
        images:[ Fullstack2, Fullstack1, Fullstack3,  Fullstack4, Fullstack5 ]
    },
    {
        title: 'viajecitos',
        description:
            'Es un sitio web estatico tipo landing-page, ' +
            'cuenta con varias secciones ' +
            'con  diseño adaptable a dispositivos moviles.',
        codeLink: GITHUB_URL + '/viajecitos',
        liveLink: 'https://viajecitos.netlify.app/',
        stack: [ Javascript, Html, Css ],
        images:[ Viajecitos1, Viajecitos2 ]
    }
]