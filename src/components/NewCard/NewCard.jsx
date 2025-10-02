import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
const [name, setName] = useState("");
const [link, setLink] = useState ("");

const handleSubmit = (e) => {
  e.preventDefault();
  onAddPlaceSubmit({name,link});
};




  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
       onSubmit={handleSubmit}
      noValidate
    >
      
        <input
          className="popup__input_name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" id="card-name-error"></span>
     
    
        <input
          className="popup__input_job"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
        onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error" id="card-link-error"></span>
      

      <button className="popup__save-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
