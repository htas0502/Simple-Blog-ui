import { useEffect, useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate()

    // handle submit post
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            },
        });
        navigate('/');
    }

    // Route protection.
    useEffect(() => {
        if (!isAuth) {
            navigate("/error");
        } else {
            navigate("/createpost");
        }
    }, [])

    return <div className="createPostPage">
        <div className="cpContainer">
            <h1>Create a Post</h1>
            <div className="inputGp">
                <label> Title: </label>
                <input placeholder="Title..." onChange={(event) => {setTitle(event.target.value)}} />
            </div>
            <div className="inputGp">
                <label> Post: </label>
                <textarea placeholder="Post..." onChange={(event) => {setPostText(event.target.value)}} />
            </div>
            <button onClick={createPost}> Create Post</button>
        </div>
    </div>;
}

export default CreatePost;