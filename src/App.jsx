import logo from "./images/logo.png";
import imageLogo from "./images/image.logo.jpeg";
import caneta from "./images/caneta.png";
import vector from "./images/Vector(1).png";


function App() {
  
  return (
    <div className="page__content">
      <header className="header">
        <img
          src={logo}
          alt="imagem da logo"
          className="header__logo"
        />
      </header>

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
            />
          </div>
          <div className="profile__info">
            <span className="profile__name">Jacques Cousteau</span>
            <span className="profile__title">Explorador</span>
          </div>
          <button className="profile__edit-button">
            <img
              src={caneta}
              alt="imagem de um botão"
              className="profile__edit-caneta"
            />
          </button>
          <button className="profile__action-button">
            <img
              src={vector}
              alt="imagem de um vector"
              className="profile__action-vector"
            />
          </button>
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2025 Marcela Moura</p>
      </footer>
            </div>
      
  );
}

export default App;
    