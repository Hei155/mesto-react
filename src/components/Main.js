import editVector from '../images/editVector.svg';
import edit from '../images/Edit.svg';
import { Card } from './Card';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


export function Main(props) {
    const currentUser  = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="menu">
                <div className="menu__panel">
                    <div className="menu__profile">
                        <div className="menu__pictures" onClick={props.onEditAvatar}>
                            <img src={currentUser.avatar} alt="Жак-Ив Кусто" className="menu__avatar"/>
                            <img src={editVector} alt="Редактировать" className="menu__photo-edit"/>
                        </div>
                        <div className="menu__container">
                            <div className="menu__information">
                                <h1 className="menu__name">{currentUser.name}</h1>
                                <p className="menu__description">{currentUser.about}</p>
                            </div>
                            <button className="menu__profile-edit-button" type="button"><img className="menu__edit-pic" src={edit} alt="Редактирование" onClick={props.onEditProfile}/></button>
                        </div>
                    </div>
                    <button className="menu__image-edit-button" type="button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="pictures">
                <div className="grid">
                    {props.cardList.map(card => {
                        return (
                            <Card 
                                owner={card.owner}
                                key={card._id}
                                _id={card._id}
                                link={card.link} 
                                name={card.name} 
                                likes={card.likes} 
                                onCardClick={props.onImage}
                                onCardLike={props.onCardLike}
                                onCardDelete={props.onCardDelete}
                           ></Card>
                        )
                    })}           
                </div>
            </section>
        </main> 
    )
}

