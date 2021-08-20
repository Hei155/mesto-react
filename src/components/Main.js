import editVector from '../images/editVector.svg';
import edit from '../images/Edit.svg';
import { Card } from './Card';
import React from 'react';
import api from '../utils/api'

export function Main(props) {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            const arr = res.map((card) => {
                return {
                    name: card.name,
                    src: card.link,
                    id: card._id,
                    likes: card.likes,
                }
            })
            setCards(arr)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const [profileData ,setProfileData] = React.useState({});

    React.useEffect(() => {
        api.getUserData()
        .then((res) => {
          const data = {
              userName: res.name,
              userDescription: res.about,
              userAvatar: res.avatar
          }
          setProfileData(data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <main className="content">
            <section className="menu">
                <div className="menu__panel">
                    <div className="menu__profile">
                        <div className="menu__pictures" onClick={props.onEditAvatar}>
                            <img src={profileData.userAvatar} alt="Жак-Ив Кусто" className="menu__avatar"/>
                            <img src={editVector} alt="Редактировать" className="menu__photo-edit"/>
                        </div>
                        <div className="menu__container">
                            <div className="menu__information">
                                <h1 className="menu__name">{profileData.userName}</h1>
                                <p className="menu__description">{profileData.userDescription}</p>
                            </div>
                            <button className="menu__profile-edit-button" type="button"><img className="menu__edit-pic" src={edit} alt="Редактирование" onClick={props.onEditProfile}/></button>
                        </div>
                    </div>
                    <button className="menu__image-edit-button" type="button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="pictures">
                <div className="grid">
                    {cards.map(card => {
                        return (
                            <Card 
                                key={card.id} 
                                src={card.src} 
                                name={card.name} 
                                likes={card.likes} 
                                onCardClick={props.onImage}
                           ></Card>
                        )
                    })}           
                </div>
            </section>
        </main> 
    )
}

