import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import Inputoptions from "./Inputoptions";
import ImageIcon from "@material-ui/icons/Image";
import Post from "./Post";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { db } from "./firebase";
import firebase from "firebase";
import Recents from './Recents';
import Sidebar from './Sidebar';
import './App.css';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "abubakar",
      description: "abubakar@gmail.com",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <div className="App_body">
        <Sidebar />
        <div className="feed">
          <div className="feed_inputcontainer">
            <div className="feed_input">
              <CreateIcon />
              <form>
                <input
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  type="text"
                />
                <button onClick={sendPost} type="submit">
                  Send
                </button>
              </form>
            </div>

            <div className="feed_inputoptions">
              <Inputoptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
              <Inputoptions
                Icon={SubscriptionsIcon}
                title="Video"
                color="#70B5F9"
              />
              <Inputoptions Icon={EventNoteIcon} title="Text" color="#70B5F9" />

            </div>
          </div>
          {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          ))}
        </div>
        <Recents /> </div></div>


  );
}

export default Feed;
