// import { useEffect } from 'react';
// const escape = 27;
// function PopupWithForm(props) {
//     useEffect(
//         () => {
//             if(!props.isOpen) return;
//             const handleEscClose =(event) => {
//                 if((event.keyCode === escape)) {
//                     props.onClose() 
//                 }
//             }
//             document.addEventListener('keyup', handleEscClose);
//             return () => {
//                 document.removeEventListener('keyup', handleEscClose);  
//             }
//         }, [props.isOpen, props.onClose]
//     )

//     return (
//         <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.onOvarlayClose}>
//                 <div className="popup__content">
//                 <button className="popup__close" type="button" onClick={props.onClose}></button>
//                 <h3 className="popup__title">{props.title}</h3>
//                 <form className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit} name={props.name} noValidate>
//                     {props.children}
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default PopupWithForm;

import { useEffect } from 'react';
const escape = 27;
function PopupWithForm({name, title , isOpen, onClose, onOvarlayClose, onSubmit, children}) {
    useEffect(
        () => {
            if(!isOpen) return;
            const handleEscClose =(event) => {
                if((event.keyCode === escape)) {
                    onClose() 
                }
            }
            document.addEventListener('keyup', handleEscClose);
            return () => {
                document.removeEventListener('keyup', handleEscClose);  
            }
        }
    )
    //, [props.isOpen, props.onClose]
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onOvarlayClose}>
                <div className="popup__content">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className={`popup__form popup__form_type_${name}`} onSubmit={onSubmit} name={name} noValidate>
                    {children}
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;