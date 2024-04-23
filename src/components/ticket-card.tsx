import React from "react";
import { carrier as carrierLogo } from "../media/logos"
import { TicketType } from "../services/api";
import { CurrenciesEnum } from "../services/utils";
import { getLocalizedDayOfWeekUppercase } from "../utils/date";
import { Button } from "./button";
import styles from "./ticket-card.module.scss"

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
      <div>
        <span>{departure_time}</span>
        <div>
          <span>{stops} пересадки</span>
          {/* arrow and logo */}
        </div>
        <span>{arrival_time}</span>
      </div>
      <div>
        <div>
          <span>{origin}, {origin_name}</span>
          <span>{departure_date}, {getLocalizedDayOfWeekUppercase(arrival_date)}</span>
        </div>
        <div>
          <span>{destination_name}, {destination}</span>
          <span>{arrival_date}, {getLocalizedDayOfWeekUppercase(arrival_date)}</span>
        </div>
      </div>
    </div>
  </div>
}