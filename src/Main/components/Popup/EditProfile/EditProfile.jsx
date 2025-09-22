export default function EditProfile() {
  return (
    <form className="popup__form" id="form-edit-profile" noValidate>
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
      

      <button type="submit" className="popup__save-button popup__button_disabled">
        Salvar
      </button>
    </form>
  );
}
