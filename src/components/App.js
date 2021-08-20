import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isCardSelected, setIsCardSelected] = React.useState(false);
    const [pictureData, setPictureData] = React.useState({});

    function handleCardClick(evt) {
        setPictureData(evt.target)
        setIsCardSelected(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    };

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsCardSelected(false);
    }

    return (
      <div className="page">
          <Header/>
          <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick}
            onImage={handleCardClick}
          />
          <Footer/>
          <PopupWithForm name="profile-edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} text={'Сохранить'}
          children={
              <>
                <label className="popup__field">
                    <input className="popup__input" id="name" name="name" type="text"  placeholder="Имя" required minLength="2" maxLength="40"/>
                    <span className="popup__input-error name-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__input" id="description" name="description" type="text"  placeholder="Профессия" required minLength="2" maxLength="200"/>
                    <span className="popup__input-error description-error"></span>
                </label>
              </>
          }/>
          <PopupWithForm name="photo-edit" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} text={'Сохранить'}
          children={
            <>
                <label className="popup__field">
                    <input className="popup__input" id="photo" name="name" type="text" placeholder="Название" required minLength="2" maxLength="30"/>
                    <span className="popup__input-error photo-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__input" id="link" name="description" type="url" placeholder="Ссылка на картинку" required/>
                    <span className="popup__input-error link-error"></span>
                </label>
            </>
          }/>
          <ImagePopup name="image-picture" isOpen={isCardSelected} onClose={closeAllPopups} src={pictureData.src} alt={pictureData.alt}/>
          <section className="popup" id="submitDelete">
              <div className="popup__container">
                  <button className="popup__container-close"></button>
                  <h2 className="popup__title">Вы уверены?</h2>
                  <button className="popup__button" id="deleteCardButton">Да</button>
              </div>
          </section>
          <PopupWithForm name="avatar-edit" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} text={'Сохранить'}
          children={
            <>
                <label className="popup__field">
                    <input className="popup__input" id="profile" name="photoProfileName" type="url"  placeholder="Ссылка на картинку" required/>
                    <span className="popup__input-error profile-error"></span>
                </label>
            </>
          }/>  
      </div>
  );
}

export default App;
