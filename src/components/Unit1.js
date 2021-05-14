import React from 'react';
import { Image,Tab } from 'react-bootstrap';

const frontImg = "../../assets/images/up_books.svg";

function Unit1() {
    return (
        
        <Image
            className="big-img"
            src={frontImg}
            alt="Books" />
    );
}

export default Unit1;