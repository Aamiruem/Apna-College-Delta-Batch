
import Lottery from './Lottery';
import './App.css';
// import TicketNum from './TicketNum';
// import Ticket from './Ticket';


function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
  
      <Lottery n={3} winCondition={winCondition} />
      {/* <TicketNum /> */}
      {/* <Ticket /> */}

    </>
  )
}

export default App
