import "./Product.css";
// import "./App.jsx";


function Product(title, price, features) {
    console.log(features);
    return (
        <div className="Product">
            <h1>{title}</h1>
            <h5>Price: {price}</h5>
            <h1>Product</h1>
            <p>Product Description</p>
            {/* <p>{features.map((feature) => <li>{feature}</li>)} </p> */}
            <p>features</p>

        </div>
    );
}

export default Product;
