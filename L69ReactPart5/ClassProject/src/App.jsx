/* eslint-disable no-unused-vars */
import Lottery from './Lottery';
import './App.css';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from "./helper"



function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
  
      <Lottery n={3} winCondition={winCondition} />
      <TicketNum />
      <ticket />
      <Ticket /> 

    </>
  )
}

export default App
