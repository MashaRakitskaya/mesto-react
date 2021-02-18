import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import React from 'react';
import { CardsContext }  from "../contexts/СardsContext";
function AddPlacePopup({isOpen, onClose, onOvarlayClose, onSubmit}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const cards = React.useContext(CardsContext);

    useEffect(() => {
        setName(String(cards.name));
        setLink(String(cards.link));
    }, [cards]); 

    function handleChangeName(e) {
        setName(e.target.value);
    };
    function handleChangeLink(e) {
        setLink(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            name: name,
            link: link,
        });
        setName('');
        setLink('');
    };

    return(
        <PopupWithForm name="add-photo"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onOvarlayClose={onOvarlayClose}
            onSubmit={handleSubmit}
            children={<>
                <label className="popup__input-label" htmlFor="place-input">
                    <input onChange={handleChangeName} id='place-input' className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minLength="2"  maxLength="30" required />
                    <span id="place-input-error" className="popup__input-error"></span>
                </label>
                            
                <label className="popup__input-label" htmlFor="url-input">
                    <input onChange={handleChangeLink} id='url-input' className="popup__input popup__input_type_photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
                    <span id="url-input-error" className="popup__input-error"></span>
                </label>
                <button type="submit" className="popup__save popup__save_type_photo" value="Создать">Создать</button>
            </>} 
        />
    ) 
}
export default AddPlacePopup;