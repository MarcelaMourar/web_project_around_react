import './App.css'

function App() {
  
  return (
    <div className="page__conten">
      <header className="header">
        <img
          src="./imagens/logo.png"
          alt="imagem da logo"
          className="header__logo"
        />
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              src="./imagens/image.logo.jpeg"
              alt="Foto de Jacques Cousteau"
              className="profile__avatar"
            />
            <img
              src="./imagens/caneta.png"
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
              src="./imagens/caneta.png"
              alt="imagem de um botão"
              className="profile__edit-caneta"
            />
          </button>
          <button className="profile__action-button">
            <img
              src="./imagens/Vector(1).png"
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
    