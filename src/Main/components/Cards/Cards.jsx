import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import coracao from "../../../images/coração.png";
import lixeira from "../../../images/lixeira.png";

export default function Card({ card, onOpenPopup }) {
  const { name, link, isLiked } = card;

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
          src={link}
          alt={name}
          onClick={() => onOpenPopup(imageComponent)}
        />
        <button
          className="element__trash"
          aria-label="Excluir card"
          type="button"
          style={{ backgroundImage: `url(${lixeira})` }}
        />
      </div>

      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <div className="card__actions">
          <button
            className={`element__heart ${isLiked ? "active" : ""}`}
            aria-label="Curtir card"
            type="button"
            style={{ backgroundImage: `url(${coracao})` }}
          />
          <span className="element__like-count">0</span>
        </div>
      </div>
    </li>
  );
}
