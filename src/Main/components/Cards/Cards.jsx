import ImagePopup from "../Popup/ImagePopup/ImagePopup";


export default function Card({card, onOpenPopup}) {
  const { name, link, isLiked } = card;

  const imageComponent = {
    title: null,
    children: <ImagePopup card= {card} />,
    type: "image"
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img className="card__image" src={link} alt={name}
        onClick= {() => onOpenPopup(imageComponent)} />
        <button
          className="card__delete-button"
          aria-label="Excluir card"
          type="button"
        />
      </div>

      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <div className="card__actions">
          <button
            className={`card__like-button ${isLiked ? "card__like-button_active" : ""}`}
            aria-label="Curtir card"
            type="button"
          />
          <span className="card__like-count">0</span>
        </div>
      </div>
    </li>
  );
}


