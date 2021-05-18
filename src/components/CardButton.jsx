import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardButton(props){
    const {cardColor, text, textColor, clickFunc} = props;
    const icon = props.icon || false;
    const iconFirst = props.iconFirst || false;
    return(
        <div className={`card-button ${cardColor}-bg`}>
            <div onClick={clickFunc} className={textColor}>
                {(iconFirst && icon) && <FontAwesomeIcon className={'icon'} icon={icon} />}
                {text}
                {(!iconFirst && icon) && <FontAwesomeIcon className={'icon'} icon={icon} />}
            </div>
        </div>
    );
}//CardButton

export default CardButton;