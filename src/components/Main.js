

function Main() {
    return (
        <main className="content">
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
        </main>
    );
}
export default Main;