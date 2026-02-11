/* eslint-disable no-unused-vars */
// import {useState} from "react";

// export default function Form() {
//     let [FullName, setFullName] = useState("");

//     let [username, setUserName] = useState("");
//     let handleNameChange = (event) => {
//     // console.log(event.target.value);
//         setFullName(event.target.value);
//     }
        

//         let handleUserName = (event) => {
//     // console.log(event.target.value);
//             setUserName(event.target.value);
            
//         }
// return (
//     <form action="">
//         <label htmlFor="fullName">FullName:</label>
//         &nbsp;&nbsp;
//         <input placeholder="Enter your FullName" type="text" value={FullName} onChange={handleNameChange} id="fullName" />
//         <br />
//         <br />
//         &nbsp;&nbsp;

//         <label htmlFor="fullName">UserName:</label>
//         &nbsp;&nbsp; <input placeholder="Enter your username" type="text" value={username} onChange={handleUserName} id="userName" />
//         <br />
//         <br />
//         <button>Submit</button>
//     </form>
// );
// }




















import {useState} from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
        
    });
        let handleInputChange = (event) => {
            // let myData = {...formData};
            // myData[event.target.id] = event.target.value;
            // setData(myData);

            let fieldName = event.target.name;
            let fieldValue = event.target.value;

            setFormData({ ...formData, [fieldName]: fieldValue });
            let newValue = event.target.value;
            // console.log(newValue);
            // console.log("fieldName");


            setFormData((currData) => {
                currData[fieldName] = newValue;
                return { ...currData, [fieldName]: newValue,[event.target.name]: event.target.value };
                
            });
    };
    
let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName: "",
        username: "",
        password: "",
    });
};
return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullName">FullName:</label>
        &nbsp;&nbsp;
        <input placeholder="Enter your FullName" type="text" value={formData.fullName} id="fullName"
            name="fullName"
            onChange={handleInputChange}
        />
        <br />
        <br />
        &nbsp;&nbsp;

        <label htmlFor="fullName">UserName:</label>
        &nbsp;&nbsp;
        <input placeholder="Enter your username" type="text" value={formData.userName} id="userName"
            name="userName"
            onChange={handleInputChange}
        />


        &nbsp;&nbsp;
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        &nbsp;&nbsp;
        <input placeholder="Enter your password" type="text" value={formData.Password} id="password"
            name="password"
            onChange={handleInputChange}
        />
        
        <br />
        <br />
        <button>Submit</button>
    </form>
);
}
