export function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className={`popup__container-close popup_type_${props.name}__container-close`} type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={props.name} id={`popup__form_${props.name}`} onSubmit={props.onSubmitForm}>
                {props.children}
                <button className="popup__button" type="submit" aria-label="Сохранить" id="profileButton">{props.text}</button>
                </form>
            </div>
        </section>
    )
}