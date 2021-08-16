import React, { useState , useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/ImageSearchSharp'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EvenNoteIcon from '@material-ui/icons/EventNote'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Posts from './Posts';
import { db } from './firebase'
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import  {useSelector} from 'react-redux'
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts , setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name:user.displayName,
            description:user.email ,
            message:input ,
            photoUrl:user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__Input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)}
                        type="text" />
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="photo"
                        color="#70B5F9"
                    />
                    <InputOptions Icon={SubscriptionsIcon} title="video"
                        color="#E7A33E"
                    />
                    <InputOptions Icon={EvenNoteIcon} title="event"
                        color="#C0CBCD"
                    />
                    <InputOptions Icon={CalendarTodayIcon} title="write"
                        color="#7FC15E"
                    />
                </div>
                </div>
                {/* posts */}
                <FlipMove>
                {posts.map(({id , data: {name, description , message,photoUrl} }) => (
                    <Posts
                    key ={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                    ))}
                </FlipMove>      
        </div>
    );
}

export default Feed
