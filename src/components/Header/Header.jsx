import logo from "../../images/logo.png";

function Header () {
    return(
        <header className="header">
        <img
          src={logo}
          alt="imagem da logo"
          className="header__logo"
        />
      </header>

    );
}

export default Header;