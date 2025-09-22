export default function ImagePopup({ card }) {
  if (!card) return null;

  return (
    <div className="popup__image-container">
      <img
        src={card.link}
        alt={card.name}
        className="popup__img"
      />
      <p className="popup__caption">{card.name}</p>
    </div>
  );
}
