import styles from "./stops-filter.module.scss"

type IStopsFilterProps = {
  stopsFiterValues: number[]
  onChangeHandler: React.Dispatch<React.SetStateAction<number[]>>
}

export const StopsFilter: React.FC<IStopsFilterProps> = ({ stopsFiterValues }) => {
  return <div className={styles.stops_filter}>
    <h5 className={styles.title}>Количество пересадок</h5>
    <ul className={styles.options}>
      <li key="all" className={styles.option}>Все</li>
      {
        stopsFiterValues
          .map(el => <li
            key={el}
            className={styles.option}
          >
            {el} пересадок
          </li>)
      }
    </ul>
  </div>
}