import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import Facebook from '../components/Facebook';

function Welcome(){
    return(
        <div>
            <PoliHeader />
                <Facebook />
            <PoliFooter />
        </div>
    );
}//Welcome

export default Welcome;