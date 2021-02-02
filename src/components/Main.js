

function Main(props) {

    // function handleEditAvatarClick() {
    //     document.querySelector('.popup_type_update-avatar').classList.add('popup_opened');
    // };

    // function handleEditProfileClick() {
    //     document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
    // };

    // function handleAddPlaceClick() {
    //     document.querySelector('.popup_type_add-photo').classList.add('popup_opened');
    // };


    // return (
    //     <main className="content">
    //     <section className="profile">
    //         <div onClick={handleEditAvatarClick} className="profile__avatar-container">
    //             <img className="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Аватар пользователя" />
    //         </div>
        
    //         <div className="profile__info">
    //             <h1 className="profile__title">Жак-Ив Кусто</h1>
    //             <button onClick={handleEditProfileClick} className="profile__edit-button" type="button"></button>
    //             <p className="profile__paragraph">Исследователь океана</p>
    //         </div>
    //         <button onClick={handleAddPlaceClick} className="profile__add-button" type="button"></button>
    //     </section>
        
    //     <section className="elements">
        
    //     </section>
    //     </main>
    // );

    return (
        <main className="content">
        <section className="profile">
            <div onClick={props.onEditAvatar} className="profile__avatar-container">
                <img className="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Аватар пользователя" />
            </div>
        
            <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button"></button>
                <p className="profile__paragraph">Исследователь океана</p>
            </div>
            <button onClick={props.onAddPlace} className="profile__add-button" type="button"></button>
        </section>
        
        <section className="elements">
        
        </section>
        </main>
    );
}
export default Main;