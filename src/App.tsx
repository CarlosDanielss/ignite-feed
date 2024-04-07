import { Header } from "./components/Header/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
