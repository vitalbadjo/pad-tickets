import React from "react";
import styles from "./app-header.module.scss"
import appLogo from "../../media/logos/app-logo.png"

export const AppHeader: React.FC = () => {
  return <header className={styles["app-header"]}>
    <img src={appLogo} alt='logo' />
  </header>
}