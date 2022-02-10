import React from 'react';
import { Image, Button } from "react-bootstrap";

const Header = () => {
    return (
        <div className="header-contanier">
            <div className='d-flex justify-content-between' style={{ width: "80%", marginTop: 40 }}>
                <div className='d-flex justifty-content-start'>
                    <Image src="./logo.svg" className="img-fluid" />
                    <a style={{ color: "white", marginLeft: 30 }}>Posts</a>
                </div>
                <div>
                    <Button className="login-button">Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
