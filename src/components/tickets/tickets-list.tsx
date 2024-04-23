import { memo } from "react"
import { TicketsResponse } from "../../services/api"
import { CurrenciesEnum } from "../../services/utils"
import { TicketCard } from "./ticket-card"
import styles from "./tickets-list.module.scss"

type ITicketsListProps = {
  tickets: TicketsResponse
  selectedCurrency: CurrenciesEnum
}

export const TicketsList: React.FC<ITicketsListProps> = memo(({ tickets, selectedCurrency }) => {
  return <div className={styles.tickets_list}>
    {tickets.map((el, i) => <TicketCard
      // bad solution for key, it should be an unique id
      key={`${el.price}_${el.carrier}_${el.stops}_${i}`}
      ticketData={el}
      currency={selectedCurrency}
      buyAction={() => { }}
    />)}
  </div>
})