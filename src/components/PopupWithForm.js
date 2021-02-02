function PopupWithForm(props) {
return (

    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__content">
               <button className="popup__close" type="button" onClick={props.onClose}></button>
               <h3 className="popup__title">{props.title}</h3>
               <form className={`popup__form popup__form_type_${props.name}`} name={props.name} novalidate>
                {props.children}
               </form>
           </div>
    </div>

    /* <div className="popup popup_type_edit-profile">
            <div className="popup__content">
                <button className="popup__close" type="button"></button>
               <h3 className="popup__title">Редактировать профиль</h3>
               <form className="popup__form popup__form_type_edit-profile" name="editProfileForm" novalidate>
                    <label className="popup__input-label" for="name-input">
                        <input id='name-input' className="popup__input popup__input_type_name" type="text" name="profileName" minlength="2"  maxlength="40" required />
                        <span id="name-input-error" className="popup__input-error"></span>
                    </label>
                    <label className="popup__input-label" for="occupation-input">
                        <input id='occupation-input' className="popup__input popup__input_type_title" type="text" name="occupation" minlength="2"  maxlength="200" required />
                        <span id="occupation-input-error" className="popup__input-error"></span>
                    </label>
                    <button type="submit" className="popup__save popup__save_type_edit" value="Сохранить">Сохранить</button>
               </form>
           </div>
    </div> */

    // <div className="popup popup_type_add-photo">
    //     <div className="popup__content popup__content_type_add-photo">
    //         <button className="popup__close popup__close_type_close-photo" type="button"></button>
    //         <h3 className="popup__title popup__title_type_place">Новое место</h3>
    //         <form className="popup__form popup__form_type_add-photo" name="editProfileForm" novalidate>
    //             <label className="popup__input-label" for="place-input">
    //                 <input id='place-input' className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minlength="2"  maxlength="30" required />
    //                 <span id="place-input-error" className="popup__input-error"></span>
    //             </label>
            
    //             <label className="popup__input-label" for="url-input">
    //                 <input id='url-input' className="popup__input popup__input_type_photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
    //                 <span id="url-input-error" className="popup__input-error"></span>
    //             </label>
    //             <button type="submit" className="popup__save popup__save_type_photo" value="Создать">Создать</button>
    //         </form> 
    //     </div>
    // </div>

    // <div className="popup popup_type_update-avatar">
    //     <div className="popup__content popup__content_type_update-avatar">
    //         <button className="popup__close popup__close_type_close-avatar" type="button"></button>
    //         <h3 className="popup__title popup__title_type_place">Обновить аватар</h3>
    //        <form className="popup__form popup__form_type_update-avatar" name="editAvatarForm" novalidate>
    //             <label className="popup__input-label" for="avatar-input">
    //                 <input id='avatar-input' className="popup__input popup__input_type_avatar-photo" type="url" name="avatar" placeholder="Ссылка на аватарку" required />
    //                 <span id="avatar-input-error" className="popup__input-error"></span>
    //             </label>
    //             <button type="submit" className="popup__save popup__save_type_avatar" value="Сохранить">Сохранить</button>
    //        </form> 
    //    </div>
    // </div>

    // <div className="popup popup_type_deleteСard">
    //     <div className="popup__content popup__content_type_deleteСard">
    //         <form className="popup__form popup__form_type_deleteСard" name="deleteCard" novalidate>
    //             <button className="popup__close popup__close_type_deleteСard" type="button"></button>
    //             <h3 className="popup__title popup__title_type_deleteСard">Вы уверены?</h3>
    //             <button type="submit" className="popup__save popup__save_type_deleteСard">Да</button>
    //         </form>
    //    </div>
    // </div>
   
    // <div className="popup popup_type_big-photo">
    //     <div className="popup__content-photo">
    //         <button className="popup__close popup__close_type_close-big-foto" type="button"></button>
    //         <img className="popup__photo" src="#" alt="картинка" />
    //         <h3 className="popup__caption"></h3>
    //     </div>
        
    // </div> 
);
}
export default PopupWithForm;