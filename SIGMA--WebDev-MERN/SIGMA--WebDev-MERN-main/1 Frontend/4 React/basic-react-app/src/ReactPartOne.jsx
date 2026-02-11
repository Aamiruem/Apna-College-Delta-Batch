import Discription from "./React_Part1/Discription.jsx"; // import using default export
// import { Discription } from "./React_Part1/Discription.jsx"; // import using named export
import ProductList from "./React_Part1/ProductList.jsx";

function Title() {
    return <h1>I am the Title!</h1>;
}

function ReactPartOne() {
    let msg = "react";

    return (
        // React Fragment open & close angular brackets
        <>
            <Title />
            <Discription />
            <Title />
            <Discription />
            <p>2 * 2 = {2 * 2}</p>
            <h4>This is {msg.toUpperCase()}</h4>
            <ProductList />
        </>
    );
}

export default ReactPartOne;