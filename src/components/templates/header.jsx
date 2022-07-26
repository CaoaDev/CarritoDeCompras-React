// import css module
import styles from './styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>products </li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div>login</div>
    </header>
  )
}

export default Header
