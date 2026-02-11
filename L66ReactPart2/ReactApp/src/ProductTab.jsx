import Product from "./Product.jsx";


function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="Phone" price={100000} features = {options} />
      <Product title="Laptop" price={200000} />
      <Product title="Tablet" price="50000" />
      <Product title="Watch" price={3000} />
    </>
  );
}

export default ProductTab;
