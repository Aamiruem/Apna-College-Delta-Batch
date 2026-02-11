// import {useState} from "react";

// export default function LudoBoard() {
//     let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });
    
//     let updateBlue = () => {
//         moves.blue += 1;
//         console.log(`moves.blue = ${moves.blue}`);
//         setMoves(...moves, moves.blue = moves.blue + 1);
//     }

// SetArr((prevArr) => {
//             return { ...prevArr, [color]: prevArr[color] + 1 };
//             });
//        }
//     };

//     let updateYellow = () => {
//         moves.yellow += 1;
//         console.log(`moves.yellow = ${moves.yellow}`);
//         setMoves(...moves, moves.yellow = moves.yellow + 1);
//     }
    
    
//     return (
//         <div>
//             <p>Game Begins!</p>
//             <div className="board">
//                 <p>Blue moves = {moves.blue}</p>
//                 <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
//                 <p>Yellow moves = {moves.yellow}</p>
//                 <button style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
//                 <p>Green moves = {moves.green}</p>
//                 <button style={{ backgroundColor: "green" }}>+1</button>
//                 <p>Red moves = {moves.red}</p>
//                 <button style={{ backgroundColor: "red" }}>+1</button>
//                 <p>Blue moves = {moves.black}</p>
//                 <button style={{ backgroundColor: "black" }}>+1</button>
//             </div>
//         </div>
//     );
// }










import { useState } from "react";

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

    const updateMoves = (color) => {

        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1,
        }));
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button
                    style={{ backgroundColor: "blue" }}
                    onClick={() => updateMoves("blue")}
                >
                    +1
                </button>

                <p>Yellow moves = {moves.yellow}</p>
                <button
                    style={{ backgroundColor: "yellow", color: "black" }}
                    onClick={() => updateMoves("yellow")}
                >
                    +1
                </button>

                <p>Green moves = {moves.green}</p>
                <button
                    style={{ backgroundColor: "green" }}
                    onClick={() => updateMoves("green")}
                >
                    +1
                </button>

                <p>Red moves = {moves.red}</p>
                <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => updateMoves("red")}
                >
                    +1
                </button>
            </div>
        </div>
    );
}
