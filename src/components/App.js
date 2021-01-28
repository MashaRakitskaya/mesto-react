// import logo from './logo.svg';
// import './index.css';
// import logo from '../images/Vector.svg';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
  <body className="page">
  <div className="page__container">
    {/* <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
    </header> */}
    <Header />
    {/* <main className="content">
        <section className="profile">
            <div className="profile__avatar-container">
                <img className="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Аватар пользователя" />
            </div>

            <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button"></button>
                <p className="profile__paragraph">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button"></button>
        </section>

        <section className="elements">

        </section>
    </main> */}
    <Main />
    {/* <footer className="footer">
        <p className="footer__copyright">&#169; 2020 Mesto Russia</p>
    </footer> */}
    <Footer />
   
    <div className="popup popup_type_edit-profile">
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
    </div>

    <div className="popup popup_type_add-photo">
        <div className="popup__content popup__content_type_add-photo">
            <button className="popup__close popup__close_type_close-photo" type="button"></button>
           <h3 className="popup__title popup__title_type_place">Новое место</h3>
           <form className="popup__form popup__form_type_add-photo" name="editProfileForm" novalidate>
               <label className="popup__input-label" for="place-input">
                    <input id='place-input' className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minlength="2"  maxlength="30" required />
                    <span id="place-input-error" className="popup__input-error"></span>
               </label>
                
                <label className="popup__input-label" for="url-input">
                    <input id='url-input' className="popup__input popup__input_type_photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
                    <span id="url-input-error" className="popup__input-error"></span>
                </label>
                <button type="submit" className="popup__save popup__save_type_photo" value="Создать">Создать</button>
           </form> 
       </div>
    </div>

    {/* <div className="popup popup_type_big-photo">
        <div className="popup__content-photo">
            <button className="popup__close popup__close_type_close-big-foto" type="button"></button>
            <img className="popup__photo" src="#" alt="картинка" />
            <h3 className="popup__caption"></h3>
        </div>
        
    </div> */}

    <div className="popup popup_type_update-avatar">
        <div className="popup__content popup__content_type_update-avatar">
            <button className="popup__close popup__close_type_close-avatar" type="button"></button>
            <h3 className="popup__title popup__title_type_place">Обновить аватар</h3>
           <form className="popup__form popup__form_type_update-avatar" name="editAvatarForm" novalidate>
                <label className="popup__input-label" for="avatar-input">
                    <input id='avatar-input' className="popup__input popup__input_type_avatar-photo" type="url" name="avatar" placeholder="Ссылка на аватарку" required />
                    <span id="avatar-input-error" className="popup__input-error"></span>
                </label>
                <button type="submit" className="popup__save popup__save_type_avatar" value="Сохранить">Сохранить</button>
           </form> 
       </div>
    </div>

    <div className="popup popup_type_deleteСard">
        <div className="popup__content popup__content_type_deleteСard">
            <form className="popup__form popup__form_type_deleteСard" name="deleteCard" novalidate>
                <button className="popup__close popup__close_type_deleteСard" type="button"></button>
                <h3 className="popup__title popup__title_type_deleteСard">Вы уверены?</h3>
                <button type="submit" className="popup__save popup__save_type_deleteСard">Да</button>
            </form>
       </div>
    </div>
</div>
</body>
  );
}

export default App;