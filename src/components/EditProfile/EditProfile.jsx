import { useState, useContext, useEffect  } from 'react'; 
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function EditProfile() {
  const {currentUser, handleUpdateUser } = useContext(CurrentUserContext);
const [name, setName] = useState('');
const [description, setDescription] = useState('');

useEffect(() => {
  if (currentUser) {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }
}, [currentUser]);

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    <form 
    className="popup__form" id="form-edit-profile" noValidate  onSubmit={handleSubmit} >
     <label className="popup__label">
          <input
          className="popup__input popup__input_name"
          id="owner-name"
          minLength="2"
          maxLength="40"
          name="userName"
          placeholder="Nome"
          required
          type="text"
           value={name}
          onChange= {handleNameChange}
           
         
        />
        <span className="popup__error" id="profile_perfil-error"></span>
     </label>
 <label className="popup__label">
        <input
           className="popup__input popup__input_job"
         id="owner-description"
          minLength="2"
          maxLength="200"
          name="userDescription"
          placeholder="Profissão"
          required
          type="text"
           value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="profile__text-error"></span>
      </label>

      <button type="submit" className="popup__save-button popup__button_disabled">
        Salvar
      </button>
    </form>
  );
}
