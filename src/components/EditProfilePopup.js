import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from "react";

export function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
          });
      }
    return (
        <PopupWithForm formName={name} name="profile-edit" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} text={'Сохранить'} onSubmitForm={handleSubmit}>
              <>
                <label className="popup__field">
                    <input className="popup__input" id="name" name="name" type="text"  placeholder="Имя" required minLength="2" maxLength="40" onChange={handleChangeName} value={name || ''}/>
                    <span className="popup__input-error name-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__input" id="description" name="description" type="text"  placeholder="Профессия" required minLength="2" maxLength="200" onChange={handleChangeDescription} value={description || ''}/>
                    <span className="popup__input-error description-error"></span>
                </label>
              </>
        </PopupWithForm>
    )
}