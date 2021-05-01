import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import Facebook from '../components/Facebook';

function Book(){
    return(
        <div>
            <PoliHeader />
                <Facebook />
            <PoliFooter />
        </div>
    );
}//Book

export default Book;