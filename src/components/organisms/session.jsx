import { useRef } from 'react'

// import style.module
import styles from "./style/session.module.css";

const Session = () => {

  const formRef = useRef()

  const save = () => {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form ref={formRef} className={styles.container}>
      <label htmlFor="user">user:</label>
      <input type="text" name="user" className={styles.userText} />

      <label htmlFor="password">Pass:</label>
      <input type="password" name="password" />

      <button type="button" className={styles.button} onClick={save}>
        Login
      </button>
    </form>
  );
};

export default Session;
