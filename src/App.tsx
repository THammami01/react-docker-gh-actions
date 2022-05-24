import { logo } from "./assets";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Deploy React Application
          <br />
          w/ Docker and GH Actions
        </p>
      </header>
    </div>
  );
};

export default App;
