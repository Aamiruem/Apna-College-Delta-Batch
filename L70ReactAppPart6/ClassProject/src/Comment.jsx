
// import { useState } from "react"; //useState}
// import "./Comment.css";
// import CommentsForm from "./CommentsForm";

// export default function Comment() {
//     let [comments, setComments] = useState([
//         {
//         username: "@ah",
//         remarks: "Good job!",
//             rating: 4
//         },
//     ]);

//     let addNewComment = (comment) => {
//         setComments((currComments) =>
//             [...currComments, comment]);
//     };

//     // let addComment = (comment) =>{
//     //     setComments((currComments) => [...currComments, comment]);
//     // }


//     return (
//         <>
//             <div>
//                 <h3>All Comments!</h3>
//                 {comments.map((comment, idx) => (
                    
//                     <div className="comment" key={idx}>
//                         <span> {comment.remarks}</span>

//                         &nbsp;
//                         <span>(rating = {comment.rating})</span>
//                         <p>- {comment.username}</p>
//                     </div>
//                 ))}
//             </div>
//             <hr></hr>
//             <CommentsForm addNewComment={addNewComment}/>
            
//         </>
//     );
// }










import { useState } from "react"; // Importing useState hook
import "./Comment.css";
import CommentsForm from "./CommentsForm"; // Import CommentsForm component

export default function Comment() {
    // Initial state for comments with an example comment
    const [comments, setComments] = useState([
        {
            username: "@ah",
            remarks: "Good job!",
            rating: 4
        },
    ]);

    // Function to add a new comment
    const addNewComment = (comment) => {
        setComments((prevComments) => [...prevComments, comment]);
    };

    return (
        <>
            <div>
                <h3>All Comments!</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
            <hr />
            {/* Passing the function to CommentsForm component */}
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
