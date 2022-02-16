import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";
import { Post } from "../models/post";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import PostDashboard from "../../features/posts/dashboard/PostDashboard";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []); // the comma and empty array make sure that useEffect is only called ONCE
  // otherwise, useEffect is called everytime the state is rendered
  // and you dont want to call an API over and over again

  function handleSelectPost(id: string) {
    setSelectedPost(posts.find((x) => x.id === id));
  }

  function handleCancelSelectPost() {
    setSelectedPost(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectPost(id) : handleCancelSelectPost();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  return (
    <Fragment>
      <NavBar openForm={handleFormOpen} />

      <Container style={{ marginTop: "7em" }}>
        <PostDashboard
          posts={posts}
          selectedPost={selectedPost}
          selectPost={handleSelectPost}
          cancelSelectPost={handleCancelSelectPost}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
        />
      </Container>
    </Fragment>
  );
}

export default App;
