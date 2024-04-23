import React from "react";
import { TicketType } from "../../services/api";
import { CurrenciesEnum } from "../../services/utils";
import { getLocalizedDayOfWeekUppercase } from "../../utils/date";
import { Button } from "../button/button";
import styles from "./ticket-card.module.scss"
import { stopsDeclension } from "../../utils/string";
import { icons } from "../../media/icons";

type ITicketCardProps = {
  ticketData: TicketType
  currency: CurrenciesEnum
  buyAction: () => void
}

export const TicketCard: React.FC<ITicketCardProps> = ({ ticketData, currency }) => {
  const {
    carrier,
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    stops,
    price: priceObject } = ticketData

  const { price, symbol } = priceObject[currency]

  return <div className={styles.ticket_card}>
    <div className={styles.left}>
      <div
        className={`${styles.carrier} ${styles[carrier]}`}
        role={"img"}
      />

      <Button
        text={<>Купить <br />за {price} {symbol}</>}
        theme="orange"
        multiline={true}
      />
    </div>
    <div className={styles.right}>
      <div className={styles.time_row}>
        <span className={styles.time}>{departure_time}</span>
        <div className={styles.stops_placeholder}>
          <span>{stopsDeclension(stops).toUpperCase()}</span>
          <span>
            <span />
            {icons.flight}
          </span>
        </div>
        <span className={styles.time}>{arrival_time}</span>
      </div>
      <div className={styles.date_row}>
        <div className={styles.date_left}>
          <span className={styles.date_label}>{origin}, {origin_name}</span>
          <span className={styles.date_data}>{departure_date}, <span className={styles.capitalized}>{getLocalizedDayOfWeekUppercase(arrival_date)}</span></span>
        </div>
        <div className={styles.date_right}>
          <span className={styles.date_label}>{destination_name}, {destination}</span>
          <span className={styles.date_data}>{arrival_date}, <span className={styles.capitalized}>{getLocalizedDayOfWeekUppercase(arrival_date)}</span></span>
        </div>
      </div>
    </div>
  </div>
}