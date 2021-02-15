import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import api from "../utils/api";
import React from 'react';
import { CurrentUserContext }  from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onOvarlayClose}) {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const currentUser = React.useContext(CurrentUserContext);
// useEffect(() => {
//     api.getUserInformation()
//     .then((result) => {
//         console.log(result.about);
//         setName(result.name);
//         setDescription(result.about);
//     })
//     .catch(err => console.log(`Ошибка получения информации${err}`));
// },[]);

useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
}, [currentUser]); 

function handleChangeName(e) {
    setName(e.target.value);
    // setDescription(e.target.value);
};
function handleChangeDescription(e) {
    setDescription(e.target.value);
};

return(
    <PopupWithForm name="edit-profile"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        onOvarlayClose={onOvarlayClose}
        children={<>
            <label className="popup__input-label" for="name-input">
                <input id='name-input' className="popup__input popup__input_type_name" type="text" name="profileName" minLength="2"  maxLength="40" required value={name}  onChange={handleChangeName} />
                <span id="name-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__input-label" for="occupation-input">
                <input id='occupation-input' className="popup__input popup__input_type_title" type="text" name="occupation" minLength="2"  maxLength="200" required value={description} onChange={handleChangeDescription} />
                <span id="occupation-input-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__save popup__save_type_edit" value="Сохранить">Сохранить</button>
        </>} 
    />
)

}
export default EditProfilePopup;