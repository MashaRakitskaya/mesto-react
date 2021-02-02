function ImagePopup() {
    return(
        <div className="popup popup_type_big-photo">
            <div className="popup__content-photo">
                <button className="popup__close popup__close_type_close-big-foto" type="button"></button>
                <img className="popup__photo" src="#" alt="картинка" />
            <h3 className="popup__caption"></h3>
            </div>
        
        </div> 
    );

}
export default ImagePopup;