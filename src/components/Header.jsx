import React from 'react';
import Image from 'react-bootstrap/Image';

function Header() {
    const ipn = "../../assets/images/Logo_IPN.png";
    const escom = "../../assets/images/Logo_ESCOM.png";
    return (
        <div className="header">
            <Image className="responsiveLogo set-left" src={ipn} alt="Logo IPN" />
            <Image className="responsiveLogo set-right" src={escom} alt="Logo ESCOM" />
        </div>
    );
}//Header

export default Header;