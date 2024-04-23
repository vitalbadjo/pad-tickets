import { useEffect, useMemo, useState } from 'react';
import { TicketType, TicketsResponse, apiService } from './services/api';
import { useQuery } from "react-query"
import { CurrenciesEnum } from './services/utils';
import { searchTicketsByStops } from './utils/data-search';
import { AppHeader } from './components/header/app-header';
import { Sidebar } from './components/sidebar/sidebar';
import { CurrencySelector } from './components/currency-selector/currency-selector';
import { StopsFilter } from './components/stops-filter/stops-filter';
import { AppBody } from './components/body/app-body';
import { Spinner } from './components/utils/spinner';
import { TicketsList } from './components/tickets/tickets-list';
import styles from './styles/App.module.scss';

function App() {
  const { data: tickets, isLoading, error } = useQuery({
    queryKey: ['ticketsData'],
    queryFn: () => apiService().getTickets()
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

  return (
    <div className={styles.app}>
      <AppHeader />
      <AppBody>
        <Sidebar>
          <CurrencySelector onChangeHandler={onChangeCurrency} selectedItem={selectedCurrency} />
          {error ? "Loading data error" : null}
          {isLoading ?
            <Spinner containerWidthCSS='100%' /> :
            <StopsFilter
              stopsFiterValues={stopsFiterValues}
              selectedItems={stopsFilter}
              onChangeHandler={setStopsFilter}
            />
          }
        </Sidebar>
        {error ? "Loading data error" : null}
        {isLoading ?
          <Spinner containerWidthCSS='100%' /> :
          <TicketsList
            tickets={filteredData}
            selectedCurrency={selectedCurrency}
          />}
      </AppBody>
    </div>
  );
}

export default App;
