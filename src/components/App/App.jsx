import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer";
import api from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
   const [popup, setPopup] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


  const handleOpenPopup = (popupData) => setPopup(popupData);
  const handleClosePopup = () => setPopup(null);

   const handleUpdateUser = (data) => {
    (async () => {
      try {
        const newData = await api.setUserInfo(data);
        setCurrentUser(newData);
        handleClosePopup();
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      try {
        const newData = await api.setUserAvatar(data);
        setCurrentUser(newData);
        handleClosePopup();
      } catch (error) {
        console.log(error);
      }
    })();
  };



  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,handleUpdateAvatar }}>
      <div className='page__content'>
        <Header />
        <Main 
         onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;