import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase-config';

function Home() {

    const [postList, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
        };

        getPosts();
    });

    return <div className="homePage"> Home Page </div>;
}

export default Home;