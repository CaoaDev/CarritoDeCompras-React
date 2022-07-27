import { useState } from "react";

// componente
import Session from '../organisms/session'

// import css module
import styles from "./styles/header.module.css";

const Header = () => {
  const [login, setLogin] = useState(false);

  const changeLogin = () => {
    if (!login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <header className={styles.header}>
      <ul className={styles.lista}>
        <li>products </li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className={styles.secondBox}>
        <p>{login ? 'user@example.com': ''}</p>
        <button onClick={() => changeLogin()} className={styles.session}>
          {!login ? "Iniciar Cession" : "cerrar cesion"}
        </button>
      </div>
    </header>
  );
};

export default Header;
