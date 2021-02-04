import { useEffect } from 'react';
const escape = 27;
function ImagePopup(props) {
    useEffect(
        () => {
            if(!props.isOpen) return;
            const handleEscClose =(event) => {
                if((event.keyCode === escape)) {
                    props.onClose() 
                }
            }
            document.addEventListener('keyup', handleEscClose);
            return () => {
                document.removeEventListener('keyup', handleEscClose);  
            }
        }, [props.isOpen, props.onClose]
    )
    
    return(
        <div className={`popup popup_type_big-photo ${props.isOpen && 'popup_opened'}`} onClick={props.onOvarlayClose}>
            <div className="popup__content-photo">
                <button className="popup__close popup__close_type_close-big-foto" type="button" onClick={props.onClose}></button>
                <img  className="popup__photo" src={props.card.link} alt={props.card.name} />
            <h3 className="popup__caption">{props.card.name}</h3>
            </div>
        
        </div> 
    );

}
export default ImagePopup;