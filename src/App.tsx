import { useEffect, useMemo, useState } from 'react';
import styles from './App.module.scss';
import { TicketType, TicketsResponse, apiService } from './services/api';
import { useQuery } from "react-query"
import { TicketCard } from './components/ticket-card';
import { CurrenciesEnum } from './services/utils';
import { searchTicketsByStops } from './utils/data-search';
import { AppHeader } from './components/app-header';
import { Sidebar } from './components/sidebar';
import { CurrencySelector } from './components/currency-selector';
import { StopsFilter } from './components/stops-filter';
import { AppBody } from './components/app-body';

function App() {
  const { data: tickets, isLoading, error, status } = useQuery({
    queryKey: ['ticketsData'],
    queryFn: () => apiService().getTickets(),
    initialData: []
  });
  const [stopsFilter, setStopsFilter] = useState<number[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<CurrenciesEnum>(CurrenciesEnum.RUB)
  const [filteredData, setFilteredData] = useState<TicketsResponse>([])

  useEffect(() => {
    if (tickets) {
      if (stopsFilter.length) {
        setFilteredData(searchTicketsByStops(tickets, stopsFilter))
      } else {
        setFilteredData(tickets)
      }
    }
  }, [stopsFilter, tickets])

  const onChangeCurrency = (currency: CurrenciesEnum) => {
    setSelectedCurrency(currency)
  }

  // calculate stops filter elements
  const stopsFiterValues = useMemo(() => {
    return !tickets ? [] : tickets.reduce<TicketType["stops"][]>((p, c) => {
      if (p.includes(c.stops)) {
        return p
      }
      return [c.stops, ...p]
    }, []).sort((a, b) => a - b)
  }, [tickets])

  console.log(stopsFiterValues)
  return (
    <div className={styles.app}>
      <AppHeader />
      <AppBody>
        <Sidebar>
          <CurrencySelector onChangeHandler={onChangeCurrency} selectedItem={selectedCurrency} />
          <StopsFilter stopsFiterValues={stopsFiterValues} onChangeHandler={setStopsFilter} />
        </Sidebar>
        <div className='tickets_container'>
          {filteredData.map((el, i) => <TicketCard
            // bad solution for key, it should be an unique id
            key={`${el.price}_${i}`}
            ticketData={el}
            currency={selectedCurrency}
            buyAction={() => { }}
          />)}
        </div>
      </AppBody>

    </div>
  );
}

export default App;
