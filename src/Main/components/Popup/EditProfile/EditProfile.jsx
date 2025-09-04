export default function EditProfile() {
  return (
    <form className="popup__form" id="form-edit-profile" noValidate>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_name"
          placeholder="Nome"
          required
          minLength="2"
          maxLength="40"
          name="name"
        />
        <span className="popup__error" id="profile_perfil-error"></span>
      </label>

      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_job"
          placeholder="Profissão"
          required
          minLength="2"
          maxLength="200"
          name="job"
        />
        <span className="popup__error" id="profile__text-error"></span>
      </label>

      <button type="submit" className="button popup__button">
        Salvar
      </button>
    </form>
  );
}
