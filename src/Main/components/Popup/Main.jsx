import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";

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
    <main>
      <button
        className="profile__add-button"
        type="button"
        onClick={() => handleOpenPopup(newCardPopup)}
      >
        Novo Card
      </button>

      <button
        className="profile__edit-button"
        type="button"
        onClick={() => handleOpenPopup(editProfilePopup)}
      >
        Editar Perfil
      </button>

      <button
        className="profile__avatar-button"
        type="button"
        onClick={() => handleOpenPopup(editAvatarPopup)}
      >
        Alterar Avatar
      </button>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
