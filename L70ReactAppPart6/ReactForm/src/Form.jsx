import { useState } from "react";

export default function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("email: ", email);
        console.log("password: ", password);
        setEmail("");
        setPassword("");
    }


    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">
                Email
            </label>

            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">
                Password
            </label>

            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">submit</button>

        </form>
    );
}
