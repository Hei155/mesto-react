export function ImagePopup(props) {
    return (
        <section className={`popup popup_type_${props.name} popup_opacity ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <img className="popup__photo" src={props.src} alt={props.alt}/>
                <button className="popup__image-close" type="button" onClick={props.onClose}></button>
                <p className="popup__name">{props.alt}</p>
            </div>
        </section>
    )
}