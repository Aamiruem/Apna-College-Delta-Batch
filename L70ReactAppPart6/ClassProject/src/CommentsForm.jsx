/* eslint-disable react/prop-types */
// import { useState } from "react";

// export default function CommentsForm( addNewComment ) {
//     let [formData, setFormData] = useState({
//         username: "",
//         remarks: "",
//         rating: 5
//     }); //formData

//     let handleInputChange = (event) => {
//         setFormData((currData) => {
//             return {...currData, [event.target.name]: event.target.value };
//         });



//     //     setFormData({ ...currData, [event.target.name]: event.target.value });
//     // }

//     // let handleRatingChange = (event) => {
//     //     setFormData((currData) => {
//     //         return {...currData, [event.target.name]: event.target.value };
//         //     });




//     }

//     let handleSubmit = (event) => {
//         console.log(formData);
//         addNewComment(formData);
//         event.preventDefault();
//         setFormData({
//             username: "",
//             remarks: "",
//             rating: 5
//         });
//     }


//     return (
//         <div>
//             <h4>Give a Comments</h4>
//             <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username: </label>
//                 <input type="text" placeholder="Enter your username" value={formData.username} onChange={handleInputChange} id="username"
//                     name="username"
//             />
//             <br />
//             <br />
//             &nbsp;&nbsp;
//             <label htmlFor="remarks">Remarks: </label>
//             <textarea value={formData.remarks} placeholder="Enter your remarks" onChange={handleInputChange}
//                 id="remarks"
//                 name="remarks"
//             >Remarks</textarea>
//             <br />
//             <br />
//             <label htmlFor="rating">Rating: </label>
//             <input type="number" placeholder="rating" min={1}
//                 max={5}
//                 value={formData.rating}
//                 onChange={handleInputChange}
//                 id="rating"
//                 name="rating"
//             />
//             &nbsp;&nbsp;
//             <br />
//             <br />
//                 <button type="submit" >Add Comment</button>
//             </form>
//         </div>
//     )
// }











// import { useState } from "react";
// // import { userFormik } from "formik";

// // eslint-disable-next-line react/prop-types
// export default function CommentsForm({ addNewComment }) {
//     let [formData, setFormData] = useState({
//         username: "",
//         remarks: "",
//         rating: 5
//     });

//     let [isValid, setIsValid] = useState({
//         username: true,
//         remarks: true,
//         rating: true
//     });


//     // Handle changes in the form fields
//     let handleInputChange = (event) => {
//         setFormData((currData) => ({
//             ...currData,
//             [event.target.name]: event.target.value,
//         }));
//     };

//     // Handle form submission
//     let handleSubmit = (event) => {
//         setIsValid((currIsValid) => ({
//             username:!!currIsValid.username && currIsValid.username.length > 0,
//             remarks:!!currIsValid.remarks && currIsValid.remarks.length > 0,
//             rating: currIsValid.rating && formData.rating >= 1 && formData.rating <= 5,
//         }));
//         setIsValid(false);
//         event.preventDefault(); // Prevent form default behavior

//         // Check if fields are valid before adding the comment
//         if (!formData.username || !formData.remarks || formData.rating < 1 || formData.rating > 5) {
//             alert("Please fill out all fields correctly.");
//             console.log("Please fill out all fields correctly.");
//             return;
//         }

//         // Add the new comment through the addNewComment prop
//         addNewComment(formData);

//         // Reset the form after submission
//         setFormData({
//             username: "",
//             remarks: "",
//             rating: 5
//         });
//     };

//     return (
//         <div>
//             <h4>Give a Comment</h4>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username: </label>
//                 <input
//                     type="text"
//                     placeholder="Enter your username"
//                     value={formData.username}
//                     onChange={handleInputChange}
//                     id="username"
//                     name="username"
//                 />
//                 {!isValid && !formData.username && <span style={{ color: "red" }}>Please enter a username.</span>}
//                 <br />
//                 <br />

//                 <label htmlFor="remarks">Remarks: </label>
//                 <textarea
//                     placeholder="Enter your remarks"
//                     value={formData.remarks}
//                     onChange={handleInputChange}
//                     id="remarks"
//                     name="remarks"
//                 />
//                 <br />
//                 <br />

//                 <label htmlFor="rating">Rating: </label>
//                 <input
//                     type="number"
//                     placeholder="Rating"
//                     min="1"
//                     max="5"
//                     value={formData.rating}
//                     onChange={handleInputChange}
//                     id="rating"
//                     name="rating"
//                 />
//                 <br />
//                 <br />

//                 <button type="submit">Add Comment</button>
//             </form>
//         </div>
//     );
// }



















// import { useState } from "react";
import { useFormik } from "formik";

// Define the validation function for form fields
const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username cannot be empty!';
    }

    if (!values.remarks) {
        errors.remarks = 'Remarks cannot be empty!';
    }

    if (values.rating < 1 || values.rating > 5) {
        errors.rating = 'Rating must be between 1 and 5!';
    }

    return errors;
};

export default function CommentsForm({ addNewComment }) {
    // Using Formik to manage form state and validation
    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5,
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                // Handle form submission (pass data to parent component)
                addNewComment(values);
                setSubmitting(false);
            }, 400);
        },
    });

    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />
                {formik.errors.username && <span style={{ color: "red" }}>{formik.errors.username}</span>}
                <br />
                <br />

                <label htmlFor="remarks">Remarks: </label>
                <textarea
                    placeholder="Enter your remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    id="remarks"
                    name="remarks"
                />
                {formik.errors.remarks && <span style={{ color: "red" }}>{formik.errors.remarks}</span>}
                <br />
                <br />

                <label htmlFor="rating">Rating: </label>
                <input
                    type="number"
                    placeholder="Rating"
                    min="1"
                    max="5"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    id="rating"
                    name="rating"
                />
                {formik.errors.rating && <span style={{ color: "red" }}>{formik.errors.rating}</span>}
                <br />
                <br />

                <button type="submit" disabled={formik.isSubmitting}>Add Comment</button>
            </form>
        </div>
    );
}
