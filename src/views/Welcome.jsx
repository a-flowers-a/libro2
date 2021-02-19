import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';

function Welcome(){
    const imgUrl = '../../assets/images/girl_flag.svg';
    return(
        <div>
            <PoliHeader />
            <div className="welcome-content">
                <h1 className="poli-title">Curso Administración de Proyectos</h1>
                <p className="content-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div>
                <img src={imgUrl} alt="welcome" width="100%" />
            </div>
            <PoliFooter />
        </div>
    );
}//Welcome

export default Welcome;