import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []); // the comma and empty array make sure that useEffect is only called ONCE
  // otherwise, useEffect is called everytime the state is rendered
  // and you dont want to call an API over and over again

  return (
    <div>
      <Header as="h2" icon="users" content="llyfrio" />

      <List>
        <ul>
          {posts.map((post: any) => (
            <List.Item key={post.id}>
              {post.description} - Rating: {post.rating}/10
            </List.Item>
          ))}
        </ul>
      </List>
    </div>
  );
}

export default App;
