import React, { useState } from "react";
import { ButtonGroup } from "./button-group";
import { Button } from "./button";
import { CurrenciesEnum } from "../services/utils";
import styles from "./currency-selector.module.scss"

type ICurrencySelectorProps = {
  onChangeHandler: (el: CurrenciesEnum) => void
  selectedItem: CurrenciesEnum
}

export const CurrencySelector: React.FC<ICurrencySelectorProps> = ({ onChangeHandler, selectedItem }) => {
  const [] = useState()
  return <div className={styles.currency_selector}>
    <h5 className={styles.title}>Валюта</h5>
    <ButtonGroup>
      {Object.keys(CurrenciesEnum).map(el => <Button
        key={el}
        text={el}
        onClick={() => onChangeHandler(el as CurrenciesEnum)}
        selected={el === selectedItem}
      />)
      }
    </ButtonGroup>
  </div>
}