import styles from "./spinner.module.scss"

type ISpinnerProps = {
  containerWidthCSS?: string
  containerHeightCSS?: string
}


export const Spinner: React.FC<ISpinnerProps> = ({ containerWidthCSS = "auto", containerHeightCSS = "auto" }) => {
  //todo check CCS props is correct with regexp
  return <div
    className={styles.spinner_placeholder}
    style={{ width: containerWidthCSS, height: containerHeightCSS }}
  >
    <span className={styles.spinner} />
  </div>
}