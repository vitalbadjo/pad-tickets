import styles from "./app-body.module.scss"

export const AppBody: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.app_body}>{children}</div>
}