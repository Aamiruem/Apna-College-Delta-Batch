import { useState, useEffect } from "react";
export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx(currCount => currCount + 1);
    }

    let incCounty = () => {
        setCounty(currCount => currCount + 1);
    }

    useEffect(function printSomething()  {
        console.log("Component is rendered!");
    },
        [countx, county]

);
    

    return ( 
    <div>
            <h3>countx = {countx}</h3>
            <button onClick={incCountx}>Increment</button>

             <h3>county = {county}</h3>
            <button onClick={incCounty}>Increment</button>
    </div >
    );
}
