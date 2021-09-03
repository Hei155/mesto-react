import React from 'react';
import deletePic from '../images/Delete.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Card(props) {

    const currentUser  = React.useContext(CurrentUserContext);
    const currenLikeStatus = props.likes.some(i => i._id === currentUser._id)
    const isOwn = props.owner._id === currentUser._id;


    function handleLikeClick() { 
        props.onCardLike(props);
    }

    function handleCardDelete() {
        props.onCardDelete(props);
    }

    return (
        <div className="grid__card card"> 
            <img className="card__image" src={props.link} alt={props.name} onClick={props.onCardClick}/>
            <button onClick={handleCardDelete} type="button"><img className={`card__delete card__delete-button ${isOwn ? 'card__delete-button_visible' : ''}`} src={deletePic} alt="Удаление картинки"/></button>
            <div className="card__container"> 
            <h2 className="card__text">{props.name}</h2>
            <div className="card__likes">
                <button className={`card__button-like ${!currenLikeStatus ? 'card__button-like_is-active' : ''}`} type="button" onClick={handleLikeClick}></button>
                <span className="card__likes-number">{props.likes.length}</span>
            </div>
            </div> 
        </div>
    )
}