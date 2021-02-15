// import { useState, useEffect } from "react";
// import api from "../utils/api"
import Card from "./Card";
import React from 'react';
import { CurrentUserContext }  from "../contexts/CurrentUserContext";
import { CardsContext }  from "../contexts/СardsContext";

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick}) {

    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);
    return (
        <main className="content">
        <section className="profile">
            <div onClick={handleEditAvatarClick} className="profile__avatar-container">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
            </div>
        
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button onClick={handleEditProfileClick} className="profile__edit-button" type="button"></button>
                <p className="profile__paragraph">{currentUser.about}</p>
            </div>
            <button onClick={handleAddPlaceClick} className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
            {cards.map((item) => {
                // <Card key={item._id} card={item} onCardClick={handleCardClick} />
                    return(
                        <Card
                            key={item._id}
                            card={item}
                            onCardClick={handleCardClick} 
                        />
                    )
                } 
            )}
        </section>
        </main>
    );
}
export default Main;


    // const [userName, setUserName] = useState();
    // const [userDescription, setUserDescription] = useState();
    // const [userAvatar, setUserAvatar] = useState();

    // const [cards, setCards] = useState([]);

    // useEffect(() =>  {
    //     Promise.all([api.getUserInformation(), api.getInitialCards()])
    //     .then((result) =>{
    //         setUserAvatar(result[0].avatar)
    //         setUserName(result[0].name)
    //         setUserDescription(result[0].about)
    //         console.log(result[1])
    //         setCards(result[1])
    //     })
    //     .catch(err => console.log(`Ошибка получения информации${err}`));
          
    // },[]);

    // useEffect(() => {
    //     api.getInitialCards()
    //     .then((result) => {
    //         console.log(result);
    //         setCards(result);
            
    //     })
    //     .catch(err => console.log(`Ошибка получения информации${err}`));
    // },[]);




    // return (
    //     <main className="content">
    //     <section className="profile">
    //         <div onClick={props.onEditAvatar} className="profile__avatar-container">
    //             <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
    //         </div>
        
    //         <div className="profile__info">
    //             <h1 className="profile__title">{currentUser.name}</h1>
    //             <button onClick={props.onEditProfile} className="profile__edit-button" type="button"></button>
    //             <p className="profile__paragraph">{currentUser.about}</p>
    //         </div>
    //         <button onClick={props.onAddPlace} className="profile__add-button" type="button"></button>
    //     </section>
    //     <section className="elements">
    //     {/* <CardsContext.Provider value={cards}> */}
    //         {cards.map(item => <Card key={item._id} card={item} onCardClick={props.onCardClick} />)}
    //     {/* </CardsContext.Provider>    */}
    //     </section>
    //     </main>
    // );