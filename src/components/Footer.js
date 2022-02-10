import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer-contanier'>
            <div style={{ width: "80%", marginBottom: "50px" }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-block align-items-center'><div className='d-flex  align-items-center'><p style={{ color: "#00CDAC", fontSize: "24px" }}>Thank you for supporting us!</p></div>
                        <div className='d-flex  align-items-center footer-subtitle'>Let's get in touch on any of these platforms.</div></div>
                    <div>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Follow us!</Tooltip>}>
                            <Image src="../img/TWITTER.svg" className="img-fluid" />
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">FACEBOOK</Tooltip>}>
                            <Image src="./img/FACEBOOK.svg" className="img-fluid" />
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip style={{ marginBottom: 0 }} id="tooltip-disabled">DRIBBBLE</Tooltip>}>
                            <Image src="./img/DRIBBBLE.svg" className="img-fluid" />
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">GITHUB</Tooltip>}>
                            <Image src="./img/GITHUB.svg" className="img-fluid" />
                        </OverlayTrigger>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-inline-flex'>
                        <div style={{ color: "#00CDAC", display: "inline-flex" }}>© 2018</div><div style={{ marginLeft: 5 }}> Şikayetvar</div>
                    </div>
                    <div className='footer-post'>Posts</div></div>
            </div>
        </div>
    );
}

export default Footer;
