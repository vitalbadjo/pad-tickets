import React, { PropsWithChildren } from "react";
import styles from "./button-group.module.scss"

export const ButtonGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.button_group}>
    {children}
  </div>
}