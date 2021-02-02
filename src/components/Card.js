
function Card(props) {
    return(
        <article className="element">
        <img className="element__image" src={props.link} alt="картинка" />
        <div className="element__position">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__like-number">
                <button className="element__like" type="button"></button>
                <p className="element__number">{props.likes}</p>
            </div>
        </div>
        <button className="element__basket"></button>
    </article>
    )
}
export default Card;