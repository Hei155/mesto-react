import { PopupWithForm } from "./PopupWithForm";
import React from "react";

export function EditAvatarPopup(props) {
    const avatarLink = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarLink.current.value
          });        
    }
    return (
        <PopupWithForm name="avatar-edit" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} text={'Сохранить'}  onSubmitForm={handleSubmit}>
            <>
                <label className="popup__field">
                    <input className="popup__input" id="profile" name="photoProfileName" type="url"  placeholder="Ссылка на картинку" required ref={avatarLink}/>
                    <span className="popup__input-error profile-error"></span>
                </label>
            </>
        </PopupWithForm>
    )
}