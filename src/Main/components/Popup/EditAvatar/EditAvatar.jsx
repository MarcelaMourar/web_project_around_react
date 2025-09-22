export default function EditAvatar() {
  return (
    <form className="popup__form" id="form-avatar" noValidate>
       <input
          type="url"
          className="popup__input popup__input_avatar"
          placeholder="Link da nova imagem"
          name="avatar"
          required
        />
        <span className="popup__error" id="avatar-input-error"></span>
      

      <button type="submit" className="popup__save-button popup__button_disabled">
        Salvar
      </button>
    </form>
  );
}
