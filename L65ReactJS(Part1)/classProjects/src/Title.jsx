import "./App.css";
function Title() {
    let name = "Aamir";
    return (
        <div>
            <h1>i am the Title Component</h1>;
            <h3>I am the Description</h3>
            <p> {name.toLocaleUpperCase()} </p>
            </div>
    
    );
}
export default Title;
// export { Title };
