import { PopupWithForm } from "./PopupWithForm";
import React from "react";

export function AddPlacePopup(props) {
    const photoName = React.useRef();
    const photoLink = React.useRef();
    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: photoName.current.value,
            link: photoLink.current.value
        })
    }
    return(
        <PopupWithForm name="photo-edit" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} text={'Сохранить'} onSubmitForm={handleAddPlaceSubmit}>
            <>
                <label className="popup__field">
                    <input className="popup__input" id="photo" name="name" type="text" placeholder="Название" required minLength="2" maxLength="30" ref={photoName}/>
                    <span className="popup__input-error photo-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__input" id="link" name="description" type="url" placeholder="Ссылка на картинку" required ref={photoLink}/>
                    <span className="popup__input-error link-error"></span>
                </label>
            </>
        </PopupWithForm>
    )
}