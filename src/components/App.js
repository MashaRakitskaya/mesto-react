// import logo from './logo.svg';
// import './index.css';
// import logo from '../images/Vector.svg';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useEffect, useState } from 'react';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    };

    return (
        <body className="page">
            <div className="page__container">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                                        
                    onEditProfile={handleEditProfileClick}
                                    
                    onAddPlace={handleAddPlaceClick}
                />
                <Footer />
                <ImagePopup />
                <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}
                    children={<>
                        <label className="popup__input-label" for="name-input">
                            <input id='name-input' className="popup__input popup__input_type_name" type="text" name="profileName" minlength="2"  maxlength="40" required />
                            <span id="name-input-error" className="popup__input-error"></span>
                        </label>
                        <label className="popup__input-label" for="occupation-input">
                            <input id='occupation-input' className="popup__input popup__input_type_title" type="text" name="occupation" minlength="2"  maxlength="200" required />
                            <span id="occupation-input-error" className="popup__input-error"></span>
                        </label>
                        <button type="submit" className="popup__save popup__save_type_edit" value="Сохранить">Сохранить</button>
                    </>} 
                />

                <PopupWithForm name="add-photo" title="Новое место" isOpen={isAddPlacePopupOpen}
                    children={<>
                        <label className="popup__input-label" for="place-input">
                            <input id='place-input' className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minlength="2"  maxlength="30" required />
                            <span id="place-input-error" className="popup__input-error"></span>
                        </label>
                    
                        <label className="popup__input-label" for="url-input">
                            <input id='url-input' className="popup__input popup__input_type_photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
                            <span id="url-input-error" className="popup__input-error"></span>
                        </label>
                        <button type="submit" className="popup__save popup__save_type_photo" value="Создать">Создать</button>
                    </>} 
                />

                <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}
                    children={<>
                        <label className="popup__input-label" for="avatar-input">
                            <input id='avatar-input' className="popup__input popup__input_type_avatar-photo" type="url" name="avatar" placeholder="Ссылка на аватарку" required />
                            <span id="avatar-input-error" className="popup__input-error"></span>
                        </label>
                        <button type="submit" className="popup__save popup__save_type_avatar" value="Сохранить">Сохранить</button>
                    </>}
                />

                <PopupWithForm name="deleteСard" title="Вы уверены?" 
                    children={<>
                        <button type="submit" className="popup__save popup__save_type_deleteСard">Да</button>
                    </>}
                />



            </div>


        </body>
    );
}

export default App;