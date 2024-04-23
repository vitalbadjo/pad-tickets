import { memo } from "react"
import { StopsFilterItem } from "./stops-filter-item"
import styles from "./stops-filter.module.scss"

type IStopsFilterProps = {
  stopsFiterValues: number[]
  onChangeHandler: React.Dispatch<React.SetStateAction<number[]>>
  selectedItems: number[]
}

export const StopsFilter: React.FC<IStopsFilterProps> = memo(({ stopsFiterValues, onChangeHandler, selectedItems }) => {

  const selectAll = () => {
    onChangeHandler(stopsFiterValues.length === selectedItems.length ? [] : stopsFiterValues)
  }

  const onSelectOnly = (item: number) => {
    if (!(selectedItems.length === 1 && selectedItems.includes(item))) {
      onChangeHandler([item])
    }

  }

  const onSwitchSelect = (item: number) => {
    onChangeHandler(prev => {
      return prev.includes(item) ? prev.filter(num => num !== item) : [item, ...prev]
    })
  }

  return <div className={styles.stops_filter}>
    <h5 className={styles.title}>Количество пересадок</h5>
    <ul className={styles.options}>
      <StopsFilterItem
        key={"all"}
        element={-1}
        all={true}
        selected={stopsFiterValues.length === selectedItems.length}
        onSelect={selectAll}
      />
      {
        stopsFiterValues
          .map(el => <StopsFilterItem
            key={el}
            element={el}
            selected={selectedItems.includes(el)}
            onSelect={onSwitchSelect}
            onSelectOlySelf={onSelectOnly}
          />)
      }
    </ul>
  </div>
})