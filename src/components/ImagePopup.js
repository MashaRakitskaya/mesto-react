import { useEffect } from 'react';
import { closeAllPopups } from "./App";
function ImagePopup(props) {
    useEffect(
        () => {
            function handleEscClose(event) {
                if (event.keyCode == escape) {
                 closeAllPopups
                }  
            };
        }
    )

    
    return(
        <div className={`popup popup_type_big-photo ${props.isOpen ? 'popup_opened' : ''}`} onClick={handleEscClose}>
            <div className="popup__content-photo">
                <button className="popup__close popup__close_type_close-big-foto" type="button" onClick={props.onClose}></button>
                <img  className="popup__photo" src={props.card.link} alt={props.card.name} />
            <h3 className="popup__caption">{props.card.name}</h3>
            </div>
        
        </div> 
    );

}
export default ImagePopup;