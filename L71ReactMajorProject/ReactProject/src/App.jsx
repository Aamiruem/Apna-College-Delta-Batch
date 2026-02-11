// import DeleteIcon from '@mui/icons-material/Delete';
// import './App.css'
// import Button from '@mui/material/Button';
// import Alert from '@mui/material/Alert';

// function App() {
//   let handleClick = () => {
//     alert('Button was clicked By Aamir!');
//   };
 

//   return (
//     <>
//       <div>
//         <h1>React Project</h1>
//         <h2>Material UI Demo</h2>
//         <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>
//           Delete 
//         </Button>
        
//         &nbsp;
//         <Button variant="contained" color="black" onClick={handleClick} disabled>
//           Click Me 
//         </Button>
        


//        &nbsp;
//         <Button variant="contained" color="success" size="large" onClick={handleClick} >
//           Click Me 
//         </Button>
//         &nbsp;

//         <Button variant="contained" color="error" onClick={handleClick} >
//           Click Me 
//         </Button>
//       </div>
//       &nbsp;
//       <Alert severity="error">Delete option is given!</Alert>
// &nbsp;
//       <Alert severity="success">Success option is given!</Alert>
//     </>
//   )
// }

// export default App;



















import './App.css'
// import SearchBox from './SearchBox';
// import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';  

function App() {
  return (
    <>
      <WeatherApp/>
      {/* <SearchBox />
      <InfoBox/> */}
    </>
  )
}

export default App;
