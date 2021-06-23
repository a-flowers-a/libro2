import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

function Actividad(props){
    const {link, number} = props;
    function download(){
        window.open(link);
    }
    return(
        <div className="card-button purple-bg white"
            onClick={download}
        >
            <FontAwesomeIcon 
                className={'icon'}
                icon={faPuzzlePiece} 
                size="2x"
            />
            {`Actividad_${number}`}
        </div>
    );
}//Actividad

export default Actividad;