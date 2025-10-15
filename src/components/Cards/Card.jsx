import { useContext} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ImagePopup from "../ImagePopup/ImagePopup";
import lixeira from "../../images/lixeira.png";

export default function Card({ card, onOpenPopup, onDeleteCard,onCardLike, removeCardPopup }) {
  const currentUser = useContext(CurrentUserContext);  
   const isLiked = card.isLiked;
  const cardLikeButtonClassName = `element__heart ${isLiked ? "active" : ""}`;

 function handleCardLike() {
 onCardLike(card)};

 function handleDeleteClick() {
  onDeleteCard?.(card);
}

  const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />,
    type: "image",
  };

  return (
    <li className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={() => onOpenPopup(imageComponent)}
        />
        <button
          className="element__trash"
          aria-label="Excluir card"
          type="button"
          style={{ backgroundImage: `url(${lixeira})` }}
           onClick={() => onOpenPopup(removeCardPopup(card))} 
           />
      </div>

      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="card__actions">
          <button
            className={cardLikeButtonClassName}
            aria-label="Curtir card"
            type="button"
            onClick={handleCardLike}
          />
          <span className="element__like-count">{card.likes?.length || 0}</span>

        </div>
      </div>
    </li>
  );
}