import AnimatedPage from "../../AnimatedPage";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <AnimatedPage>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>HOME PAGE</h1>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <h1 className={styles.text}>WELCOME TO MY WEBSITE</h1>
      </div>
    </AnimatedPage>
  );
};

export default Main;
