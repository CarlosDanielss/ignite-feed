import { toast } from "sonner";
import { PencilLine } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  function handleEditProfile() {
    return toast.warning("Esta função ainda está em desenvolvimento.");
  }

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/CarlosDanielss.png" />
        <h2>Carlos Daniel</h2>
        <p>Web Developer</p>
      </div>

      <footer className={styles.footer}>
        <a onClick={handleEditProfile} href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
