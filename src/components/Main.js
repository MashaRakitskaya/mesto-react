import Card from "./Card";
import React from 'react';
import { CurrentUserContext }  from "../contexts/CurrentUserContext";
import { CardsContext }  from "../contexts/СardsContext";

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick, handleLikeClick, handleCardDelete}) {

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
                    return(
                        <Card
                            key={item._id}
                            card={item}
                            onCardClick={handleCardClick}
                            onCardLike={handleLikeClick}
                            onCardDelete={handleCardDelete}
                        />
                    )
                } 
            )}
        </section>
        </main>
    );
}
export default Main;