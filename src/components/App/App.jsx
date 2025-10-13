import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer";
import api from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
   const [popup, setPopup] = useState(null);
   const [cards, setCards] = useState([]);

   
useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData.reverse());
      })
      .catch((err) => console.error("Erro ao carregar dados iniciais:", err));
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

   
   async function handleAddPlaceSubmit(data) {
    try {
      const newCard = await api.createCard(data);
      setCards ([newCard, ...cards]);
      handleClosePopup();
      } catch (err) {
        console.error("Erro ao adicionar card:", err);
      }
  };


  const handleOpenPopup = (popupData) => setPopup(popupData);
  const handleClosePopup = () => setPopup(null);

   const handleUpdateUser = (data) => {
    (async () => {
      try {
        const newData = await api.setUserInfo(data);
        setCurrentUser(newData);
        handleClosePopup();
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      try {
        const newData = await api.setUserAvatar(data);
        setCurrentUser(newData);
        handleClosePopup();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,handleUpdateAvatar }}>
      <div className='page__content'>
        <Header />
        <Main 
         onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;