import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.company__title}>{props.company_name}</h1>

        <div className={styles.header__profile__container}>
          <h4>{props.profile__name}</h4>
          <div className={styles.header__profile__pic}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;