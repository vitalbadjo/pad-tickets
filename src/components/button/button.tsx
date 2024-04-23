import React, { ReactNode } from "react";
import styles from "./button.module.scss"

type IButtonProps = {
  text: string | ReactNode
  theme?: "blue" | "orange"
  multiline?: boolean
  selected?: boolean
}
export const Button: React.FC<JSX.IntrinsicElements["button"] & IButtonProps> = (props) => {
  const { text, theme = "blue", multiline = false, selected = false, ...restProps } = props
  return <button
    {...restProps}
    className={
      `${styles.button} ${multiline ? styles.multiline : ""} ${styles[theme]} ${selected ? styles.selected : ""}`
    }
  >
    {text}
  </button>
}