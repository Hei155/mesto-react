export function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className={`popup__container-close popup_type_${props.name}__container-close`} type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button className="popup__button popup__button_inactive" type="submit" aria-label="Сохранить" id="profileButton">{props.text}</button>
            </div>
        </section>
    )
}