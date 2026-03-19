import React from "react";
import {Navbar} from "react-bootstrap";
import { Link} from "react-router-dom";
import logo from "../assets/vite.svg"


function Logo({theme}){

    const subLogo = {color: '#dc3545', fontSize: 'medium', fontWeight: '800'}

    return(
        <Navbar.Brand as={Link} to="/" className={`p-0`}>
            <b style={{opacity:'7'}} className={`h3 fw-bolder text-${theme}`}>dmaydna</b>
            <b className="text-danger" style={subLogo}>
                Dev
                {/*<img width={20} height={20} src={logo} alt="logo"/>*/}
            </b>
        </Navbar.Brand>
    )
}

export default Logo;