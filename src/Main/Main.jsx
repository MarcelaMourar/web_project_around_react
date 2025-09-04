import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";

import imageLogo from "../../src/images/image.logo.jpeg";
import caneta from "../../src/images/caneta.png";
import vector from "../../src/images/Vector(1).png";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Card", children: <NewCard /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Alterar Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
        <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={imageLogo}
            alt="Foto de Jacques Cousteau"
            className="profile__avatar"
          />
          <img
            src={caneta}
            alt="Editar o avatar"
            className="profile__avatar-icon"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <span className="profile__name">Jacques Cousteau</span>
          <span className="profile__title">Explorador</span>
        </div>

        <button
          className="profile__edit-button"
          onClick={() => handleOpenPopup(editProfilePopup)}
        >
          <img
            src={caneta}
            alt="imagem de um botão"
            className="profile__edit-caneta"
          />
        </button>

        <button
          className="profile__action-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={vector}
            alt="imagem de um vector"
            className="profile__action-vector"
          />
        </button>
      </section>

          <section className="elements"></section>

      
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
