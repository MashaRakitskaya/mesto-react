import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useState, useEffect } from 'react';
import api from "../utils/api";
import { CurrentUserContext }  from "../contexts/CurrentUserContext";
import { CardsContext }  from "../contexts/СardsContext";
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isBigPhotoPopupOpen, setIsBigPhotoPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setСurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    };
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    };
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    };
    function handleCardClick(card) {
        setSelectedCard(card);
        setIsBigPhotoPopupOpen(true);
    };
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsBigPhotoPopupOpen(false);
        setSelectedCard({});
    };
    function closeByOverlay(event) { 
        if (event.target.classList.contains('popup')) {
            closeAllPopups()
        }
    };
    useEffect(() => {
        api.getUserInformation()
        .then((result) => {
            console.log(result);
            setСurrentUser(result);
            
        })
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    // useEffect(() => {
    //     api.getInitialCards()
    //     .then((result) =>{
    //         console.log(result);
    //         const cards = result.map((item) => {
    //             return {
    //                 _id: item._id,
    //                 link: item.link,
    //                 name: item.name,
    //                 likes: item.likes
    //             };
    //         });
    //         setCards(cards);
    //     })
    //     .catch(err => console.log(`Ошибка получения информации${err}`));
    // },[]);
    useEffect(() => {
        api.getInitialCards()
        .then((result) =>{
            console.log(result)
            setCards(result)
        })
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    //     useEffect(() =>  {
    //     Promise.all([api.getUserInformation(), api.getInitialCards()])
    //     .then((result) =>{
    //         setСurrentUser(result[0].avatar)
    //         setСurrentUser(result[0].name)
    //         setСurrentUser(result[0].about)
    //         console.log(result[1])
    //         // setCards(result[1])
    //     })
    //     .then((result) =>{
    //         const cards = result.map((item) => {
    //         return {
    //             _id: item._id,
    //             link: item.link,
    //             name: item.name,
    //             likes: item.likes
    //         }
    //         });
    //         setCards(cards)
    //     })
    //     .catch(err => console.log(`Ошибка получения информации${err}`));
          
    // },[]);

    return (
        <div className="page">
            <div className="page__container">
                <CurrentUserContext.Provider value={currentUser}>
                    <CardsContext.Provider value={cards}>
                        <Header />
                        <Main
                            // onEditAvatar={handleEditAvatarClick}                 
                            // onEditProfile={handleEditProfileClick}        
                            // onAddPlace={handleAddPlaceClick}
                            // onCardClick={handleCardClick}
                            // cards={cards}
                            handleEditAvatarClick={handleEditAvatarClick}                 
                            handleEditProfileClick={handleEditProfileClick}        
                            handleAddPlaceClick={handleAddPlaceClick}
                            handleCardClick={handleCardClick}
                            // cards={cards}
                        />
                        <Footer />
                        <ImagePopup
                            card={selectedCard}
                            onClose={closeAllPopups}
                            isOpen={isBigPhotoPopupOpen}
                            onOvarlayClose={closeByOverlay}
                        />
                        <PopupWithForm name="edit-profile"
                            title="Редактировать профиль"
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onOvarlayClose={closeByOverlay}
                            children={<>
                                <label className="popup__input-label" for="name-input">
                                    <input id='name-input' className="popup__input popup__input_type_name" type="text" name="profileName" minLength="2"  maxLength="40" required />
                                    <span id="name-input-error" className="popup__input-error"></span>
                                </label>
                                <label className="popup__input-label" for="occupation-input">
                                    <input id='occupation-input' className="popup__input popup__input_type_title" type="text" name="occupation" minLength="2"  maxLength="200" required />
                                    <span id="occupation-input-error" className="popup__input-error"></span>
                                </label>
                                <button type="submit" className="popup__save popup__save_type_edit" value="Сохранить">Сохранить</button>
                            </>} 
                        />
                        <PopupWithForm 
                            name="add-photo"
                            title="Новое место"
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}
                            onOvarlayClose={closeByOverlay}
                            children={<>
                                <label className="popup__input-label" for="place-input">
                                    <input id='place-input' className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minLength="2"  maxLength="30" required />
                                    <span id="place-input-error" className="popup__input-error"></span>
                                </label>
                            
                                <label className="popup__input-label" for="url-input">
                                    <input id='url-input' className="popup__input popup__input_type_photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
                                    <span id="url-input-error" className="popup__input-error"></span>
                                </label>
                                <button type="submit" className="popup__save popup__save_type_photo" value="Создать">Создать</button>
                            </>} 
                        />
                        <PopupWithForm
                            name="update-avatar"
                            title="Обновить аватар"
                            isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}
                            onOvarlayClose={closeByOverlay}
                            children={<>
                                <label className="popup__input-label" for="avatar-input">
                                    <input id='avatar-input' className="popup__input popup__input_type_avatar-photo" type="url" name="avatar" placeholder="Ссылка на аватарку" required />
                                    <span id="avatar-input-error" className="popup__input-error"></span>
                                </label>
                                <button type="submit" className="popup__save popup__save_type_avatar" value="Сохранить">Сохранить</button>
                            </>}
                        />
                        <PopupWithForm 
                            name="deleteСard"
                            title="Вы уверены?" 
                            children={<>
                                <button type="submit" className="popup__save popup__save_type_deleteСard">Да</button>
                            </>}
                        />
                    </CardsContext.Provider>    
                </CurrentUserContext.Provider>
            </div>

        </div>
    );
}

export default App;