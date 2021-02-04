function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    };

    return(
        <article className="element">
        <img onClick={handleClick} className="element__image" src={props.card.link} alt={props.card.name}  />
        <div className="element__position">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__like-number">
                <button className="element__like" type="button"></button>
                <p className="element__number">{props.card.likes.length}</p>
            </div>
        </div>
        <button className="element__basket"></button>
    </article>
    )
}
export default Card;