function printHello() {
    console.log("Hello");
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me</button>
        </div>
    );
}
