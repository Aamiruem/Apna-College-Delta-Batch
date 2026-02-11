// export default function counter() {
//     let count = 0;

//         function incCount() {
//             count += 1;
//             console.log(count);
//         }
//     return (
//         <div>
//             <h3>Count: {count}</h3>
//             <button onClick={incCount}>Increment</button>
//             </div>

        
//     );
// }



// import { useState } from 'react';

// export default function Counter() {
//     let arr = useState(0);
//     console.log(arr);
//     return (
//         <div>
//             <h3>Count: {arr[0]}</h3>
//             <button onClick={() => arr[1](arr[0] + 1)}>Increment count</button>
//         </div>
//     )
// }







import { useState } from 'react';
function init() {
    return Math.random();
}

export default function Counter() {
    let [count, setCount] = useState(init());
    console.log("Component is rendered!");
    console.log(`counter = ${count}`);
    // console.log(count);

    let incCount = () => {
        count = count + 1;
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        // console.log(`inside incCount, counter = ${count}`);
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}
