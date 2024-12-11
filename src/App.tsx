import { useState } from 'react';
// image
import Logo from './assets/2146459.png';
// components
import Sidebar from './components/Sidebar';
import FlightCard from './components/FlightCard';
// types
import CurrencyType from './types/CurrencyType';
import Option from './types/Option';

// dummy data
import data from './assets/tickets.json';

const optionsData: Option[] = [
  { id: 1, label: "Все", checked: false },
  { id: 2, label: "Без пересадок", checked: false },
  { id: 3, label: "1 пересадка", checked: false },
  { id: 4, label: "2 пересадки", checked: false },
  { id: 5, label: "3 пересадки", checked: false },
];

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("RUB");
  const [options, setOptions] = useState<Option[]>(optionsData);

  // Filter tickets based on selected options
  const filteredTickets = data.tickets.filter(ticket => {
    const selectedStops = options.filter(option => option.checked && option.id !== 1);
    if (selectedStops.length === 0) return true; // If no filter is selected, show all tickets

    return selectedStops.some(option => {
      switch (option.id) {
        case 2:
          return ticket.stops === 0; // "Без пересадок"
        case 3:
          return ticket.stops === 1; // "1 пересадка"
        case 4:
          return ticket.stops === 2; // "2 пересадки"
        case 5:
          return ticket.stops === 3; // "3 пересадки"
        default:
          return true;
      }
    });
  });

  return (
    <main>
      <div className='flex justify-center mt-10'>
        <img src={Logo} alt="airplane" width={100} height={100} />
      </div>
      <div className='container flex items-start gap-5 my-10'>
        <aside className='rounded shadow w-1/4'>
          <Sidebar
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            options={options}
            setOptions={setOptions}
          />
        </aside>
        <div className='w-3/4 flex flex-col gap-5'>
          {
            filteredTickets.map(flight => {
              return (
                <FlightCard {...flight} currency={selectedCurrency} />
              )
            })
          }
        </div>
      </div>
    </main >
  )
}

export default App
