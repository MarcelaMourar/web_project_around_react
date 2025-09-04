export default function EditAvatar() {
  return (
    <form className="popup__form" id="form-avatar" noValidate>
      <label className="popup__field">
        <input
          type="url"
          className="popup__input popup__input_avatar"
          placeholder="Link da nova imagem"
          name="avatar"
          required
        />
        <span className="popup__error" id="avatar-input-error"></span>
      </label>

      <button type="submit" className="button popup__button">
        Salvar
      </button>
    </form>
  );
}
