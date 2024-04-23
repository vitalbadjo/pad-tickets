import { icons } from "../../media/icons"
import { stopsDeclension } from "../../utils/string"
import styles from "./stops-filter.module.scss"

type IStopsFilterItemProps = {
  all?: boolean
  element: number
  selected: boolean
  onSelect: (item: number) => void
  onSelectOlySelf?: (item: number) => void
}
export const StopsFilterItem: React.FC<IStopsFilterItemProps> = ({ element, all, selected, onSelect, onSelectOlySelf }) => {
  const handleChange = () => {
    onSelect(element)
  }
  return <li
    key={element}
    className={styles.option}
  >

    <label className={styles.text_placeholder}>

      <input type="checkbox" checked={selected} onChange={handleChange} />
      <span className={styles.checkbox}>{icons.check}</span>


      <span className={styles.text}>{all ? "Все" : stopsDeclension(element)}</span>
    </label>
    {!all && onSelectOlySelf && <span className={styles.button} onClick={() => onSelectOlySelf(element)}>только</span>
    }

  </li >
}