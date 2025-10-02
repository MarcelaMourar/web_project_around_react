import { useRef, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";


export default function EditAvatar() {
   const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit (e) {
    e.preventDefault();
      

handleUpdateAvatar ({
  avatar: avatarRef.current.value,
});

 avatarRef.current.value = "";

}

  return (
    <form className="popup__form" id="form-avatar" noValidate>
       <input
          type="url"
          className="popup__input popup__input_avatar"
          placeholder="Link da nova imagem"
          name="avatar"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="avatar-input-error"></span>
      

      <button type="submit" className="popup__save-button popup__button_disabled">
        Salvar
      </button>
    </form>
  );
}
