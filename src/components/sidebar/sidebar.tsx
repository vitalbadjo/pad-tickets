import { PropsWithChildren } from "react"
import styles from "./sidebar.module.scss"

export const Sidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return <section role="menu" className={styles.sidebar}>
    {children}
  </section>
}