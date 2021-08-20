import deletePic from '../images/Delete.svg';
export function Card(props) {
    return (
        <div className="grid__card card"> 
            <img className="card__image" src={props.src} alt={props.name} onClick={props.onCardClick}/>
            <button className="card__delete-button" type="button"><img className="card__delete" src={deletePic} alt="Удаление картинки"/></button>
            <div className="card__container"> 
            <h2 className="card__text">{props.name}</h2>
            <div className="card__likes">
                <button className="card__button-like card__button-like_is-active" type="button"></button>
                <span className="card__likes-number">{props.likes.length}</span>
            </div>
            </div> 
        </div>
    )
}