export default function Button() {
    return <button onClick={action}>Buy New Ticket</button>
}

function action() {
    alert("Ticket purchased successfully!");
}
