import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() =>  {
        Promise.all([api.getUserInformation(), api.getInitialCards()])
        .then((result) =>{
            console.log(result);
            setUserAvatar(result[0].avatar)
            setUserName(result[0].name)
            setUserDescription(result[0].about)
            console.log(result[1])
            setCards(result[1])
        })
        .catch(err => console.log(`Ошибка получения информации${err}`));
          
    },[]);

    return (
        <main className="content">
        <section className="profile">
            <div onClick={props.onEditAvatar} className="profile__avatar-container">
                <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
            </div>
        
            <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button"></button>
                <p className="profile__paragraph">{userDescription}</p>
            </div>
            <button onClick={props.onAddPlace} className="profile__add-button" type="button"></button>
        </section>
        
        <section className="elements">
        {/* {cards.map(() => <Card />)} */}
        {cards.map(item => <Card key={item.id} {...item} />)}
        </section>
        </main>
    );
}
export default Main;


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