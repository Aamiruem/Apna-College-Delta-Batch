// import "./TicketNum.css";

// export default function TicketNum({ num })  {
//     return <span className="TicketNum">{num}</span>;
    
// }




import "./TicketNum.css";
import PropTypes from 'prop-types';

export default function TicketNum({ num })  {
    return <span className="TicketNum">{num}</span>;
}

TicketNum.propTypes = {
    num: PropTypes.number.isRequired
};
