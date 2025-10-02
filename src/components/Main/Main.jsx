import { useState, useEffect, useContext } from "react";
import Popup from "../Popup/Popup.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import caneta from "../../images/caneta.png";
import vector from "../../images/Vector(1).png";
import api from "../../utils/api.js";
import Card from "../Cards/Cards.jsx"
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

export default function Main({ onOpenPopup, onClosePopup, popup }) {
  const { currentUser } = useContext(CurrentUserContext); 
  const [cards, setCards] = useState([]);

  const handleAddPlaceSubmit = async (data) => {
  try {
    const newCard = await api.createCard(data);
    setCards ([newCard, ...cards]);
    handleClosePopup();
    } catch (err) {
      console.error("Erro ao adicionar card:", err);
    }
};
  
  const newCardPopup = { title: "Novo Card", children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Alterar Avatar", children: <EditAvatar /> };

  useEffect(() => {
  api.getUserInfo()
    .then(() => api.getInitialCards())
    .then((cardsFromServer) => {
      setCards(cardsFromServer.reverse());

      console.log("Links dos cards:");
      cardsFromServer.forEach(card => console.log(card.link)); // aqui dentro
    })
    .catch((err) => console.error("Erro ao carregar dados:", err));
}, []);


  
  async function handleCardLike(card) {
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !card.isLiked);
      setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    } catch (error) {
      console.error("Erro ao curtir/descurtir o card:", error);
    }
  }

 
  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error("Erro ao excluir o card:", error);
    }
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser?.avatar}
            alt={currentUser?.name}
            className="profile__avatar"
          />
          <img
            src={caneta}
            alt="Editar o avatar"
            className="profile__avatar-icon"
            onClick={() => onOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <span className="profile__name">
            {currentUser?.name || "Jacques Cousteau"}
          </span>
          <span className="profile__title">{currentUser?.about}</span>
        </div>

        <button
          className="profile__edit-button"
          onClick={() => onOpenPopup(editProfilePopup)}
        >
          <img src={caneta} alt="Editar perfil" className="profile__edit-caneta" />
        </button>

        <button
          className="profile__action-button"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          <img src={vector} alt="Adicionar novo card" className="profile__action-vector" />
        </button>
      </section>

      <section className="elements">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onOpenPopup={onOpenPopup}
              onDeleteCard={handleCardDelete}
              onCardLike={handleCardLike}
              currentUserId={currentUser._id}
            />
          ))}
        </ul>
      </section>

     
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title} type={popup.type}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}