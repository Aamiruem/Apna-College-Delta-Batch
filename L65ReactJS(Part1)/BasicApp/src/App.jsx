
import './App.css'
function Title() {
  return <h1>I am a Title</h1>;
}

function App() {
const name = "Aamir Hussain Azad"
return (
<div className="App">
    <h1>Hello, {name}!</h1>
    
    <p>Welcome to your first React app.</p>
    <button>Click Me</button>
    <Title />
</div>
)
}
export default App
