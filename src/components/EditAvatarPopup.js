import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
function EditAvatarPopup({isOpen, onClose, onOvarlayClose}) {
    const [userAvatar, setUserAvatar] = useState();
    return(
        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onOvarlayClose={onOvarlayClose}
            children={<>
                <label className="popup__input-label" for="avatar-input">
                    <input id='avatar-input' className="popup__input popup__input_type_avatar-photo" type="url" name="avatar" placeholder="Ссылка на аватарку" required />
                    <span id="avatar-input-error" className="popup__input-error"></span>
                </label>
                <button type="submit" className="popup__save popup__save_type_avatar" value="Сохранить">Сохранить</button>
            </>}
        />
    )
}
export default EditAvatarPopup;