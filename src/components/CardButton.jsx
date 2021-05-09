import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardButton(props){
    const {cardColor, text, textColor, clickFunc} = props;
    const icon = props.icon || false;
    return(
        <div className={`card-button ${cardColor}-bg`}>
            <div onClick={clickFunc} className={textColor}>
                {text}
                {icon && <FontAwesomeIcon className={'icon'} icon={icon} />}
            </div>
        </div>
    );
}//CardButton

export default CardButton;